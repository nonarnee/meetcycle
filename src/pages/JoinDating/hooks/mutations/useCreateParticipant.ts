import { useMutation } from '@tanstack/react-query';

import { ParticipantForm } from '@/types/participant';
import api from '@/lib/api';
import { User } from '@/stores/useUserStore';

export default function useCreateParticipant() {
  return useMutation({
    mutationFn: ({ meetingId, participant }: { meetingId: string; participant: ParticipantForm }) =>
      api.post<User>(`/meetings/${meetingId}/participant`, participant),
  });
}
