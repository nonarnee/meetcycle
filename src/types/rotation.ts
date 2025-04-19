/**
 * 로테이션 데이팅 관련 타입 정의
 */

import { Participant } from './participant';

/**
 * 테이블 타입 정의
 */
export interface Table {
  id: string;
  maleParticipant: Participant;
  femaleParticipant: Participant;
}

/**
 * 라운드 타입 정의
 */
export interface Round {
  roundNumber: number;
  tables: Table[];
}

/**
 * 로테이션 결과 타입 정의
 */
export interface RotationResult {
  // 상호 매치 성사된 경우만 포함 (둘 다 true인 경우)
  matches: { [participantId: string]: string }; // 참가자 ID -> 매칭된 참가자 ID
  // 모든 매치 결과 저장
  matchResults: { [participantId: string]: { [targetId: string]: boolean } };
}
