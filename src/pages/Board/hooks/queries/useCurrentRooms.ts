import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { AxiosResponse } from 'axios';

import { Room } from '@/types/room';
import api from '@/lib/api';

type UseCurrentRoomsQueryOptions = UseQueryOptions<AxiosResponse<Room[]>, AxiosError, Room[]>;

interface CurrentRoomsParams {
  meetingId: string;
}

export default function useCurrentRooms(
  params: CurrentRoomsParams,
  options?: UseCurrentRoomsQueryOptions,
) {
  return useQuery({
    queryKey: ['currentRooms', params.meetingId],
    queryFn: () => api.get(`/meetings/${params.meetingId}/rooms/current`),
    select: (response) => response.data,
    enabled: !!params.meetingId,
    staleTime: 0,
    ...options,
  });
}
