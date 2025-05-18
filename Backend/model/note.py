from pydantic import BaseModel

class NoteCreate(BaseModel):
    title: str

class NoteUpdate(BaseModel):
    content: str