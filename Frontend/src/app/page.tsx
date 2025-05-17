'use client';

import { Box, Container, Heading, VStack } from '@chakra-ui/react';
import LoginButton from '@/components/auth/LoginButton';
import { useStore } from '@/store/useStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// 主頁面組件
export default function Home() {
  const router = useRouter();
  const user = useStore((state) => state.user);

  // 檢查使用者是否已登入
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      router.push('/notes');
    }
  }, [router]);

  return (
    <Container maxW="container.xl" h="100vh">
      <VStack
        spacing={8}
        justify="center"
        align="center"
        h="100%"
      >
        <Heading size="2xl">多人筆記協作系統</Heading>
        <LoginButton />
      </VStack>
    </Container>
  );
} 