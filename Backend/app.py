from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from router.websocket import router as ws_router
from model.note import NoteCreate, NoteUpdate

app = FastAPI()
app.include_router(ws_router)

# CORS for frontend testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/notes")
def create(note: NoteCreate):
    return create_note(note)

@app.get("/notes/{note_id}")
def read(note_id: str):
    return get_note(note_id)

@app.put("/notes/{note_id}")
def update(note_id: str, note: NoteUpdate):
    return update_note(note_id, note)