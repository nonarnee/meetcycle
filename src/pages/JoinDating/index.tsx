import { useState, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router';
import styled from '@emotion/styled';
import BaseLayout from '../../components/Layout/BaseLayout';
import Button from '../../components/Common/Button';
import { getMockDating, addMockParticipant } from '../../utils/mockData';
import { Participant } from '../../types';

const JoinDatingPage = () => {
  const { accessCode } = useParams<{ accessCode: string }>();
  const navigate = useNavigate();

  // Mock 데이터 사용
  const [dating] = useState(getMockDating());
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!nickname.trim()) {
      setError('닉네임을 입력해주세요.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // 참가자 생성 및 Mock 데이터에 추가
      const participantId = `participant-${Date.now()}`;
      const newParticipant: Participant = {
        id: participantId,
        nickname,
        gender,
        matches: {},
      };

      // Mock 데이터 업데이트
      addMockParticipant(newParticipant);

      // 대기실 페이지로 이동
      navigate(`/waiting/${accessCode}`, {
        state: {
          participantId,
          nickname,
          gender,
        },
      });
    } catch (err) {
      setError('참가자 등록에 실패했습니다. 다시 시도해주세요.');
      setIsLoading(false);
    }
  };

  return (
    <BaseLayout>
      <Container>
        <FormCard>
          <FormHeader>
            <h2>소개팅 참가하기</h2>
            <EventInfo>
              <EventTitle>{dating.title}</EventTitle>
              <AccessCode>참여 코드: {accessCode}</AccessCode>
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
                <GenderOption selected={gender === 'male'} onClick={() => setGender('male')}>
                  남성
                </GenderOption>
                <GenderOption selected={gender === 'female'} onClick={() => setGender('female')}>
                  여성
                </GenderOption>
              </GenderSelection>
            </FormGroup>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Button type='submit' disabled={isLoading || !nickname.trim()} fullWidth>
              {isLoading ? '등록 중...' : '참가하기'}
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
  background-color: #f8f8f8;
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

const AccessCode = styled.div`
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

const GenderSelection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GenderOption = styled.div<{ selected: boolean }>`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${(props) => (props.selected ? '#f06292' : 'white')};
  color: ${(props) => (props.selected ? 'white' : '#444')};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? '#f06292' : '#f8f8f8')};
  }
`;

const ErrorMessage = styled.div`
  color: #e53935;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

export default JoinDatingPage;
