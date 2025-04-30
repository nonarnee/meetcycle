import Cookies from 'js-cookie';
import { useQuery } from '@tanstack/react-query';

import api from '@/lib/api';

export default function useMe() {
  return useQuery({
    queryKey: ['me'],
    queryFn: () => api.get('/auth/me'),
    enabled: !!Cookies.get('access_token'),
    retry: false,
    staleTime: 0,
  });
}
