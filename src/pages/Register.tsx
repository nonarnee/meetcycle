import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { useAuthStore } from '../stores/authStore';
import { RegisterCredentials } from '../types/auth';

const schema = yup.object().shape({
  name: yup.string().required('이름을 입력해주세요'),
  email: yup.string().email('유효한 이메일을 입력해주세요').required('이메일을 입력해주세요'),
  password: yup.string().required('비밀번호를 입력해주세요'),
});

export default function Register() {
  const navigate = useNavigate();
  const { register: signUp, isLoading, error } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RegisterCredentials) => {
    await signUp(data);
    navigate('/');
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
              <label htmlFor='name' className='sr-only'>
                이름
              </label>
              <input
                id='name'
                type='text'
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='이름'
                {...register('name')}
              />
              {errors.name && <p className='mt-1 text-sm text-red-600'>{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor='email' className='sr-only'>
                이메일
              </label>
              <input
                id='email'
                type='email'
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
          </div>

          {error && <div className='text-red-500 text-sm text-center'>{error}</div>}

          <div>
            <button
              type='submit'
              disabled={isLoading}
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              {isLoading ? '회원가입 중...' : '회원가입'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
