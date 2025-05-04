import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { LoginCredentials } from '@/types/auth';

import * as S from './style';

const schema = yup.object().shape({
  email: yup.string().required('이메일을 입력해주세요'),
  password: yup.string().required('비밀번호를 입력해주세요'),
});

interface LoginFormProps {
  onSubmit: (data: LoginCredentials) => void;
  isPending: boolean;
}

export default function LoginForm({ onSubmit, isPending }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: yupResolver(schema),
  });

  return (
    <S.FormContainer>
      <S.FormHeader>
        <S.Title>로그인</S.Title>
      </S.FormHeader>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputGroup>
          <S.InputContainer>
            <S.Label htmlFor='email'>이메일</S.Label>
            <S.Input id='email' type='text' placeholder='이메일' {...register('email')} />
          </S.InputContainer>
          {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
        </S.InputGroup>

        <S.InputGroup>
          <S.InputContainer>
            <S.Label htmlFor='password'>비밀번호</S.Label>
            <S.Input
              id='password'
              type='password'
              placeholder='비밀번호'
              {...register('password')}
            />
          </S.InputContainer>
          {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
        </S.InputGroup>

        <S.SubmitButton type='submit' disabled={isPending}>
          {isPending ? '로그인 중...' : '로그인'}
        </S.SubmitButton>
      </S.Form>
    </S.FormContainer>
  );
}
