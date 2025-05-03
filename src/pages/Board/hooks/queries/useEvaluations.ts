import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { AxiosError } from 'axios';

import api from '@/lib/api';
import { EvaluationWithParticipant } from '@/types/evaluation';

interface EvaluationParams {
  meetingId: string;
}

export default function useEvaluations(
  params: EvaluationParams,
  options?: Partial<
    UseQueryOptions<
      AxiosResponse<EvaluationWithParticipant[]>,
      AxiosError,
      EvaluationWithParticipant[]
    >
  >,
) {
  return useQuery({
    queryKey: ['evaluations', params.meetingId],
    queryFn: () => api.get(`/meetings/${params.meetingId}/evaluations`),
    select: (data) => data.data,
    enabled: !!params.meetingId,
    ...options,
  });
}
