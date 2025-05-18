// 筆記的型別定義
export interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

// 資料夾的型別定義
export interface Folder {
  id: string;
  name: string;
  notes: Note[];
}

// 使用者狀態的型別定義
export interface UserState {
  userId: string;
  isLoggedIn: boolean;
}

// 搜尋結果的型別定義
export interface SearchResult {
  id: string;
  title: string;
  content: string;
  matchType: 'title' | 'content';
  matchPosition: number;
}

// 使用者的型別定義
export interface User {
  id: string;
  username: string;
} 