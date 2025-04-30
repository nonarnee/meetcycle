import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import api from '@/lib/api';
import { Meeting } from '@/types/meeting';

type UseMeetingForParticipantOptions = Partial<
  UseQueryOptions<AxiosResponse<Meeting>, AxiosError, Meeting>
>;

interface MeetingForParticipantParams {
  participantId: string;
}

export default function useMeetingForParticipant(
  params: MeetingForParticipantParams,
  options?: UseMeetingForParticipantOptions,
) {
  return useQuery({
    queryKey: ['meetingForParticipant', params],
    queryFn: () => api.get(`/meetings/participant/${params.participantId}`),
    select: (response) => response.data,
    ...options,
  });
}
