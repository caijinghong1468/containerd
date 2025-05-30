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

###  登入頁面：
#### - 點擊開始使用進入系統主頁面
![登入頁面](./images/login.png)

### 筆記列表頁面：
#### - 進來系統主頁面，顯示所有之前新增的筆記
![筆記列表](./images/notes.png)

### 創建新筆記：
#### - 點擊右上角的新增筆記，輸入筆記標題
![創建新筆記](./images/create_note.png)

### 筆記操作：
#### - 點擊筆記列進入共編筆記，或點選delete icon刪除筆記
![點擊或刪除筆記](./images/click_or_delete.png)

### 筆記編輯：
#### - 在此處輸入筆記內容
![筆記編輯](./images/note.png)

### 協作功能：
#### - 透過Socket.io，在另一位使用者畫面同步顯示筆記更改畫面
![協作筆記](./images/co_note.png)

## How to use
```
1.安裝docker destop
2.在專案目錄下執行 `docker compose up --build`
3.進入 http://localhost:3000/ 即可
```

## Backend Introduction


