import http from 'k6/http';
import ws from 'k6/ws';
import { check, sleep } from 'k6';

export let options = {
  vus: 5,
  duration: '10s',
};

const BASE_URL = 'http://backend:8080';

/**
 * 在測試開始前，等待 backend API 準備好
 */
export function setup() {
  let isReady = false;
  const maxRetries = 15;
  let attempts = 0;

  console.log("🟡 等待 backend 就緒...");
  while (!isReady && attempts < maxRetries) {
    try {
      const res = http.get(`${BASE_URL}/api/notes`);
      if (res.status === 200) {
        isReady = true;
        console.log("🟢 backend 就緒，開始測試");
      } else {
        console.log(`⏳ backend 還沒就緒，狀態碼：${res.status}`);
        sleep(2);
        attempts++;
      }
    } catch (e) {
      console.warn('🚫 backend 尚未啟動，重試中...');
      sleep(2);
      attempts++;
    }
  }

  if (!isReady) {
    throw new Error('❌ backend 在預期時間內沒有啟動成功，請確認服務狀態');
  }
}

/**
 * 建立一個筆記，回傳 note_id
 */
function createNote() {
  const payload = JSON.stringify({ title: `LoadTest Note ${__VU}-${__ITER}` });
  const params = { headers: { 'Content-Type': 'application/json' } };
  const res = http.post(`${BASE_URL}/api/notes`, payload, params);
  check(res, { 'create note status 200': (r) => r.status === 200 });
  return res.json('id');
}

/**
 * 用 WebSocket 測試 Socket.IO 功能
 */
function testSocketIo(noteId) {
    //組出 WebSocket 的連線位址（對應 Socket.IO）
  const url = `${BASE_URL.replace('http', 'ws')}/socket.io/?EIO=4&transport=websocket`;
    //呼叫 k6 的 ws.connect，開始 WebSocket 連線
  const res = ws.connect(url, null, socket => {
    //如果 15 秒鐘內還沒主動關閉，就強制自動關閉
    socket.setTimeout(() => socket.close(), 15000);
    //監聽底層 WebSocket 的 open 事件
    socket.on('open', () => {
      // Socket.IO 規範裡，「42」代表一個事件（message）框架
      // 這行會送出 join 事件，payload 是 { note_id: ... }
      const joinMsg = `42["join",{"note_id":"${noteId}"}]`;
      socket.send(joinMsg);
    });
    //當收到任何 message 時都會來到這裡處理
    socket.on('message', (data) => {
      // 握手完成的訊息：當 server 回傳 "40" 時，代表已經切換到 WebSocket 交通
      if (data.startsWith('40')) {
        // 準備要發 update_note 事件的資料
        const updatePayload = {
          note_id: noteId,
          title: `Updated by VU${__VU}`,
          content: `Hello from VU${__VU}-${__ITER}`,
          created_at: new Date().toISOString(),
        };
        // 「42」代表事件，["update_note", payload]
        const updateMsg = `42["update_note",${JSON.stringify(updatePayload)}]`;
        socket.send(updateMsg);
      }

       // 收到 server 廣播 note_update 事件（包含字串 'note_update'）
      if (data.includes('note_update')) {
        // 用 k6 的 check 驗證確實收到 note_update
        check(data, {
          'received note_update': (m) => m.indexOf('note_update') !== -1,
        });
        // 驗證完就關閉連線
        socket.close();
      }
    });
    //監聽連線被關閉
    socket.on('close', () => {});
    //監聽錯誤
    socket.on('error', (e) => {
      console.error('ws 發生錯誤: ', e);
    });
  });
  //檢查底層 HTTP 升級為 WebSocket 的狀態碼是否為 101
  check(res, { 'status is 101': (r) => r && r.status === 101 });
}


// 主測試函式
export default function () {
  const noteId = createNote();
  testSocketIo(noteId);
  sleep(1);
}