import { useMutation } from '@tanstack/react-query';

import api from '@/lib/api';

export default function useNextCycleMutation() {
  return useMutation({
    mutationFn: (meetingId: string) => api.put(`/meetings/${meetingId}/next-cycle`),
  });
}
