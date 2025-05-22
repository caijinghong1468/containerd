'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Note } from '@/types';
import { api } from '@/services/api';
import { socketService } from '@/services/socket';

interface NotesContextType {
  notes: Note[];
  createNote: (title: string) => Promise<Note>;
  getNote: (id: string) => Promise<Note>;
  updateNote: (id: string, data: Partial<Note>) => Promise<Note>;
  deleteNote: (id: string) => Promise<void>;
  refreshNotes: () => Promise<void>;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);

  const loadNotes = async () => {
    try {
      // const notesData = await api.getNotes();
      const notesData: Note = {
        id: "123",
        title: "test",
        content: "ttt",
        created_at: "123",
        updated_at: "123",
      }
      const notesData2: Note = {
        id: "1233123213",
        title: "qqqqq",
        content: "tttaaaaaa",
        created_at: "123222",
        updated_at: "122222",
      }
      console.log("dhwqygdiquywdgqhdyuwqgduyiqwguiqgdugqwuydguy")
      setNotes([notesData, notesData2]);
    } catch (error) {
      console.error('載入筆記失敗:', error);
    }
  };

  useEffect(() => {
    loadNotes();
    socketService.onNoteUpdate((data) => {
      console.log('收到更新通知:', data);
      setNotes((prevNotes) =>
        prevNotes.map((note) =>//接收資料
          note.id === data.id//backend 是 id
            ? { ...note, title: data.title, content: data.content }
            : note
        )
      );
    });
  }, []);

  const createNote = async (title: string) => {
    const newNote = await api.createNote(title);
    setNotes((prevNotes) => [...prevNotes, newNote]);
    return newNote;
  };

  const getNote = async (id: string) => {
    return await api.getNote(id);
  };

  const updateNote = async (id: string, data: Partial<Note>) => {
    const updatedNote = await api.updateNote(id, data);
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? updatedNote : note))
    );
    return updatedNote;
  };

  const deleteNote = async (id: string) => {
    await api.deleteNote(id);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        createNote,
        getNote,
        updateNote,
        deleteNote,
        refreshNotes: loadNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
} 
