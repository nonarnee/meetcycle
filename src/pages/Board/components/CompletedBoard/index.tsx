import { Meeting } from '@/types/meeting';

import useEvaluations from '../../hooks/queries/useEvaluations';
import useMeetingResults from '../../hooks/queries/useMeetingResults';
import useParticipants from '../../hooks/queries/useParticipants';

interface CompleteBoardProps {
  meeting: Meeting;
}

import * as S from './style';

export default function CompleteBoard({ meeting }: CompleteBoardProps) {
  const { data: participants } = useParticipants({ meetingId: meeting._id });
  const { data: evaluations } = useEvaluations({ meetingId: meeting._id });
  const { data: results } = useMeetingResults({ meetingId: meeting._id });

  const selectRate = (participantId: string) => {
    if (!evaluations) return 0;
    const selectEvaluations = evaluations.filter((e) => e.from._id === participantId && e.result);
    const rate = ((selectEvaluations?.length ?? 0) / (meeting.currentCycleOrder ?? 1)) * 100;
    return Math.round(rate);
  };

  const selectedRate = (participantId: string) => {
    if (!evaluations) return 0;
    const selectedEvaluations = evaluations?.filter((e) => e.to._id === participantId && e.result);
    const rate = ((selectedEvaluations?.length ?? 0) / (meeting.currentCycleOrder ?? 1)) * 100;
    return Math.round(rate);
  };

  const matchRate = results
    ? Math.round(((results.length * 2) / (meeting.maleCount + meeting.femaleCount)) * 100)
    : 0;

  return (
    <S.HostResultsContainer>
      <S.SummarySection>
        <S.SummaryCard>
          <h3>총 참가자</h3>
          <p>{meeting.maleCount + meeting.femaleCount}명</p>
        </S.SummaryCard>
        <S.SummaryCard>
          <h3>매칭 성사율</h3>
          <p>{Math.round(matchRate)}%</p>
        </S.SummaryCard>
        <S.SummaryCard>
          <h3>매칭 성사 수</h3>
          <p>{results?.length ?? 0}쌍</p>
        </S.SummaryCard>
      </S.SummarySection>

      <S.ParticipantResultsSection>
        <h2>성사된 커플</h2>
        {results?.map((result) => (
          <S.ParticipantCard key={`${result[0]._id}-${result[1]._id}`}>
            <S.ParticipantRow>
              <S.ParticipantValue>{result[0].nickname}</S.ParticipantValue>
            </S.ParticipantRow>
            <S.ParticipantRow>
              <S.ParticipantValue>{result[1].nickname}</S.ParticipantValue>
            </S.ParticipantRow>
          </S.ParticipantCard>
        ))}
      </S.ParticipantResultsSection>

      <S.ParticipantResultsSection>
        <h2>참가자 결과</h2>
        <S.ParticipantTable>
          <thead>
            <tr>
              <th>이름</th>
              <th>성별</th>
              <th>선택율</th>
              <th>피선택율</th>
            </tr>
          </thead>
          <tbody>
            {participants?.map((participant) => (
              <tr key={participant._id}>
                <td>{participant.nickname}</td>
                <td>{participant.gender === 'male' ? '남성' : '여성'}</td>
                <td>{selectRate(participant._id)}%</td>
                <td>{selectedRate(participant._id)}%</td>
              </tr>
            ))}
          </tbody>
        </S.ParticipantTable>
      </S.ParticipantResultsSection>
    </S.HostResultsContainer>
  );
}
