import { useMutation } from '@tanstack/react-query';

import api from '@/lib/api';

import { MeetingFormData } from '../../components/CreateDatingModal';

export default function useCreateMeeting() {
  return useMutation({
    mutationFn: (meetingData: MeetingFormData) => api.post('/meetings', meetingData),
  });
}
