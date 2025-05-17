import { Button } from '@chakra-ui/react';
import { useStore } from '@/store/useStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// 登入按鈕組件
const LoginButton = () => {
  const router = useRouter();
  // 從 store 中獲取 setUser 函數
  const setUser = useStore((state) => state.setUser);
  const [isLoading, setIsLoading] = useState(false);

  // 處理登入邏輯
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      
      // 調用後端 API
      const response = await fetch('http://localhost:8000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('登入失敗');
      }

      const data = await response.json();
      const userId = data.user_id;
      
      // 更新使用者狀態
      setUser({
        userId,
        isLoggedIn: true,
      });
      
      // 保存到本地存儲
      localStorage.setItem('userId', userId);
      router.push('/notes');
    } catch (error) {
      console.error('登入錯誤:', error);
      alert('登入失敗，請稍後再試');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      colorScheme="blue"
      onClick={handleLogin}
      size="lg"
      width="200px"
      isLoading={isLoading}
      loadingText="登入中..."
    >
      登入
    </Button>
  );
};

export default LoginButton; 