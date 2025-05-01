import { Evaluation } from '@/types/evaluation';

export const getEvaluation = (evaluations: Evaluation[], participantId: string) => {
  const evaluation = evaluations.find((evaluation) => evaluation.from === participantId);
  if (!evaluation) return null;
  return evaluation.result;
};
