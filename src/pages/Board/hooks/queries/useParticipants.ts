import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { AxiosResponse } from 'axios';

import api from '@/lib/api';
import { Participant } from '@/types/participant';

type UseParticipantsQueryOptions = UseQueryOptions<
  AxiosResponse<Participant[]>,
  AxiosError,
  Participant[]
>;

interface ParticipantsParams {
  meetingId: string;
}

export default function useParticipants(
  params: ParticipantsParams,
  options?: UseParticipantsQueryOptions,
) {
  return useQuery({
    queryKey: ['participants', params.meetingId],
    queryFn: () => api.get(`/meetings/${params.meetingId}/participants`),
    select: (response) => response.data,
    ...options,
  });
}
