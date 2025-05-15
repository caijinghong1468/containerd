import uuid
from pydantic import BaseModel
from sqlalchemy import Column, Integer, String
from Backend.db import Base

class User(Base):
    __tablename__ = "users"
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))

#  檢查欄位，content 缺少或不是字串，FastAPI 會自動擋掉並回傳 422 錯誤
class UserCreate(BaseModel):
    pass # user沒有其他欄位

# 繼承UserCreate，定義輸出格式，限制回傳給前端的格式
class UserOut(UserCreate):
    id: str  # UUID 會被轉成字串

    model_config = {
        "from_attributes": True
    }