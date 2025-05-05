import { useState, FormEvent } from 'react';
import { Briefcase, ChevronLeft, ChevronRight, MessageSquare, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { Gender, ParticipantForm } from '@/types';

import * as S from './style';

interface JoinDatingFormProps {
  onSubmit: (participant: ParticipantForm) => void;
  isPending: boolean;
}

export default function JoinDatingForm({ onSubmit, isPending }: JoinDatingFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState<Gender | null>(null);
  const [age, setAge] = useState<number>(20);
  const [job, setJob] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [error, setError] = useState('');

  const validateStep = (step: number) => {
    setError('');

    if (step === 1) {
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
    } else if (step === 2) {
      if (!job) {
        setError('직업을 입력해주세요.');
        return false;
      }
      if (!phone) {
        setError('연락처를 입력해주세요.');
        return false;
      }
    }

    return true;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateStep(currentStep)) return;
    if (!comment) {
      setError('코멘트를 입력해주세요.');
      return;
    }

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
        <S.ProgressContainer>
          <S.ProgressBar>
            <S.ProgressFill width={`${(currentStep / 3) * 100}%`} />
          </S.ProgressBar>
          <S.StepIndicator>{currentStep} / 3</S.StepIndicator>
        </S.ProgressContainer>
      </S.FormHeader>

      <S.FormContent>
        <AnimatePresence mode='wait'>
          {currentStep === 1 && (
            <motion.div
              key='step1'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <S.StepTitle>
                <S.StepIcon>
                  <User />
                </S.StepIcon>
                기본 정보를 입력해주세요
              </S.StepTitle>

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
                  min={20}
                  max={100}
                  required
                />
              </S.FormGroup>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key='step2'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <S.StepTitle>
                <S.StepIcon>
                  <Briefcase />
                </S.StepIcon>
                직업 및 연락처를 입력해주세요
              </S.StepTitle>

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
                <S.Label htmlFor='phone'>연락수단</S.Label>
                <S.Input
                  id='phone'
                  type='text'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='연락처를 입력하세요 (전화번호/카톡ID/인스타ID 등)'
                  required
                />
                <S.HelpText>매칭된 상대방에게만 공개되는 정보입니다.</S.HelpText>
              </S.FormGroup>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key='step3'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <S.StepTitle>
                <S.StepIcon>
                  <MessageSquare />
                </S.StepIcon>
                자기소개를 작성해주세요
              </S.StepTitle>

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
                <S.CharCount>{comment.length}/300</S.CharCount>
              </S.FormGroup>

              <S.ProfilePreview>
                <S.PreviewTitle>입력 정보 확인</S.PreviewTitle>
                <S.PreviewItem>
                  <S.PreviewLabel>닉네임:</S.PreviewLabel>
                  <S.PreviewValue>{nickname}</S.PreviewValue>
                </S.PreviewItem>
                <S.PreviewItem>
                  <S.PreviewLabel>성별:</S.PreviewLabel>
                  <S.PreviewValue>
                    {gender === Gender.MALE ? '남성' : gender === Gender.FEMALE ? '여성' : '-'}
                  </S.PreviewValue>
                </S.PreviewItem>
                <S.PreviewItem>
                  <S.PreviewLabel>나이:</S.PreviewLabel>
                  <S.PreviewValue>{age}세</S.PreviewValue>
                </S.PreviewItem>
                <S.PreviewItem>
                  <S.PreviewLabel>직업:</S.PreviewLabel>
                  <S.PreviewValue>{job}</S.PreviewValue>
                </S.PreviewItem>
              </S.ProfilePreview>
            </motion.div>
          )}
        </AnimatePresence>

        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

        <S.ButtonGroup>
          {currentStep > 1 && (
            <S.BackButton onClick={handlePrevStep}>
              <ChevronLeft size={18} /> 이전
            </S.BackButton>
          )}

          {currentStep < 3 ? (
            <S.NextButton onClick={handleNextStep}>
              다음 <ChevronRight size={18} />
            </S.NextButton>
          ) : (
            <S.SubmitButton onClick={handleSubmit} disabled={isPending}>
              {isPending ? '등록 중...' : '참가하기'}
            </S.SubmitButton>
          )}
        </S.ButtonGroup>
      </S.FormContent>
    </S.FormCard>
  );
}
