import { MeetingStatus } from './meeting';
import { Participant } from './participant';

export interface Dating {
  cycleId: string;
  roomId: string;
  order: number;
  endTime: Date;
  partner: Participant;
  me: Participant;
  result: boolean | null;
  status: MeetingStatus;
}
