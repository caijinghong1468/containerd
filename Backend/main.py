from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
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

# 模型定義
class NoteCreate(BaseModel):
    title: str

class NoteUpdate(BaseModel):
    title: str | None = None
    content: str | None = None

class Note(BaseModel):
    id: str
    title: str
    content: str
    created_at: str
    updated_at: str

# Socket.IO 事件處理
@sio.event
async def connect(sid, environ):
    print(f"Client connected: {sid}")

@sio.event
async def disconnect(sid):
    print(f"Client disconnected: {sid}")

@sio.event
async def join(sid, data):
    note_id = data['note_id']
    sio.enter_room(sid, f"note_{note_id}")
    print(f"Client {sid} joined note {note_id}")

@sio.event
async def leave(sid, data):
    note_id = data['note_id']
    sio.leave_room(sid, f"note_{note_id}")
    print(f"Client {sid} left note {note_id}")

@sio.event
async def update(sid, data):
    note_id = data['note_id']
    title = data['title']
    content = data['content']
    
    # 更新 Redis
    note_key = f"note:{note_id}"
    now = datetime.utcnow().isoformat()
    update_data = {
        "title": title,
        "content": content,
        "updated_at": now
    }
    redis_client.hset(note_key, mapping=update_data)
    
    # 廣播更新
    await sio.emit('note_update', {
        "note_id": note_id,
        "title": title,
        "content": content
    }, room=f"note_{note_id}")

# 筆記相關路由
@app.post("/api/notes", response_model=Note)
async def create_note(note: NoteCreate):
    # 獲取當前最大的筆記 ID
    max_id = 0
    for key in redis_client.scan_iter("note:*"):
        note_id = int(key.split(":")[1])
        max_id = max(max_id, note_id)
    
    note_id = str(max_id + 1)
    now = datetime.utcnow().isoformat()
    note_data = {
        "id": note_id,
        "title": note.title,
        "content": "",
        "created_at": now,
        "updated_at": now
    }
    redis_client.hset(f"note:{note_id}", mapping=note_data)
    return Note(**note_data)

@app.put("/api/notes/{note_id}", response_model=Note)
async def update_note(note_id: str, note_update: NoteUpdate):
    note_key = f"note:{note_id}"
    if not redis_client.exists(note_key):
        raise HTTPException(status_code=404, detail="筆記不存在")
    
    note_data = redis_client.hgetall(note_key)
    now = datetime.utcnow().isoformat()
    
    update_data = {}
    if note_update.title is not None:
        update_data["title"] = note_update.title
    if note_update.content is not None:
        update_data["content"] = note_update.content
    update_data["updated_at"] = now
    
    redis_client.hset(note_key, mapping=update_data)
    
    # 更新本地數據
    note_data.update(update_data)
    return Note(**note_data)

@app.get("/api/notes", response_model=List[Note])
async def list_notes():
    notes = []
    for key in redis_client.scan_iter("note:*"):
        note_data = redis_client.hgetall(key)
        notes.append(Note(**note_data))
    return sorted(notes, key=lambda x: int(x.id))

@app.get("/api/notes/{note_id}", response_model=Note)
async def get_note(note_id: str):
    note_data = redis_client.hgetall(f"note:{note_id}")
    if not note_data:
        raise HTTPException(status_code=404, detail="筆記不存在")
    return Note(**note_data)

@app.delete("/api/notes/{note_id}")
async def delete_note(note_id: str):
    if not redis_client.exists(f"note:{note_id}"):
        raise HTTPException(status_code=404, detail="筆記不存在")
    redis_client.delete(f"note:{note_id}")
    return {"message": "筆記已刪除"}