'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Button,
  Container,
  Heading,
  VStack,
  useToast,
  Text,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // 生成一個隨機的用戶 ID
      const userId = uuidv4();
      localStorage.setItem('userId', userId);
      router.push('/notes');
    } catch (error) {
      console.error('登入失敗:', error);
      toast({
        title: '登入失敗',
        description: '請稍後再試',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxW="container.sm" py={20}>
      <VStack spacing={8} align="center">
        <Heading
          as="h1"
          size="2xl"
          bgGradient="linear(to-r, blue.400, blue.600)"
          bgClip="text"
          fontWeight="extrabold"
        >
          多人筆記協作系統
        </Heading>
        
        <Text fontSize="lg" color="gray.600" textAlign="center">
          一個簡單、高效的多人協作筆記平台
        </Text>

        <Button
          size="lg"
          colorScheme="blue"
          onClick={handleLogin}
          isLoading={isLoading}
          loadingText="登入中..."
          px={8}
          py={6}
          fontSize="lg"
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
          transition="all 0.2s"
        >
          開始使用
        </Button>
      </VStack>
    </Container>
  );
} 