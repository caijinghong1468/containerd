import React, { useState, MouseEvent } from 'react';
import {
  Box,
  VStack,
  Button,
  Text,
  Divider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  IconButton,
  HStack,
  useToast,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { DeleteIcon, SearchIcon } from '@chakra-ui/icons';
import { useStore } from '@/store/useStore';
import { v4 as uuidv4 } from 'uuid';
import { Note } from '@/types';

// 側邊欄組件
const Sidebar: React.FC = () => {
  // 從 store 中獲取必要的狀態和函數
  const notes = useStore((state) => state.notes);
  const currentNote = useStore((state) => state.currentNote);
  const addNote = useStore((state) => state.addNote);
  const setCurrentNote = useStore((state) => state.setCurrentNote);
  const deleteNote = useStore((state) => state.deleteNote);
  
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // 處理搜尋 - 只搜尋標題
  const filteredNotes = notes.filter((note) => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 處理刪除筆記
  const handleDeleteNote = (noteId: string, e: MouseEvent) => {
    e.stopPropagation(); // 防止觸發筆記選擇
    
    if (window.confirm('確定要刪除這則筆記嗎？')) {
      deleteNote(noteId);
      toast({
        title: '筆記已刪除',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  // 處理新建筆記
  const handleCreateNote = () => {
    const newNote = {
      id: uuidv4(),
      title: newNoteTitle || '未命名筆記',
      content: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      tags: [],
    };
    
    addNote(newNote);
    setCurrentNote(newNote);
    setNewNoteTitle('');
    onClose();
  };

  return (
    <Box
      w="300px"
      h="100vh"
      bg="gray.50"
      p={4}
      borderRight="1px"
      borderColor="gray.200"
    >
      <VStack spacing={4} align="stretch">
        <Button colorScheme="blue" onClick={onOpen}>
          新建筆記
        </Button>
        
        {/* 搜尋輸入框 */}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="搜尋筆記標題..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            bg="white"
          />
        </InputGroup>
        
        <Divider />
        
        <VStack spacing={2} align="stretch" overflowY="auto" maxH="calc(100vh - 180px)">
          {filteredNotes.map((note) => (
            <Box
              key={note.id}
              p={2}
              bg={currentNote?.id === note.id ? 'blue.50' : 'white'}
              borderRadius="md"
              cursor="pointer"
              onClick={() => setCurrentNote(note)}
              _hover={{ bg: 'gray.100' }}
            >
              <HStack justify="space-between">
                <VStack align="start" spacing={1} flex="1">
                  <Text noOfLines={1}>{note.title}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {new Date(note.updatedAt).toLocaleDateString()}
                  </Text>
                </VStack>
                <IconButton
                  aria-label="刪除筆記"
                  icon={<DeleteIcon />}
                  size="sm"
                  colorScheme="red"
                  variant="ghost"
                  onClick={(e: MouseEvent) => handleDeleteNote(note.id, e)}
                />
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>

      {/* 新建筆記的 Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>新建筆記</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input
              placeholder="輸入筆記標題"
              value={newNoteTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewNoteTitle(e.target.value)}
              onKeyPress={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter') {
                  handleCreateNote();
                }
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Sidebar; 