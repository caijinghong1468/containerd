from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model.note import NoteCreate, NoteUpdate, Note
from motor.motor_asyncio import AsyncIOMotorClient
import socketio
import redis
import json
import uuid
from datetime import datetime
from typing import List

app = FastAPI()

# 配置 CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 初始化 Socket.IO
sio = socketio.AsyncServer(async_mode='asgi', cors_allowed_origins='*')
socket_app = socketio.ASGIApp(sio, app)

# Redis 連接
try:
    redis_client = redis.Redis(
        host='redis',
        port=6379,
        decode_responses=True
    )
except Exception as e:
    print(f"Redis 連接失敗: {e}")
    raise

# MongoDB 連接
mongo_client = AsyncIOMotorClient("mongodb://localhost:27017")
db = mongo_client["note_db"]
notes_collection = db["notes"]

# Socket.IO 事件處理
@sio.event
async def connect(sid, environ):
    print(f"Client connected: {sid}")

@sio.event
async def disconnect(sid):
    print(f"Client disconnected: {sid}")

@sio.event
async def join(sid, data):
    room = data['note_id']
    sio.enter_room(sid, room )
    print(f"Client {sid} joined note {room }")

@sio.event
async def leave(sid, data):
    room = data['note_id']
    sio.leave_room(sid, room )
    print(f"Client {sid} left note {room}")

@sio.on("update_note")
async def update(sid, data):
    note_id = data['note_id']
    title = data.get("title", "Untitled Note")
    content = data['content']
    create_at = data['created_at']
    now = datetime.utcnow().isoformat()

    # 更新 Redis
    note_key = f"note:{note_id}"
    new_data = {
        "id": note_id,
        "title": title,
        "content": content,
        "created_at": create_at,
        "updated_at": now
    }
    # Redis 覆蓋（Last Write Wins）
    await redis_client.set(note_key, json.dumps(new_data))
    
    # 廣播更新
    await sio.emit('note_update', new_data, room=note_id)

#提供前端使用者傳入title創建筆記，並回傳筆記 ID  
@app.post("/api/notes")
async def create_note(note: NoteCreate):
    note_id = str(uuid.uuid4())
    now = datetime.utcnow().isoformat()
    note_data = {
        "id": note_id,
        "title": note.title,
        "content": "",
        "created_at": now,
        "updated_at": now
    }
    note_key = f"note:{note_id}"
    # 1. 快取到 Redis
    await redis_client.set(note_key, json.dumps(note_data))
    # 2. 寫入 MongoDB
    await notes_collection.insert_one(note_data)
    return note_data


#提供前端使用者取得所有筆記以顯示在列表中
@app.get("/api/notes", response_model=List[Note])
async def list_notes():
    notes = []
    keys = []
    async for key in redis_client.scan_iter(match="note:*"):
        keys.append(key)

    if keys:
        for key in keys:
            raw = await redis_client.get(key)
            if raw:
                note = json.loads(raw)
                notes.append(note)
    else:
        # 從 MongoDB fallback 
        cursor = notes_collection.find({}, {"_id": 0})
        async for note in cursor:
            notes.append(note)
            await redis_client.set(f"note:{note['id']}", json.dumps(note))

    notes.sort(key=lambda n: datetime.fromisoformat(n["created_at"]), reverse=True)
    return notes

#提供前端使用者取得指定筆記
@app.get("/api/notes/{note_id}")
async def get_note(note_id: str):
    note_key = f"note:{note_id}"
    data = await redis_client.get(note_key)

    if data:
        return json.loads(data)

    # 若 Redis 沒有 → 查 MongoDB
    note_data = await notes_collection.find_one({"id": note_id})
    if note_data:
        # 轉成 JSON-friendly 格式（處理 ObjectId）
        note_data.pop("_id", None)
        # 同步到 Redis 快取
        await redis_client.set(note_key, json.dumps(note_data))
        return note_data

    return {"error": "Note not found"}


@app.delete("/api/notes/{note_id}")
async def delete_note(note_id: str):
    note_key = f"note:{note_id}"
    # 1. 刪除 Redis 快取（不管存不存在）
    await r.delete(note_key)

    # 2. 刪除 MongoDB 文件（主資料庫）
    result = await notes_collection.delete_one({"id": note_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="筆記不存在")

    return {"message": "筆記已刪除"}