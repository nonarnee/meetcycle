import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { Mail, Lock, User, UserPlus } from 'lucide-react';

import type { RegisterCredentials, RegisterForm as RegisterFormType } from '@/types/auth';
import Button from '@/components/Common/Button';

import * as S from './style';

const schema = yup.object().shape({
  nickname: yup.string().required('닉네임을 입력해주세요'),
  email: yup.string().required('이메일을 입력해주세요').email('올바른 이메일 형식이 아닙니다'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요')
    .min(6, '비밀번호는 최소 6자 이상이어야 합니다'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다')
    .required('비밀번호를 다시 입력해주세요'),
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
          <S.Title>회원가입</S.Title>
          <S.Subtitle>새로운 계정을 만들고 소개팅을 시작하세요</S.Subtitle>
        </S.FormHeader>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputGroup>
            <S.InputLabel htmlFor='nickname'>닉네임</S.InputLabel>
            <S.InputWrapper>
              <S.InputIcon>
                <User size={18} />
              </S.InputIcon>
              <S.Input
                id='nickname'
                type='text'
                placeholder='사용할 닉네임을 입력하세요'
                {...register('nickname')}
                error={!!errors.nickname}
              />
            </S.InputWrapper>
            {errors.nickname && <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>}
          </S.InputGroup>

          <S.InputGroup>
            <S.InputLabel htmlFor='email'>이메일</S.InputLabel>
            <S.InputWrapper>
              <S.InputIcon>
                <Mail size={18} />
              </S.InputIcon>
              <S.Input
                id='email'
                type='email'
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

          <S.InputGroup>
            <S.InputLabel htmlFor='passwordConfirm'>비밀번호 확인</S.InputLabel>
            <S.InputWrapper>
              <S.InputIcon>
                <Lock size={18} />
              </S.InputIcon>
              <S.Input
                id='passwordConfirm'
                type='password'
                placeholder='비밀번호를 다시 입력하세요'
                {...register('passwordConfirm')}
                error={!!errors.passwordConfirm}
              />
            </S.InputWrapper>
            {errors.passwordConfirm && (
              <S.ErrorMessage>{errors.passwordConfirm.message}</S.ErrorMessage>
            )}
          </S.InputGroup>

          <Button
            type='submit'
            disabled={isPending}
            width='100%'
            size='large'
            icon={<UserPlus size={18} />}
            iconPosition='left'
          >
            {isPending ? '가입 중...' : '회원가입'}
          </Button>

          <S.FormFooter>
            <S.FooterText>
              이미 계정이 있으신가요? <S.FooterLink to='/login'>로그인</S.FooterLink>
            </S.FooterText>
          </S.FormFooter>
        </S.Form>
      </S.FormContainer>
    </motion.div>
  );
}
