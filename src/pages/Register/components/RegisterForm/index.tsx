import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { RegisterCredentials, RegisterForm as RegisterFormType } from '@/types/auth';

import * as S from './style';

const schema = yup.object().shape({
  nickname: yup.string().required('닉네임을 입력해주세요'),
  email: yup.string().required('이메일을 입력해주세요'),
  password: yup.string().required('비밀번호를 입력해주세요'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다')
    .required('비밀번호를 입력해주세요'),
});

interface RegisterFormProps {
  onSubmit: (data: RegisterCredentials) => void;
  isPending: boolean;
}

export default function RegisterForm({ onSubmit, isPending }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: yupResolver(schema),
  });

  return (
    <S.FormContainer>
      <S.FormHeader>
        <S.Title>회원가입</S.Title>
      </S.FormHeader>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputGroup>
          <S.InputContainer>
            <S.Label htmlFor='nickname'>닉네임</S.Label>
            <S.Input id='nickname' type='text' placeholder='닉네임' {...register('nickname')} />
          </S.InputContainer>
          {errors.nickname && <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>}
        </S.InputGroup>

        <S.InputGroup>
          <S.InputContainer>
            <S.Label htmlFor='email'>이메일</S.Label>
            <S.Input id='email' type='email' placeholder='이메일' {...register('email')} />
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

        <S.InputGroup>
          <S.InputContainer>
            <S.Label htmlFor='passwordConfirm'>비밀번호 확인</S.Label>
            <S.Input
              id='passwordConfirm'
              type='password'
              placeholder='비밀번호 확인'
              {...register('passwordConfirm')}
            />
          </S.InputContainer>
          {errors.passwordConfirm && (
            <S.ErrorMessage>{errors.passwordConfirm.message}</S.ErrorMessage>
          )}
        </S.InputGroup>

        <S.SubmitButton type='submit' disabled={isPending}>
          {isPending ? '회원가입 중...' : '회원가입'}
        </S.SubmitButton>
      </S.Form>
    </S.FormContainer>
  );
}
