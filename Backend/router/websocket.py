from fastapi import APIRouter, WebSocket, WebSocketDisconnect

router = APIRouter()
connections = {}


@router.websocket("/ws/notes/{note_id}")
async def websocket_endpoint(websocket: WebSocket, note_id: str):
    await websocket.accept()