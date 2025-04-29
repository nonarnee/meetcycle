import { useMutation } from '@tanstack/react-query';

import { Participant, ParticipantForm } from '@/types/participant';
import api from '@/lib/api';

export default function useCreateParticipant() {
  return useMutation({
    mutationFn: ({ meetingId, participant }: { meetingId: string; participant: ParticipantForm }) =>
      api.post<Participant>(`/meetings/${meetingId}/participants`, participant),
  });
}
