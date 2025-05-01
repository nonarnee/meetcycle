import { useMutation } from '@tanstack/react-query';

import api from '@/lib/api';
import { EvaluationForm } from '@/types/evaluation';

export default function useLikeMutation() {
  return useMutation({
    mutationFn: (evaluation: EvaluationForm) => api.post(`/evaluations`, evaluation),
  });
}
