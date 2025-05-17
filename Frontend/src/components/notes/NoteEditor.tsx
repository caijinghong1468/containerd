import { useEffect, useState, ChangeEvent } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Box, Input, VStack } from '@chakra-ui/react';
import { useStore } from '@/store/useStore';
import { Note } from '@/types';

// 筆記編輯器組件
const NoteEditor: React.FC<{ noteId?: string }> = ({ noteId }) => {
  // 從 store 中獲取當前筆記和更新筆記的函數
  const currentNote = useStore((state) => state.currentNote);
  const updateNote = useStore((state) => state.updateNote);
  
  // 本地狀態
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 當 currentNote 改變時更新本地狀態
  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    }
  }, [currentNote]);

  // 處理標題變更
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    
    if (currentNote) {
      updateNote({
        ...currentNote,
        title: newTitle,
        updatedAt: new Date(),
      });
    }
  };

  // 處理內容變更
  const handleContentChange = (value?: string) => {
    if (value !== undefined) {
      setContent(value);
      
      if (currentNote) {
        updateNote({
          ...currentNote,
          content: value,
          updatedAt: new Date(),
        });
      }
    }
  };

  return (
    <VStack spacing={4} align="stretch" p={4}>
      <Input
        value={title}
        onChange={handleTitleChange}
        placeholder="輸入筆記標題"
        size="lg"
        variant="filled"
      />
      <Box data-color-mode="light">
        <MDEditor
          value={content}
          onChange={handleContentChange}
          preview="edit"
          height={500}
        />
      </Box>
    </VStack>
  );
};

export default NoteEditor; 