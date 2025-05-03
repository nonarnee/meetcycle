import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { AxiosResponse } from 'axios';

import api from '@/lib/api';
import { Meeting } from '@/types/meeting';

interface MeetingForHostParams {
  hostId: string;
}

export default function useMeetingForHost(
  params: MeetingForHostParams,
  options?: Partial<UseQueryOptions<AxiosResponse<Meeting>, AxiosError, Meeting>>,
) {
  return useQuery({
    queryKey: ['meetingForHost', params],
    queryFn: () => api.get(`/meetings/host/${params.hostId}`),
    select: (response) => response.data,
    enabled: !!params.hostId,
    ...options,
  });
}
