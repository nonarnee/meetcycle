import { useMutation } from '@tanstack/react-query';

import { MeetingFormData } from '@/components/Modal/CreateDatingModal';
import api from '@/lib/api';

export default function useCreateMeeting() {
  return useMutation({
    mutationFn: (meetingData: MeetingFormData) => api.post('/meetings', meetingData),
  });
}
