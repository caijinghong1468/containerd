'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Heading,
  VStack,
  useToast,
  Text,
} from '@chakra-ui/react';
import LoginButton from '@/components/auth/LoginButton';

export default function Home() {
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

        <LoginButton />
      </VStack>
    </Container>
  );
}