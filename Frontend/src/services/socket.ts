import socketIO from 'socket.io-client';

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:8080';

class SocketService {
  private socket: ReturnType<typeof socketIO> | null = null;
  private noteUpdateCallback: ((data: any) => void) | null = null;

  connect() {
    if (!this.socket) {
      this.socket = socketIO(SOCKET_URL);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  joinNote(noteId: string) {
    if (this.socket) {
      this.socket.emit('join', { note_id: noteId });
    }
  }

  leaveNote(noteId: string) {
    if (this.socket) {
      this.socket.emit('leave', { note_id: noteId });
    }
  }

  updateNote(noteId: string, content: string, title: string) {
    if (this.socket) {
      this.socket.emit('update', {
        note_id: noteId,
        content,
        title,
      });
    }
  }

  onNoteUpdate(callback: (data: any) => void) {
    this.noteUpdateCallback = callback;
    if (this.socket) {
      this.socket.on('note_update', callback);
    }
  }

  offNoteUpdate() {
    if (this.socket && this.noteUpdateCallback) {
      this.socket.off('note_update', this.noteUpdateCallback);
      this.noteUpdateCallback = null;
    }
  }
}

export const socketService = new SocketService();
