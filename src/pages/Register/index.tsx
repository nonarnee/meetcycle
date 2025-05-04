import { useNavigate } from 'react-router';

import { RegisterCredentials } from '../../types/auth';

import useRegisterMutation from './hooks/mutations/useRegisterMutation';
import RegisterForm from './components/RegisterForm';
import * as S from './style';

export default function Register() {
  const navigate = useNavigate();
  const { mutate, isPending } = useRegisterMutation();

  const onSubmit = (data: RegisterCredentials) => {
    mutate(data, {
      onSuccess: () => {
        window.confirm('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
        navigate('/login');
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <S.Container>
      <RegisterForm onSubmit={onSubmit} isPending={isPending} />
    </S.Container>
  );
}
