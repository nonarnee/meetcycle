import { useNavigate } from 'react-router';

import { useUserStore } from '@/stores/useUserStore';

import { LoginCredentials } from '../../types/auth';

import useLoginMutation from './hooks/mutations/useLoginMutation';
import LoginForm from './components/LoginForm';
import * as S from './style';

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const { mutate, isPending } = useLoginMutation();

  const onSubmit = (data: LoginCredentials) => {
    mutate(data, {
      onSuccess: (response) => {
        const { access_token, ...user } = response.data;
        localStorage.setItem('access_token', access_token);
        setUser(user);
        navigate('/');
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <S.Container>
      <LoginForm onSubmit={onSubmit} isPending={isPending} />
    </S.Container>
  );
}
