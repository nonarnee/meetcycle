import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { AxiosError } from 'axios';

import api from '@/lib/api';
import { ParticipantPrivate } from '@/types/participant';

interface Params {
  participantId: string;
}

export default function useParticipantResult(
  params: Params,
  options?: Partial<
    UseQueryOptions<AxiosResponse<ParticipantPrivate[]>, AxiosError, ParticipantPrivate[]>
  >,
) {
  return useQuery({
    queryKey: ['participant'],
    queryFn: () => api.get(`/participants/${params.participantId}/result`),
    select: (response) => response.data,
    enabled: !!params.participantId,
    ...options,
  });
}
