import { Participant } from './participant';

export interface Dating {
  cycleId: string;
  roomId: string;
  order: number;
  endTime: Date;
  partner: Participant;
}
