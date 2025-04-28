import { useState } from 'react';
import styled from '@emotion/styled';

interface CreateDatingModalProps {
  onClose: () => void;
  onSubmit: (eventData: MeetingFormData) => void;
}

export interface MeetingFormData {
  title: string;
  maleCount: number;
  femaleCount: number;
  location: string;
  dateTime: string;
  roundDurationMinutes: number;
}

const CreateDatingModal: React.FC<CreateDatingModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<MeetingFormData>({
    title: '',
    maleCount: 3,
    femaleCount: 3,
    location: '',
    dateTime: '',
    roundDurationMinutes: 10,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h2>소개팅 개설하기</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalContent>
          <p>새로운 소개팅을 개설하고 친구들을 초대해보세요.</p>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor='title'>소개팅 이름</Label>
              <Input
                type='text'
                id='title'
                name='title'
                value={formData.title}
                onChange={handleChange}
                placeholder='예: 로테이션 소개팅'
                required
              />
            </FormGroup>

            <FormRow>
              <FormGroup>
                <Label htmlFor='maleCount'>남성 인원</Label>
                <Input
                  type='number'
                  id='maleCount'
                  name='maleCount'
                  value={formData.maleCount}
                  onChange={handleChange}
                  min='1'
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='femaleCount'>여성 인원</Label>
                <Input
                  type='number'
                  id='femaleCount'
                  name='femaleCount'
                  value={formData.femaleCount}
                  onChange={handleChange}
                  min='1'
                  required
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor='location'>장소</Label>
              <Input
                type='text'
                id='location'
                name='location'
                value={formData.location}
                onChange={handleChange}
                placeholder='예: 신촌 카페'
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor='title'>시간</Label>
              <Input
                type='text'
                id='dateTime'
                name='dateTime'
                value={formData.dateTime}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor='roundDurationMinutes'>대화 시간 (분)</Label>
              <Input
                type='number'
                id='roundDurationMinutes'
                name='roundDurationMinutes'
                value={formData.roundDurationMinutes}
                onChange={handleChange}
                min='5'
                required
              />
            </FormGroup>

            <ButtonGroup>
              <CancelButton type='button' onClick={onClose}>
                취소
              </CancelButton>
              <SubmitButton type='submit'>개설하기</SubmitButton>
            </ButtonGroup>
          </Form>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #eee;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;

  &:hover {
    color: #333;
  }
`;

const ModalContent = styled.div`
  padding: 20px;

  p {
    margin-top: 0;
    margin-bottom: 20px;
    color: #666;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 8px;
  color: #444;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #f06292;
    box-shadow: 0 0 0 2px rgba(240, 98, 146, 0.2);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 8px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
`;

const CancelButton = styled(Button)`
  background: none;
  border: none;
  color: #666;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #f06292;
  color: white;
  border: none;

  &:hover {
    background-color: #ec407a;
  }
`;

export default CreateDatingModal;
