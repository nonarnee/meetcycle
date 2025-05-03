import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { AxiosError } from 'axios';

import api from '@/lib/api';
import { Participant } from '@/types';

interface MeetingResultsParams {
  meetingId: string;
}

export default function useMeetingResults(
  params: MeetingResultsParams,
  options?: Partial<UseQueryOptions<AxiosResponse<Participant[][]>, AxiosError, Participant[][]>>,
) {
  return useQuery({
    queryKey: ['meetingResults', params.meetingId],
    queryFn: () => api.get(`/meetings/${params.meetingId}/results`),
    select: (response) => response.data,
    ...options,
  });
}
