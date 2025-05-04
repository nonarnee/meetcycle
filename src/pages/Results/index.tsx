import { useUserStore } from '@/stores/useUserStore';

import BaseLayout from '../../components/Layout/BaseLayout';

import useParticipantResult from './hooks/useParticipantResult';
import ResultsList from './components/ResultsList';
import * as S from './style';

export default function ResultsPage() {
  const { user } = useUserStore();

  const { data: participants } = useParticipantResult({ participantId: user?.id ?? '' });

  return (
    <BaseLayout>
      <S.ResultsContainer>
        <ResultsList participants={participants ?? []} />
      </S.ResultsContainer>
    </BaseLayout>
  );
}
