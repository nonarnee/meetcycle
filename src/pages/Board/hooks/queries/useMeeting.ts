import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import api from '@/lib/api';
import { Meeting } from '@/types/meeting';

interface MeetingParams {
  id: string;
}

export type UseMeetingQueryOptions = Partial<
  UseQueryOptions<AxiosResponse<Meeting>, AxiosError, Meeting>
>;

export default function useMeeting({ id }: MeetingParams, options?: UseMeetingQueryOptions) {
  return useQuery({
    queryKey: ['meeting', id],
    queryFn: () => api.get(`/meetings/${id}`),
    select: (response) => response.data,
    enabled: !!id,
    ...options,
  });
}
