import { useMutation } from '@tanstack/react-query';

import api from '@/lib/api';

export default function useStartMeetingMutation() {
  return useMutation({
    mutationFn: (meetingId: string) => api.put(`/meetings/${meetingId}/start`),
  });
}
