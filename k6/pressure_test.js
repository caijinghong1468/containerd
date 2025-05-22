import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 1,       
  duration: '10s'
};

export function setup() {
  let isReady = false;
  while (!isReady) {
    let res = http.get('http://backend:8080/api/notes');
    if (res.status === 200) {
      isReady = true;
    } else {
      sleep(2);
    }
  }
}


export default function () {
  // 1. 新增一筆筆記
  let createRes = http.post('http://backend:8080/api/notes', JSON.stringify({
    title: `Note ${__VU}-${__ITER}`
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
  console.log('POST /api/notes status:', createRes.status, ', body:', createRes.body);
  check(createRes, {
    'created successfully': (r) => r.status === 200,
    'has id': (r) => !!r.json().id,
  });

  // 2. 查詢所有筆記
  let listRes = http.get('http://backend:8080/api/notes');
  check(listRes, {
    'list fetched': (r) => r.status === 200,
    'is array': (r) => Array.isArray(r.json())
  });

  sleep(1); // 等待 1 秒
}