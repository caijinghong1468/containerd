'use client';

import { Inter } from 'next/font/google';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { NotesProvider } from '@/contexts/NotesContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'blue',
      },
    },
  },
});

// 根佈局組件
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <ChakraProvider theme={theme}>
          <NotesProvider>
            {children}
          </NotesProvider>
        </ChakraProvider>
      </body>
    </html>
  );
} 