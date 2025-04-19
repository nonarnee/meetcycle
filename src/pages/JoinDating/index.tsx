import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import BaseLayout from '../../components/Layout/BaseLayout';
import Button from '../../components/Common/Button';

interface ParticipantFormData {
  nickname: string;
  gender: 'male' | 'female';
  contactInfo: string;
  message: string;
}

// 목업 데이터
const MOCK_DATING = {
  id: 'dating-123',
  title: '5월 신촌 소개팅',
  maleCount: 3,
  femaleCount: 3,
  timeLimit: 20,
  createdAt: new Date().toISOString(),
  status: 'created',
  accessCode: 'MEET123',
  participants: []
};

const JoinDatingPage = () => {
  const { accessCode } = useParams<{ accessCode: string }>();
  const navigate = useNavigate();

  const [dating] = useState(MOCK_DATING);

  const [formData, setFormData] = useState<ParticipantFormData>({
    nickname: '',
    gender: 'male',
    contactInfo: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      console.log('참가자 등록 데이터:', { accessCode, ...formData });

      setTimeout(() => {
        setIsLoading(false);
        navigate(`/waiting/${accessCode}`, {
          state: {
            participantId: 'participant-123',
            nickname: formData.nickname
          }
        });
      }, 1000);
    } catch (err) {
      setIsLoading(false);
      setError('참가자 등록 중 오류가 발생했습니다. 다시 시도해주세요.');
      console.error(err);
    }
  };

  return (
    <BaseLayout>
      <ContentWrapper>
        <JoinCard>
          <JoinCardHeader>
            <h2>소개팅 참여하기</h2>
            <EventTitle>{dating.title}</EventTitle>
          </JoinCardHeader>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="nickname">닉네임</Label>
              <Input
                type="text"
                id="nickname"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                placeholder="소개팅에서 사용할 닉네임을 입력하세요"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="gender">성별</Label>
              <Select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="male">남성</option>
                <option value="female">여성</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="contactInfo">연락 수단</Label>
              <Input
                type="text"
                id="contactInfo"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                placeholder="예: 카카오톡 ID, 인스타그램 아이디, 전화번호 등"
                required
              />
              <HelperText>상대방이 연락하고 싶을 때 사용할 연락 수단을 입력하세요.</HelperText>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">하고 싶은 말</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="자기소개나 하고 싶은 말을 입력하세요"
                rows={4}
              />
            </FormGroup>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Button
              type="submit"
              disabled={isLoading}
              fullWidth
            >
              {isLoading ? '등록 중...' : '참여하기'}
            </Button>
          </Form>
        </JoinCard>
      </ContentWrapper>
    </BaseLayout>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
`;

const JoinCard = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const JoinCardHeader = styled.div`
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

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #f06292;
    box-shadow: 0 0 0 2px rgba(240, 98, 146, 0.2);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #f06292;
    box-shadow: 0 0 0 2px rgba(240, 98, 146, 0.2);
  }
`;

const HelperText = styled.div`
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.25rem;
`;

const ErrorMessage = styled.div`
  color: #e53935;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

export default JoinDatingPage; 
