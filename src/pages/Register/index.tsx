'use client';

import { useNavigate } from 'react-router';

import { useToast } from '@/components/Common/Toast/hooks/useToast';
import Toast from '@/components/Common/Toast';

import type { RegisterCredentials } from '../../types/auth';

import useRegisterMutation from './hooks/mutations/useRegisterMutation';
import RegisterForm from './components/RegisterForm';
import * as S from './style';

const SUCCESS_MESSAGE = `회원가입이 완료되었습니다.
로그인 페이지로 이동합니다.`;
const ERROR_MESSAGE = `회원가입에 실패했습니다.
다시 시도해주세요.`;

export default function Register() {
  const navigate = useNavigate();
  const { toast, showToast } = useToast();
  const { mutate, isPending } = useRegisterMutation();

  const onSubmit = (data: RegisterCredentials) => {
    mutate(data, {
      onSuccess: () => {
        showToast(SUCCESS_MESSAGE, 'success');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      },
      onError: (error) => {
        console.error(error);
        showToast(ERROR_MESSAGE, 'error');
      },
    });
  };

  return (
    <>
      <S.Container>
        <S.BackgroundShape className='shape-1' />
        <S.BackgroundShape className='shape-2' />
        <S.BackgroundShape className='shape-3' />
        <RegisterForm onSubmit={onSubmit} isPending={isPending} />
      </S.Container>

      {toast.visible && <Toast message={toast.message} type={toast.type} />}
    </>
  );
}
