/**
 * 참가자 관련 타입 정의
 */

/**
 * 참가자 타입 정의
 */
export interface Participant {
  id: string;
  nickname: string;
  gender: 'male' | 'female';
  matches?: { [participantId: string]: boolean }; // 매치 희망 여부 (true/false)
} 
