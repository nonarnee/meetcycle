import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'motion/react';
import { Mail, Lock, LogIn } from 'lucide-react';
import * as yup from 'yup';

import { LoginCredentials } from '@/types/auth';
import Button from '@/components/Common/Button';

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <S.FormContainer>
        <S.FormHeader>
          <S.LogoWrapper>
            <S.Logo>MeetCycle</S.Logo>
          </S.LogoWrapper>
          <S.Title>로그인</S.Title>
        </S.FormHeader>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputGroup>
            <S.InputLabel htmlFor='email'>이메일</S.InputLabel>
            <S.InputWrapper>
              <S.InputIcon>
                <Mail size={18} />
              </S.InputIcon>
              <S.Input
                id='email'
                type='text'
                placeholder='이메일 주소를 입력하세요'
                {...register('email')}
                error={!!errors.email}
              />
            </S.InputWrapper>
            {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
          </S.InputGroup>

          <S.InputGroup>
            <S.InputLabel htmlFor='password'>비밀번호</S.InputLabel>
            <S.InputWrapper>
              <S.InputIcon>
                <Lock size={18} />
              </S.InputIcon>
              <S.Input
                id='password'
                type='password'
                placeholder='비밀번호를 입력하세요'
                {...register('password')}
                error={!!errors.password}
              />
            </S.InputWrapper>
            {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
          </S.InputGroup>

          <Button
            type='submit'
            disabled={isPending}
            width='100%'
            size='large'
            icon={<LogIn size={18} />}
            iconPosition='left'
          >
            {isPending ? '로그인 중...' : '로그인'}
          </Button>
        </S.Form>
      </S.FormContainer>
    </motion.div>
  );
}
