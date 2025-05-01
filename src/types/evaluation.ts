export interface Evaluation {
  _id: string;
  roomId: string;
  from: string;
  to: string;
  result: boolean;
}

export type EvaluationForm = Omit<Evaluation, '_id'>;
