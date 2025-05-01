import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { AxiosError } from 'axios';

import api from '@/lib/api';
import { Evaluation } from '@/types/evaluation';

type UseCurrentEvaluationsQueryOptions = Partial<
  UseQueryOptions<AxiosResponse<Evaluation[]>, AxiosError, Evaluation[]>
>;

interface CurrentEvaluationsParams {
  meetingId: string;
}

export default function useCurrentEvaluations(
  params: CurrentEvaluationsParams,
  options?: UseCurrentEvaluationsQueryOptions,
) {
  return useQuery({
    queryKey: ['currentEvaluations', params],
    queryFn: () => api.get(`/meetings/${params.meetingId}/current-evaluations`),
    select: (response) => response.data,
    enabled: !!params.meetingId,
    ...options,
  });
}
