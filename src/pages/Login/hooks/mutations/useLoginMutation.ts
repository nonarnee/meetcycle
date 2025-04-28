import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import api from '@/lib/api';

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
}

type UseLoginMutationOptions = UseMutationOptions<
  AxiosResponse<LoginResponse>,
  AxiosError,
  LoginData
>;

export default function useLoginMutation(options?: UseLoginMutationOptions) {
  return useMutation({
    mutationFn: (data: LoginData) => api.post('/auth/login', data),
    ...options,
  });
}
