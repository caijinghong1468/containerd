# **SyncNote**
A collaborative note-taking project that enables real-time synchronization among multiple users.
## System Architecture  
![系統架構](./images/system.png)

## Main Feature
```
1. 使用者認證
2. 筆記的創建、編輯和刪除
3. 即時協作編輯
```

## 功能展示

### 1. 登入頁面：
#### - 點擊開始使用進入系統主頁面
![登入頁面](./images/login.png)

### 2. 筆記列表頁面：
#### - 進來系統主頁面，顯示所有之前新增的筆記
![筆記列表](./images/notes.png)

### 3. 創建新筆記：
#### - 點擊右上角的新增筆記，輸入筆記標題
![創建新筆記](./images/create_note.png)

### 4. 筆記操作：
#### - 點擊筆記列進入共編筆記，或點選delete icon刪除筆記
![點擊或刪除筆記](./images/click_or_delete.png)

### 5. 筆記編輯：
#### - 在此處輸入筆記內容
![筆記編輯](./images/note.png)

### 6. 協作功能：
#### - 透過Socket.io，在另一位使用者畫面同步顯示筆記更改畫面
![協作筆記](./images/co_note.png)

## How to use
```
1.安裝docker destop
2.在專案目錄下執行 `docker compose up --build`
3.進入 http://localhost:3000/ 即可
```

## Backend Introduction
### API
- **`@sio.on("update_note")`**: 使用Last Write Wins機制，即時更新筆記內容並廣播給所有使用者
- **`@app.post("/api/notes")`**: 提供前端使用者傳入title創建筆記，並回傳筆記 ID  
- **`@app.get("/api/notes")`**: 提供前端使用者取得所有筆記以顯示在列表中  
- **`@app.get("/api/notes/{note_id}")`**: 提供前端使用者取得指定筆記
- **`@app.delete("/api/notes/{note_id}")`**: 刪除指定的筆記
### 後端與資料庫如何協作？
```
在資料處理的協作上，後端架構引入了Redis作為MongoDB與後端服務之間的快取層，當後端有資料需求時，會優先查詢Redis是否已經快取這筆資料。如果Redis已有相關資料，則直接使用快取的資料，省去與MongoDB交互的時間；若Redis中無法找到資料，後端會從MongoDB中抓取資料，接著再將資料回傳給前端並同步存入Redis快取，以便下次使用。之所以採用這種架構設計，是因為Redis將資料儲存在記憶體（RAM）中，資料存取速度遠比MongoDB存取硬碟（disk）要快速許多。在強調即時性與效能的筆記同步場景中，透過這種方式將Redis置於資料庫與後端之間，可有效提高資料處理效率與整體使用體驗。
```
