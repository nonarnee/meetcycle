import styled from '@emotion/styled';

import { useUserStore } from '@/stores/useUserStore';

import BaseLayout from '../../components/Layout/BaseLayout';

import useParticipantResult from './hooks/useParticipantResult';

export default function ResultsPage() {
  const { user } = useUserStore();

  const { data: participants } = useParticipantResult({ participantId: user?.id ?? '' });

  return (
    <BaseLayout>
      <ResultsContainer>
        <UserResultsContainer>
          <h2>나의 매칭 결과</h2>
          {(participants ?? []).length > 0 ? (
            <MatchList>
              {(participants ?? []).map((partner) => (
                <MatchCard key={partner._id}>
                  <p>
                    <strong>{partner?.nickname}</strong>님과 매칭되었습니다!
                  </p>
                  <p>연락처: {partner?.phone}</p>
                </MatchCard>
              ))}
            </MatchList>
          ) : (
            <NoMatchesMessage>매칭된 참가자가 없습니다.</NoMatchesMessage>
          )}
        </UserResultsContainer>
      </ResultsContainer>
    </BaseLayout>
  );
}

// 스타일 컴포넌트
const ResultsContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`;

const UserResultsContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

const MatchList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MatchCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  p {
    font-size: 1.1rem;
  }
`;

const NoMatchesMessage = styled.p`
  color: #666;
  font-size: 1.1rem;
  text-align: center;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
