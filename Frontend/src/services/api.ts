import { Note } from '@/types';

// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';
const API_URL = 'http://localhost:8080/api';
console.log(process.env.NEXT_PUBLIC_API_URL)
// const API_URL = 'http://1.1.1.1:8080/api'; // for local build

export const api = {
  async createNote(title: string): Promise<Note> {
    const response = await fetch(`${API_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      throw new Error('創建筆記失敗');
    }

    return response.json();
  },

  async getNotes(): Promise<Note[]> {
    const response = await fetch(`${API_URL}/notes`);

    if (!response.ok) {
      throw new Error('獲取筆記列表失敗');
    }

    return response.json();
  },

  async getNote(noteId: string): Promise<Note> {
    const response = await fetch(`${API_URL}/notes/${noteId}`);

    if (!response.ok) {
      throw new Error('獲取筆記失敗');
    }

    return response.json();
  },

  async updateNote(noteId: string, data: Partial<Note>): Promise<Note> {// need PUT?
    const response = await fetch(`${API_URL}/notes/${noteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('更新筆記失敗');
    }

    return response.json();
  },

  async deleteNote(noteId: string): Promise<void> {
    const response = await fetch(`${API_URL}/notes/${noteId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('刪除筆記失敗');
    }
  },

  // 更新筆記標題
  async updateNoteTitle(noteId: string, title: string): Promise<Note> {
    const response = await fetch(`${API_URL}/notes/${noteId}/title`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      throw new Error('更新筆記標題失敗');
    }

    return response.json();
  },
};
