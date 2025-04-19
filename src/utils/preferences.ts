/**
 * 참가자 매치 선택 관련 유틸리티
 */

import { Participant } from '../types/participant';

/**
 * 참가자의 매치 선택을 업데이트합니다.
 * 특정 상대방에 대한 매치 선택(true/false)을 저장합니다.
 */
export function updateParticipantMatch(
  participant: Participant,
  targetParticipantId: string,
  wantsToMatch: boolean
): Participant {
  return {
    ...participant,
    matches: {
      ...(participant.matches || {}),
      [targetParticipantId]: wantsToMatch,
    },
  };
}

/**
 * 특정 참가자가 매치를 원하는 상대방 수를 계산합니다.
 */
export function countDesiredMatches(
  participant: Participant
): number {
  const matches = participant.matches;
  if (!matches) return 0;

  return Object.values(matches).filter(match => match === true).length;
}

/**
 * 두 참가자 간의 매치 상태를 확인합니다.
 * 
 * @returns
 * 0: 둘 다 매치를 원하지 않음
 * 1: 첫 번째 참가자만 매치를 원함
 * 2: 두 번째 참가자만 매치를 원함
 * 3: 둘 다 매치를 원함 (성사)
 */
export function checkMutualMatchStatus(
  participant1: Participant,
  participant2: Participant
): number {
  const p1WantsMatch = participant1.matches?.[participant2.id] || false;
  const p2WantsMatch = participant2.matches?.[participant1.id] || false;

  if (p1WantsMatch && p2WantsMatch) return 3; // 둘 다 원함
  if (p1WantsMatch) return 1; // participant1만 원함
  if (p2WantsMatch) return 2; // participant2만 원함
  return 0; // 둘 다 원하지 않음
}
