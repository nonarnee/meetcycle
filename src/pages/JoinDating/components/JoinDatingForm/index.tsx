import { useState, FormEvent } from 'react';

import Button from '@/components/Common/Button';
import { Gender, ParticipantForm } from '@/types';

import * as S from './style';

interface JoinDatingFormProps {
  onSubmit: (participant: ParticipantForm) => void;
  isPending: boolean;
}

export default function JoinDatingForm({ onSubmit, isPending }: JoinDatingFormProps) {
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState<Gender | null>(null);
  const [age, setAge] = useState<number>(20);
  const [job, setJob] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [error, setError] = useState('');

  const validate = () => {
    if (!nickname.trim()) {
      setError('닉네임을 입력해주세요.');
      return false;
    }
    if (!gender) {
      setError('성별을 선택해주세요.');
      return false;
    }
    if (!age || age < 20 || age > 100) {
      setError('올바른 나이를 입력해주세요.');
      return false;
    }
    if (!job) {
      setError('직업을 입력해주세요.');
      return false;
    }
    if (!phone) {
      setError('연락처를 입력해주세요.');
      return false;
    }
    if (!comment) {
      setError('코멘트를 입력해주세요.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setError('');

    // 참가자 생성
    const newParticipant: ParticipantForm = {
      nickname,
      gender: gender as Gender,
      age,
      job,
      phone,
      comment,
    };

    onSubmit(newParticipant);
  };

  return (
    <S.FormCard>
      <S.FormHeader>
        <h2>소개팅 참가하기</h2>
      </S.FormHeader>

      <S.Form onSubmit={handleSubmit}>
        <S.FormGroup>
          <S.Label htmlFor='nickname'>이름/닉네임</S.Label>
          <S.Input
            id='nickname'
            type='text'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder='사용할 이름/닉네임을 입력하세요'
            required
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.Label>성별</S.Label>
          <S.GenderSelection>
            <S.GenderOption
              selected={gender === Gender.MALE}
              gender={Gender.MALE}
              onClick={() => setGender(Gender.MALE)}
            >
              남성
            </S.GenderOption>
            <S.GenderOption
              selected={gender === Gender.FEMALE}
              gender={Gender.FEMALE}
              onClick={() => setGender(Gender.FEMALE)}
            >
              여성
            </S.GenderOption>
          </S.GenderSelection>
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor='age'>나이</S.Label>
          <S.Input
            id='age'
            type='number'
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder='나이를 입력하세요'
            required
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor='job'>직업</S.Label>
          <S.Input
            id='job'
            type='text'
            value={job}
            onChange={(e) => setJob(e.target.value)}
            placeholder='직업을 입력하세요'
            required
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor='phone'>연락수단 (상대방과 매칭 성공시에만 공개됩니다)</S.Label>
          <S.Input
            id='phone'
            type='text'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='연락처를 입력하세요 (전화번호/카톡ID/인스타ID 등)'
            required
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor='comment'>코멘트</S.Label>
          <S.Textarea
            id='comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='나에 대해 자유롭게 소개해주세요 (지역/취미/관심사/연애성향 등)'
            maxLength={300}
            required
          />
        </S.FormGroup>

        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

        <Button type='submit' disabled={isPending} width='100%'>
          {isPending ? '등록 중...' : '참가하기'}
        </Button>
      </S.Form>
    </S.FormCard>
  );
}
