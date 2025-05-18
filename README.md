# containerd-多人即時協作筆記
## TL;DR
MultiNotes 是一個基於 React + Next.js 和 FastAPI 的多人即時協作筆記系統。使用者可以即時編輯和共享筆記，支援 Markdown 格式，並提供即時更新功能。
## Usage
```git clone [this repo]```
```docker-compose up --build```
## Architecture
containerd/
├── Frontend/          # 前端 (Next.js + React)
├── Backend/           # 後端 (FastAPI + Socket.IO)
└── docker-compose.yaml # Docker 配置
## Frontend
Frontend/
├── src/
│   ├── app/                    # Next.js 應用
│   │   ├── page.tsx           # 首頁（登入頁面）
│   │   ├── notes/             # 筆記相關頁面
│   │   │   ├── page.tsx       # 筆記列表
│   │   │   └── [id]/          # 筆記編輯頁面
│   │   └── layout.tsx         # 根佈局
│   ├── components/            # React 組件
│   ├── contexts/              # React Context
│   │   └── NotesContext.tsx   # 筆記狀態管理
│   └── services/              # 服務
│       ├── api.ts             # API 調用
│       └── socket.ts          # Socket.IO 客戶端
└── package.json               # 前端依賴
## Backend
Backend/
├── main.py           # 主程式
├── requirements.txt  # Python 依賴
└── Dockerfile       # 後端容器配置

## Tech stack
前端
- 框架: Next.js 14
- UI : React 18, Chakra UI
- 狀態管理: React Context
- 即時通訊: Socket.IO Client
後端
- 框架: FastAPI
- 即時通訊: Socket.IO
- 資料庫: Redis
# Workflow
用戶操作 -> 前端 UI
  ↓
Socket.IO/API 請求
  ↓
後端處理
  ↓
Redis 存儲
  ↓
Socket.IO 廣播
  ↓
其他用戶更新
