from pydantic import BaseModel

class NoteCreate(BaseModel):
    title: str

class NoteUpdate(BaseModel):
    title: str | None = None
    content: str | None = None

class Note(BaseModel):
    id: str
    title: str
    content: str