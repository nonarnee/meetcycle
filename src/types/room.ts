import { Participant } from './participant';

export enum RoomStatus {
  PENDING = 'PENDING',
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
}

export interface Room {
  _id: string;
  cycleId: string;
  maleParticipant: Participant;
  femaleParticipant: Participant;
  maleLiked: boolean | null;
  femaleLiked: boolean | null;
  status: RoomStatus;
  isMatched: boolean;
  createdAt: string;
  updatedAt: string;
}
