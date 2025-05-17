import { create } from 'zustand';
import { Note, Folder, UserState } from '@/types';

// 定義 store 的型別
interface AppState {
  // 使用者狀態
  user: UserState;
  // 筆記列表
  notes: Note[];
  // 資料夾列表
  folders: Folder[];
  // 當前選中的筆記
  currentNote: Note | null;
  // 當前選中的資料夾
  currentFolder: Folder | null;
  
  // Actions
  setUser: (user: UserState) => void;
  addNote: (note: Note) => void;
  updateNote: (note: Note) => void;
  deleteNote: (noteId: string) => void;
  addFolder: (folder: Folder) => void;
  updateFolder: (folder: Folder) => void;
  deleteFolder: (folderId: string) => void;
  setCurrentNote: (note: Note | null) => void;
  setCurrentFolder: (folder: Folder | null) => void;
}

// 建立 store
export const useStore = create<AppState>((set) => ({
  // 初始狀態
  user: {
    userId: '',
    isLoggedIn: false,
  },
  notes: [],
  folders: [],
  currentNote: null,
  currentFolder: null,

  // Actions
  setUser: (user) => set({ user }),
  
  addNote: (note) => set((state) => ({
    notes: [...state.notes, note],
  })),
  
  updateNote: (note) => set((state) => ({
    notes: state.notes.map((n) => (n.id === note.id ? note : n)),
  })),
  
  deleteNote: (noteId) => set((state) => ({
    notes: state.notes.filter((n) => n.id !== noteId),
  })),
  
  addFolder: (folder) => set((state) => ({
    folders: [...state.folders, folder],
  })),
  
  updateFolder: (folder) => set((state) => ({
    folders: state.folders.map((f) => (f.id === folder.id ? folder : f)),
  })),
  
  deleteFolder: (folderId) => set((state) => ({
    folders: state.folders.filter((f) => f.id !== folderId),
  })),
  
  setCurrentNote: (note) => set({ currentNote: note }),
  
  setCurrentFolder: (folder) => set({ currentFolder: folder }),
})); 