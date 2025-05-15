from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException
# from router.websocket import router as ws_router
from Backend.model.note import Note, NoteCreate, NoteOut
from Backend.model.user import User, UserCreate, UserOut
from Backend.db import SessionLocal, engine, Base
from sqlalchemy.orm import Session

app = FastAPI()
# app.include_router(ws_router)

Base.metadata.create_all(bind=engine)

# CORS for frontend testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal() # 開一個 session
    try:
        yield db
    finally:
        db.close()

# 新增note
@app.post("/notes/", response_model=NoteOut)
def create_note(note: NoteCreate, db: Session = Depends(get_db)):
    new_note = Note(
        title=note.title,
        content=note.content
    )
    db.add(new_note)
    db.commit()
    db.refresh(new_note) # 實際寫入到 SQLite 資料庫
    return new_note  # 會被轉成 NoteOut 格式（含 id + content + title）

# 查看特定notes的資料
@app.get("/notes/{note_id}", response_model=NoteOut)
def get_note(note_id: str, db: Session = Depends(get_db)):
    note = db.query(Note).filter(Note.id == note_id).first()
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    return note

# 新增user
@app.post("/users", response_model=UserOut)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    new_user = User()
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

# 查看所有user
@app.get("/users", response_model=list[UserOut])
def get_all_users(db: Session = Depends(get_db)):
    return db.query(User).all()

# 查看所有notes
@app.get("/notes", response_model=list[NoteOut])
def get_all_notes(db: Session = Depends(get_db)):
    return db.query(Note).all()
