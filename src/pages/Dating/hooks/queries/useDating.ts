import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import api from '@/lib/api';
import { Dating } from '@/types/dating';

type UseDatingQueryOptions = Partial<UseQueryOptions<AxiosResponse<Dating>, AxiosError, Dating>>;

interface UseDatingParams {
  participantId: string;
}

export default function useDating(params: UseDatingParams, options?: UseDatingQueryOptions) {
  return useQuery({
    queryKey: ['dating'],
    queryFn: () => api.get(`/cycles/participant/${params.participantId}/current`, { params }),
    select: (response) => response.data,
    ...options,
  });
}
