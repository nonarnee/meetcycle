import { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

import { Meeting } from '@/types/meeting';

import useEvaluations from '../../hooks/queries/useEvaluations';
import useMeetingResults from '../../hooks/queries/useMeetingResults';
import useParticipants from '../../hooks/queries/useParticipants';

interface CompleteBoardProps {
  meeting: Meeting;
}

// 차트 데이터 타입 정의
interface ChartData {
  name: string;
  value: number;
  color: string;
}

import * as S from './style';

export default function CompleteBoard({ meeting }: CompleteBoardProps) {
  const [genderFilter, setGenderFilter] = useState<'all' | 'male' | 'female'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'selectRate' | 'selectedRate'>('name');

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

  // 차트 데이터 준비
  const chartData: ChartData[] = [
    { name: '매칭 성사', value: results?.length ?? 0, color: '#4CAF50' },
    {
      name: '매칭 실패',
      value: Math.floor((meeting.maleCount + meeting.femaleCount) / 2) - (results?.length ?? 0),
      color: '#F44336',
    },
  ];

  // 필터링된 참가자 목록
  const filteredParticipants = useMemo(() => {
    if (!participants) return [];

    let filtered = [...participants];

    // 성별 필터링
    if (genderFilter !== 'all') {
      filtered = filtered.filter((p) => p.gender === genderFilter);
    }

    // 정렬
    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.nickname.localeCompare(b.nickname);
      } else if (sortBy === 'selectRate') {
        return selectRate(b._id) - selectRate(a._id);
      } else {
        return selectedRate(b._id) - selectedRate(a._id);
      }
    });

    return filtered;
  }, [participants, genderFilter, sortBy]);

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

      <S.ChartSection>
        <h2>매칭 결과 통계</h2>
        <S.ChartContainer>
          <ResponsiveContainer width='100%' height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx='50%'
                cy='50%'
                labelLine={false}
                outerRadius={100}
                fill='#8884d8'
                dataKey='value'
                label={({ name, percent }: { name: string; percent: number }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [`${value}쌍`, '매칭 수']} />
            </PieChart>
          </ResponsiveContainer>
        </S.ChartContainer>
      </S.ChartSection>

      <S.ParticipantResultsSection>
        <h2>성사된 커플</h2>
        {results?.length === 0 ? (
          <S.EmptyMessage>성사된 커플이 없습니다.</S.EmptyMessage>
        ) : (
          results?.map((result) => (
            <S.ParticipantCard key={`${result[0]._id}-${result[1]._id}`}>
              <S.ParticipantRow>
                <S.ParticipantValue>{result[0].nickname}</S.ParticipantValue>
              </S.ParticipantRow>
              <S.ParticipantRow>
                <S.ParticipantValue>{result[1].nickname}</S.ParticipantValue>
              </S.ParticipantRow>
            </S.ParticipantCard>
          ))
        )}
      </S.ParticipantResultsSection>

      <S.ParticipantResultsSection>
        <S.FilterContainer>
          <h2>참가자 결과</h2>
          <S.FilterControls>
            <S.FilterSelect
              value={genderFilter}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setGenderFilter(e.target.value as 'all' | 'male' | 'female')
              }
            >
              <option value='all'>전체</option>
              <option value='male'>남성</option>
              <option value='female'>여성</option>
            </S.FilterSelect>
            <S.FilterSelect
              value={sortBy}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSortBy(e.target.value as 'name' | 'selectRate' | 'selectedRate')
              }
            >
              <option value='name'>이름순</option>
              <option value='selectRate'>선택율순</option>
              <option value='selectedRate'>피선택율순</option>
            </S.FilterSelect>
          </S.FilterControls>
        </S.FilterContainer>

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
            {filteredParticipants.map((participant) => (
              <tr key={participant._id}>
                <td>{participant.nickname}</td>
                <td>{participant.gender === 'male' ? '남성' : '여성'}</td>
                <td>
                  <S.RateBar>
                    <S.RateBarFill width={`${selectRate(participant._id)}%`} />
                    <span>{selectRate(participant._id)}%</span>
                  </S.RateBar>
                </td>
                <td>
                  <S.RateBar>
                    <S.RateBarFill width={`${selectedRate(participant._id)}%`} />
                    <span>{selectedRate(participant._id)}%</span>
                  </S.RateBar>
                </td>
              </tr>
            ))}
          </tbody>
        </S.ParticipantTable>
      </S.ParticipantResultsSection>
    </S.HostResultsContainer>
  );
}
