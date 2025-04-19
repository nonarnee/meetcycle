/**
 * 애플리케이션 전체에서 사용할 Mock 데이터
 */

import { Participant } from '../types';

// 고정된 접근 코드
export const ACCESS_CODE = 'MEET123';

// 샘플 참가자 데이터
export const MOCK_PARTICIPANTS: Participant[] = [
  {
    id: 'male-1',
    nickname: '남성1',
    gender: 'male',
    matches: {} // 초기에는 비어있음
  },
  {
    id: 'male-2',
    nickname: '남성2',
    gender: 'male',
    matches: {}
  },
  {
    id: 'male-3',
    nickname: '남성3',
    gender: 'male',
    matches: {}
  },
  {
    id: 'female-1',
    nickname: '여성1',
    gender: 'female',
    matches: {}
  },
  {
    id: 'female-2',
    nickname: '여성2',
    gender: 'female',
    matches: {}
  },
  {
    id: 'female-3',
    nickname: '여성3',
    gender: 'female',
    matches: {}
  }
];

// 소개팅 데이터 초기 상태
export const INITIAL_DATING = {
  id: 'dating-123',
  title: '5월 신촌 소개팅',
  maleCount: 3,
  femaleCount: 3,
  timeLimit: 5, // 각 라운드 시간 (분)
  createdAt: new Date().toISOString(),
  status: 'created', // 'created' | 'in_progress' | 'completed'
  accessCode: ACCESS_CODE,
  participants: [] // 초기에는 참가자 없음
};

// 소개팅 진행 상태에 따른 데이터
export const IN_PROGRESS_DATING = {
  ...INITIAL_DATING,
  status: 'in_progress',
  participants: MOCK_PARTICIPANTS
};

// 완료된 소개팅 상태 (샘플 매치 결과 포함)
export const COMPLETED_DATING = {
  ...INITIAL_DATING,
  status: 'completed',
  participants: [
    {
      ...MOCK_PARTICIPANTS[0],
      matches: { 'female-1': true, 'female-2': true, 'female-3': false }
    },
    {
      ...MOCK_PARTICIPANTS[1],
      matches: { 'female-1': false, 'female-2': true, 'female-3': true }
    },
    {
      ...MOCK_PARTICIPANTS[2],
      matches: { 'female-1': true, 'female-2': false, 'female-3': true }
    },
    {
      ...MOCK_PARTICIPANTS[3],
      matches: { 'male-1': true, 'male-2': false, 'male-3': false }
    },
    {
      ...MOCK_PARTICIPANTS[4],
      matches: { 'male-1': false, 'male-2': true, 'male-3': true }
    },
    {
      ...MOCK_PARTICIPANTS[5],
      matches: { 'male-1': true, 'male-2': false, 'male-3': true }
    }
  ] as Participant[]
};

// Mock 데이터를 로컬 스토리지에 저장하는 함수
export function setupMockData() {
  // 로컬 스토리지에 이미 데이터가 있는지 확인
  const hasData = localStorage.getItem('dating');

  if (!hasData) {
    // 초기 데이터 저장
    localStorage.setItem('dating', JSON.stringify(INITIAL_DATING));
    localStorage.setItem('participants', JSON.stringify([]));
  }
}

// 현재 로컬 스토리지에서 데이터 가져오기
export function getMockDating() {
  const data = localStorage.getItem('dating');
  return data ? JSON.parse(data) : INITIAL_DATING;
}

// 참가자 목록 가져오기
export function getMockParticipants() {
  const data = localStorage.getItem('participants');
  return data ? JSON.parse(data) : [];
}

// 데이팅 상태 업데이트
export function updateMockDating(updatedData: any) {
  localStorage.setItem('dating', JSON.stringify({
    ...getMockDating(),
    ...updatedData
  }));
}

// 참가자 추가
export function addMockParticipant(participant: Participant) {
  const participants = getMockParticipants();
  participants.push(participant);
  localStorage.setItem('participants', JSON.stringify(participants));

  // 데이팅 데이터도 업데이트
  const dating = getMockDating();
  updateMockDating({
    participants,
    maleCount: participants.filter((p: Participant) => p.gender === 'male').length,
    femaleCount: participants.filter((p: Participant) => p.gender === 'female').length
  });

  return participant;
}

// 참가자 업데이트
export function updateMockParticipant(participantId: string, updates: Partial<Participant>) {
  const participants = getMockParticipants();
  const index = participants.findIndex((p: Participant) => p.id === participantId);

  if (index !== -1) {
    participants[index] = {
      ...participants[index],
      ...updates
    };

    localStorage.setItem('participants', JSON.stringify(participants));
    updateMockDating({ participants });
  }

  return participants[index];
}

// 소개팅 상태 변경
export function updateMockDatingStatus(status: 'created' | 'in_progress' | 'completed') {
  updateMockDating({ status });
  return getMockDating();
}

// 모든 Mock 데이터 리셋
export function resetMockData() {
  localStorage.removeItem('dating');
  localStorage.removeItem('participants');
  setupMockData();
} 
