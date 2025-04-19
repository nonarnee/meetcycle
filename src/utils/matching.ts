/**
 * 참가자 매칭 알고리즘 관련 유틸리티
 */

import { Participant } from '../types/participant';
import { RotationResult } from '../types/rotation';

/**
 * 참가자들의 매치 선택을 바탕으로 최종 매치를 계산합니다.
 * 양쪽 모두 매치를 원한 경우에만 최종 매치로 선정됩니다.
 */
export function calculateMatches(participants: Participant[]): RotationResult {
  const males = participants.filter(p => p.gender === 'male');
  const females = participants.filter(p => p.gender === 'female');

  // 모든 매치 결과 초기화
  const matchResults: { [participantId: string]: { [targetId: string]: boolean } } = {};

  // 매치 결과 초기화
  participants.forEach(p => {
    matchResults[p.id] = {};
    participants
      .filter(other => other.gender !== p.gender)
      .forEach(other => {
        matchResults[p.id][other.id] = p.matches?.[other.id] || false;
      });
  });

  // 최종 매치 계산 (서로가 매치를 희망한 경우)
  const matches: { [participantId: string]: string } = {};

  participants.forEach(participant => {
    if (participant.matches) {
      Object.entries(participant.matches).forEach(([targetId, wantsMatch]) => {
        const target = participants.find(p => p.id === targetId);

        if (target && wantsMatch && target.matches?.[participant.id]) {
          // 둘 다 서로 매치를 원하는 경우
          matches[participant.id] = targetId;
        }
      });
    }
  });

  return { matches, matchResults };
}
