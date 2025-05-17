import { Button } from '@chakra-ui/react';
import { useStore } from '@/store/useStore';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

// 登入按鈕組件
const LoginButton = () => {
  const router = useRouter();
  // 從 store 中獲取 setUser 函數
  const setUser = useStore((state) => state.setUser);

  // 處理登入邏輯
  const handleLogin = () => {
    const userId = uuidv4();
    
    // 更新使用者狀態
    setUser({
      userId,
      isLoggedIn: true,
    });
    
    // 在狀態更新後執行其他操作
    localStorage.setItem('userId', userId);
    router.push('/notes');
  };

  return (
    <Button
      colorScheme="blue"
      onClick={handleLogin}
      size="lg"
      width="200px"
    >
      登入
    </Button>
  );
};

export default LoginButton; 