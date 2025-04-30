import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { AxiosError } from 'axios';

import api from '@/lib/api';
import { Cycle } from '@/types/cycle';

type UseCurrentCycleQueryOptions = Partial<
  UseQueryOptions<AxiosResponse<Cycle>, AxiosError, Cycle>
>;

interface CurrentCycleParams {
  meetingId: string;
}

export default function useCurrentCycle(
  params: CurrentCycleParams,
  options?: UseCurrentCycleQueryOptions,
) {
  return useQuery({
    queryKey: ['currentCycle', params],
    queryFn: () => api.get(`/meetings/${params.meetingId}/current-cycle`),
    select: (response) => response.data,
    enabled: !!params.meetingId,
    ...options,
  });
}
