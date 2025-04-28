import { useMutation } from '@tanstack/react-query';

import api from '@/lib/api';
import { RegisterCredentials } from '@/types/auth';

export default function useRegisterMutation() {
  return useMutation({
    mutationFn: (data: RegisterCredentials) => api.post('/user', data),
  });
}
