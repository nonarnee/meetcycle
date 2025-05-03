import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router';

import { RegisterCredentials, RegisterForm } from '../../types/auth';

import useRegisterMutation from './hooks/mutations/useRegisterMutation';

const schema = yup.object().shape({
  nickname: yup.string().required('닉네임을 입력해주세요'),
  email: yup.string().required('이메일을 입력해주세요'),
  password: yup.string().required('비밀번호를 입력해주세요'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다')
    .required('비밀번호를 입력해주세요'),
});

export default function Register() {
  const navigate = useNavigate();
  const { mutate, isPending } = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RegisterCredentials) => {
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
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>회원가입</h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='nickname' className='sr-only'>
                닉네임
              </label>
              <input
                id='nickname'
                type='text'
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='닉네임'
                {...register('nickname')}
              />
              {errors.nickname && (
                <p className='mt-1 text-sm text-red-600'>{errors.nickname.message}</p>
              )}
            </div>
            <div>
              <label htmlFor='email' className='sr-only'>
                이메일
              </label>
              <input
                id='email'
                type='text'
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='이메일'
                {...register('email')}
              />
              {errors.email && <p className='mt-1 text-sm text-red-600'>{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                비밀번호
              </label>
              <input
                id='password'
                type='password'
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='비밀번호'
                {...register('password')}
              />
              {errors.password && (
                <p className='mt-1 text-sm text-red-600'>{errors.password.message}</p>
              )}
            </div>
            <div>
              <label htmlFor='passwordConfirm' className='sr-only'>
                비밀번호 확인
              </label>
              <input
                id='passwordConfirm'
                type='password'
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='비밀번호 확인'
                {...register('passwordConfirm')}
              />
              {errors.passwordConfirm && (
                <p className='mt-1 text-sm text-red-600'>{errors.passwordConfirm.message}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type='submit'
              disabled={isPending}
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              {isPending ? '회원가입 중...' : '회원가입'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
