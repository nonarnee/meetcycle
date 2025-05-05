import { useNavigate } from 'react-router';

import { useUserStore } from '@/stores/useUserStore';
import Toast from '@/components/Common/Toast';

import { LoginCredentials } from '../../types/auth';
import { useToast } from '../../components/Common/Toast/hooks/useToast';

import useLoginMutation from './hooks/mutations/useLoginMutation';
import LoginForm from './components/LoginForm';
import * as S from './style';

const ERROR_MESSAGE = `로그인에 실패했습니다.
이메일과 비밀번호를 확인해주세요.`;

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const { mutate, isPending } = useLoginMutation();
  const { toast, showToast } = useToast();

  const onSubmit = (data: LoginCredentials) => {
    mutate(data, {
      onSuccess: (response) => {
        const { access_token, ...user } = response.data;
        localStorage.setItem('access_token', access_token);
        setUser(user);
        navigate('/');
      },
      onError: (error) => {
        showToast(ERROR_MESSAGE, 'error');
        console.error(error);
      },
    });
  };

  return (
    <>
      <S.Container>
        <S.BackgroundShape className='shape-1' />
        <S.BackgroundShape className='shape-2' />
        <S.BackgroundShape className='shape-3' />
        <LoginForm onSubmit={onSubmit} isPending={isPending} />
      </S.Container>

      {toast.visible && <Toast message={toast.message} type={toast.type} />}
    </>
  );
}
