import { Participant } from './participant';

interface EvaluationBase {
  _id: string;
  roomId: string;
  result: boolean;
}

export interface Evaluation extends EvaluationBase {
  from: string;
  to: string;
}

export interface EvaluationWithParticipant extends EvaluationBase {
  from: Participant;
  to: Participant;
}

export type EvaluationForm = Omit<Evaluation, '_id'>;
