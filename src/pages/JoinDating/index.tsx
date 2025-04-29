import { useState, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router';
import styled from '@emotion/styled';

import BaseLayout from '../../components/Layout/BaseLayout';
import Button from '../../components/Common/Button';
import { Gender, ParticipantForm } from '../../types';
import useMeeting from '../Board/hooks/queries/useMeeting';

import useCreateParticipant from './hooks/mutations/useCreateParticipant';

const JoinDatingPage = () => {
  const { meetingId } = useParams<{ meetingId: string }>();
  const navigate = useNavigate();

  const { data: meeting } = useMeeting({ id: meetingId ?? '' });
  const { mutate: createParticipant, isPending: isCreatingParticipant } = useCreateParticipant();

  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState<Gender | null>(null);
  const [age, setAge] = useState<number>(20);
  const [job, setJob] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [error, setError] = useState('');

  const validate = () => {
    console.log('validate');
    if (!meetingId || !meeting) {
      setError('소개팅 참가에 실패했습니다. 다시 시도해주세요.');
      return false;
    }
    if (!nickname.trim()) {
      setError('닉네임을 입력해주세요.');
      return false;
    }
    if (!gender) {
      setError('성별을 선택해주세요.');
      return false;
    }
    if (!age) {
      setError('나이를 입력해주세요.');
      return false;
    }
    if (!job) {
      setError('직업을 입력해주세요.');
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
      comment,
    };

    createParticipant(
      { meetingId: meetingId ?? '', participant: newParticipant },
      {
        onSuccess: ({ data: participant }) => {
          // 대기실 페이지로 이동
          navigate(`/waiting/${meetingId}`, {
            state: {
              participantId: participant.id,
              nickname,
              gender,
            },
          });
        },
        onError: (err) => {
          console.error(err);
          setError('참가자 등록에 실패했습니다. 다시 시도해주세요.');
        },
      },
    );
  };

  return (
    <BaseLayout>
      <Container>
        <FormCard>
          <FormHeader>
            <h2>소개팅 참가하기</h2>
            <EventInfo>
              <EventTitle>{meeting?.title}</EventTitle>
            </EventInfo>
          </FormHeader>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor='nickname'>닉네임</Label>
              <Input
                id='nickname'
                type='text'
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder='사용할 닉네임을 입력하세요'
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>성별</Label>
              <GenderSelection>
                <GenderOption
                  selected={gender === Gender.MALE}
                  gender={Gender.MALE}
                  onClick={() => setGender(Gender.MALE)}
                >
                  남성
                </GenderOption>
                <GenderOption
                  selected={gender === Gender.FEMALE}
                  gender={Gender.FEMALE}
                  onClick={() => setGender(Gender.FEMALE)}
                >
                  여성
                </GenderOption>
              </GenderSelection>
            </FormGroup>

            <FormGroup>
              <Label htmlFor='age'>나이</Label>
              <Input
                id='age'
                type='number'
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                placeholder='나이를 입력하세요'
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor='job'>직업</Label>
              <Input
                id='job'
                type='text'
                value={job}
                onChange={(e) => setJob(e.target.value)}
                placeholder='직업을 입력하세요'
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor='comment'>코멘트</Label>
              <Textarea
                id='comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder='나에 대해 자유롭게 소개해주세요 (지역/취미/관심사/연애성향 등)'
                maxLength={300}
                required
              />
            </FormGroup>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Button type='submit' disabled={isCreatingParticipant} fullWidth>
              {isCreatingParticipant ? '등록 중...' : '참가하기'}
            </Button>
          </Form>
        </FormCard>
      </Container>
    </BaseLayout>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
`;

const FormCard = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const FormHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #eee;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
    color: #333;
  }
`;

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const EventTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  color: #f06292;
`;

const Form = styled.form`
  padding: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #444;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #f06292;
    box-shadow: 0 0 0 2px rgba(240, 98, 146, 0.2);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: none;

  &:focus {
    outline: none;
    border-color: #f06292;
    box-shadow: 0 0 0 2px rgba(240, 98, 146, 0.2);
  }
`;

const GenderSelection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const GenderOption = styled.div<{ selected: boolean; gender: Gender }>`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${(props) =>
    props.selected ? (props.gender === Gender.MALE ? 'skyblue' : 'pink') : 'white'};
  color: ${(props) => (props.selected ? 'white' : '#444')};
  cursor: pointer;
  text-align: center;
`;

const ErrorMessage = styled.div`
  color: #e53935;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

export default JoinDatingPage;
