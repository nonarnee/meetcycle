import { useMutation } from '@tanstack/react-query';

import api from '@/lib/api';
import { queryClient } from '@/lib/queryClient';
import { useUserStore } from '@/stores/useUserStore';

export const useLogout = () => {
  const { clearUser } = useUserStore();

  return useMutation({
    mutationFn: () => api.post('/auth/logout'),
    onSuccess: () => {
      clearUser();
      queryClient.removeQueries({ queryKey: ['me'] });
    },
  });
};
