/**
 * 라운드 생성 및 테이블 배정 관련 유틸리티
 */

import { Participant } from '../types/participant';
import { Round, Table } from '../types/rotation';

/**
 * 모든 참가자가 서로 한번씩 만날 수 있는 최대 라운드 수를 계산합니다.
 * 5:5라면 5라운드가 필요합니다.
 */
export function calculateMaxRounds(maleCount: number, femaleCount: number): number {
  return Math.max(maleCount, femaleCount);
}

/**
 * 초기 라운드 테이블 배정을 생성합니다.
 * 남성과 여성 참가자를 무작위로 섞은 후 테이블에 배정합니다.
 */
export function createInitialRound(
  maleParticipants: Participant[],
  femaleParticipants: Participant[]
): Round {
  // 참가자 배열 복사 후 섞기
  const shuffledMales = [...maleParticipants].sort(() => Math.random() - 0.5);
  const shuffledFemales = [...femaleParticipants].sort(() => Math.random() - 0.5);

  // 테이블 생성
  const tables: Table[] = [];
  const count = Math.min(shuffledMales.length, shuffledFemales.length);

  for (let i = 0; i < count; i++) {
    tables.push({
      id: `table-${i + 1}`,
      maleParticipant: shuffledMales[i],
      femaleParticipant: shuffledFemales[i],
    });
  }

  return {
    roundNumber: 1,
    tables,
  };
}

/**
 * 다음 라운드의 테이블 배정을 생성합니다.
 * 남성은 고정되고, 여성이 시계 방향으로 이동하는 로테이션 방식을 사용합니다.
 * 이 방식으로 모든 남성은 모든 여성과 한 번씩 만나게 됩니다.
 */
export function createNextRound(previousRound: Round): Round {
  const tables = [...previousRound.tables];
  const femaleParticipants = tables.map(table => table.femaleParticipant);

  // 여성 참가자를 한 칸씩 이동 (시계 방향)
  const lastFemale = femaleParticipants.pop();
  if (lastFemale) {
    femaleParticipants.unshift(lastFemale);
  }

  // 새 테이블 배정
  const newTables = tables.map((table, index) => ({
    id: table.id,
    maleParticipant: table.maleParticipant,
    femaleParticipant: femaleParticipants[index],
  }));

  return {
    roundNumber: previousRound.roundNumber + 1,
    tables: newTables,
  };
}

/**
 * 지정된 참가자 수에 대한 모든 라운드의 테이블 배정을 생성합니다.
 * 모든 남성이 모든 여성과 한 번씩 만나도록 라운드를 생성합니다.
 */
export function generateAllRounds(
  maleParticipants: Participant[],
  femaleParticipants: Participant[]
): Round[] {
  const maxRounds = Math.min(maleParticipants.length, femaleParticipants.length);
  const rounds: Round[] = [];

  // 첫 번째 라운드 생성
  const initialRound = createInitialRound(maleParticipants, femaleParticipants);
  rounds.push(initialRound);

  // 나머지 라운드 생성
  let currentRound = initialRound;
  for (let i = 1; i < maxRounds; i++) {
    currentRound = createNextRound(currentRound);
    rounds.push(currentRound);
  }

  return rounds;
}
