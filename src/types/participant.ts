export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}
export const GenderLabel = {
  [Gender.MALE]: '남자',
  [Gender.FEMALE]: '여자',
};

export interface Participant {
  id: string;
  nickname: string;
  gender: Gender;
  age: number;
  job: string;
  comment: string;
}

export interface ParticipantStatus extends Participant {
  matches: { [participantId: string]: boolean }; // 매치 희망 여부 (true/false)
}

export type ParticipantForm = Omit<Participant, 'id'>;
