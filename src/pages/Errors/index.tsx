'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router';

import Button from '@/components/Common/Button';

import * as S from './style';

interface ErrorPageProps {
  title?: string;
  message?: string;
  code?: string | number;
}

export default function ErrorPage({
  title = '오류가 발생했습니다',
  message = '요청하신 페이지를 표시할 수 없습니다. 잠시 후 다시 시도해주세요.',
  code = '500',
}: ErrorPageProps) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <S.ErrorContainer>
      <S.BackgroundShape className='shape-1' />
      <S.BackgroundShape className='shape-2' />
      <S.BackgroundShape className='shape-3' />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <S.ErrorCard>
          <S.ErrorIconWrapper>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'reverse',
              }}
            >
              <AlertTriangle size={64} color='#f06292' />
            </motion.div>
          </S.ErrorIconWrapper>

          <S.ErrorCode>{code}</S.ErrorCode>
          <S.ErrorTitle>{title}</S.ErrorTitle>
          <S.ErrorMessage>{message}</S.ErrorMessage>

          <S.ButtonGroup>
            <Button
              variant='tertiary'
              size='medium'
              onClick={handleRefresh}
              icon={<RefreshCw size={18} />}
              iconPosition='left'
            >
              새로고침
            </Button>
            <Button
              variant='primary'
              size='medium'
              onClick={handleGoHome}
              icon={<Home size={18} />}
              iconPosition='left'
            >
              홈으로 돌아가기
            </Button>
          </S.ButtonGroup>
        </S.ErrorCard>
      </motion.div>
    </S.ErrorContainer>
  );
}
