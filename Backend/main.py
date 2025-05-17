import socketio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import redis.asyncio as redis
import uuid
import json
from model.note import NoteCreate

app = FastAPI()

r = redis.Redis(decode_responses=True)

sio = socketio.AsyncServer(async_mode='asgi', cors_allowed_origins='*')
socket_app = socketio.ASGIApp(sio, app)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#提供前端創建一次性user
@app.post("/user")
async def create_user():
    user_id = str(uuid.uuid4())
    #user_key = f"user:{user_id}"
    #await r.set(user_key, json.dumps(user_data))
    return {"user_id": user_id}


#提供前端使用者傳入title創建筆記，並回傳筆記 ID  
@app.post("/notes")
async def create_note(req: NoteCreate):
    note_id = str(uuid.uuid4())
    note_data = {
        "id": note_id,
        "title": req.title,
        "content": ""
    }
    note_key = f"note:{note_id}"
    await r.set(note_key , json.dumps(note_data))
    # 回傳整份 note 給前端
    return note_data

#提供前端使用者取得所有筆記以顯示在列表中
@app.get("/notes/list")
async def list_notes():
    # 取得所有 key 並取出所有筆記（回傳 id 和 title）
    notes = []
    async for key in r.scan_iter(match="note:*"):
        raw = await r.get(key)
        if raw:
            note = json.loads(raw)
            notes.append({
                "id": note["id"],
                "title": note["title"]
            })

    return notes 

#提供前端使用者取得指定筆記
@app.get("/notes/{note_id}")
async def get_note(note_id: str):
    note_key = f"note:{note_id}"
    data = await r.get(note_key)
    return json.loads(data) if data else {}

@sio.event
async def connect(sid, environ):
    print(f"Client connected: {sid}")

@sio.event
async def disconnect(sid):
    print(f"Client disconnected: {sid}")

@sio.on("join_note")
async def join_note(sid, data):
    room = data["note_id"]
    await sio.enter_room(sid, room)
    print(f"{sid} joined room {room}")

@sio.on("update_note")
async def update_note(sid, data):
    note_id = data["note_id"]
    content = data["content"]
    title = data.get("title", "Untitled Note")

    # Last Write Wins：直接覆蓋
    new_data = {
        "id": note_id,
        "title": title,
        "content": content
    }
    note_key = f"note:{note_id}"
    await r.set(note_key, json.dumps(new_data))
    
    # 廣播給所有用戶（含自己）
    await sio.emit("note_updated", new_data, room=note_id)