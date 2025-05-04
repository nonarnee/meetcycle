import { ParticipantPrivate } from '@/types/participant';

import * as S from './style';

interface ResultsListProps {
  participants: ParticipantPrivate[];
}

export default function ResultsList({ participants }: ResultsListProps) {
  return (
    <S.UserResultsContainer>
      <h2>나의 매칭 결과</h2>
      {participants.length > 0 ? (
        <S.MatchList>
          {participants.map((partner) => (
            <S.MatchCard key={partner._id}>
              <p>
                <strong>{partner?.nickname}</strong>님과 매칭되었습니다!
              </p>
              <p>연락처: {partner?.phone}</p>
            </S.MatchCard>
          ))}
        </S.MatchList>
      ) : (
        <S.NoMatchesMessage>매칭된 참가자가 없습니다.</S.NoMatchesMessage>
      )}
    </S.UserResultsContainer>
  );
}
