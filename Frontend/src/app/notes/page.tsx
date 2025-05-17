'use client';

import { Box, Container, Flex, Center, VStack, Text, Button } from '@chakra-ui/react';
import Sidebar from '@/components/layout/Sidebar';
import NoteEditor from '@/components/notes/NoteEditor';
import { useStore } from '@/store/useStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// 筆記頁面組件
export default function NotesPage() {
  const router = useRouter();
  const user = useStore((state) => state.user);
  const notes = useStore((state) => state.notes);
  const currentNote = useStore((state) => state.currentNote);
  const addNote = useStore((state) => state.addNote);
  const setCurrentNote = useStore((state) => state.setCurrentNote);

  // 檢查是否已登入
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      router.push('/');
    }
  }, [router]);

  // 處理新建筆記
  const handleCreateNote = () => {
    const newNote = {
      id: uuidv4(),
      title: '未命名筆記',
      content: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      tags: [],
    };
    
    addNote(newNote);
    setCurrentNote(newNote);
  };

  return (
    <Container maxW="container.xl" h="100vh" p={0}>
      <Flex h="100%">
        <Sidebar />
        <Box flex="1" p={4}>
          {currentNote ? (
            <NoteEditor noteId={currentNote.id} />
          ) : (
            <Center h="100%">
              <VStack spacing={4}>
                <Text fontSize="xl">請選擇或建立一個筆記</Text>
                <Button colorScheme="blue" onClick={handleCreateNote}>
                  建立新筆記
                </Button>
              </VStack>
            </Center>
          )}
        </Box>
      </Flex>
    </Container>
  );
} 