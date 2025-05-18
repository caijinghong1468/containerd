'use client';

import { useState } from 'react';
import {
  Box,
  VStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  Tooltip,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNotes } from '@/contexts/NotesContext';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { createNote } = useNotes();
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleCreateNote = async () => {
    try {
      setIsCreating(true);
      const newNote = await createNote('新筆記');
      router.push(`/notes/${newNote.id}`);
    } catch (error) {
      console.error('創建筆記失敗:', error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      bottom={0}
      width="60px"
      bg={bgColor}
      borderRight="1px"
      borderColor={borderColor}
      py={4}
    >
      <VStack spacing={4} align="center">
        <Tooltip label="切換主題" placement="right">
          <IconButton
            aria-label="切換主題"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            variant="ghost"
            onClick={toggleColorMode}
          />
        </Tooltip>
      </VStack>
    </Box>
  );
} 