import { Participant } from './participant';

export enum MeetingStatus {
  PENDING = 'pending',
  ONGOING = 'ongoing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export const MeetingStatusLabel = {
  [MeetingStatus.PENDING]: '대기중',
  [MeetingStatus.ONGOING]: '진행중',
  [MeetingStatus.COMPLETED]: '완료됨',
  [MeetingStatus.CANCELLED]: '취소됨',
};

export interface Meeting {
  id: string;
  title: string;
  hostId: string;
  location: string;
  dateTime: string;
  roundDurationMinutes: number;
  maleCount: number;
  femaleCount: number;
  maleParticipants: Participant[];
  femaleParticipants: Participant[];
  createdAt: string;
  status: MeetingStatus;
}
