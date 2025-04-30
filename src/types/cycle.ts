export enum CycleStatus {
  PENDING = 'pending',
  ONGOING = 'ongoing',
  COMPLETED = 'completed',
}

export interface Cycle {
  _id: string;
  order: number;
  status: CycleStatus;
  endTime: string;
}
