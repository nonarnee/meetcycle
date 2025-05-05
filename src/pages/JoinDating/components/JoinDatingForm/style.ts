import styled from '@emotion/styled';

import { Gender } from '@/types';

export const FormCard = styled.div`
  background-color: white;
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const FormHeader = styled.div`
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, #f06292 0%, #ec407a 100%);
  color: white;

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 0 1rem;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ProgressBar = styled.div`
  flex: 1;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ width: string }>`
  height: 100%;
  background-color: white;
  border-radius: 4px;
  width: ${(props) => props.width};
  transition: width 0.3s ease;
`;

export const StepIndicator = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
`;

export const FormContent = styled.div`
  padding: 2rem;
  min-height: 450px;
  display: flex;
  flex-direction: column;
`;

export const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const StepIcon = styled.div`
  width: 36px;
  height: 36px;
  background-color: #fce4ec;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f06292;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #444;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #f06292;
    box-shadow: 0 0 0 3px rgba(240, 98, 146, 0.2);
  }
`;

export const GenderSelection = styled.div`
  display: flex;
  gap: 1rem;
`;

export const GenderOption = styled.div<{ selected: boolean; gender: Gender }>`
  flex: 1;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${(props) =>
    props.selected ? (props.gender === Gender.MALE ? '#e3f2fd' : '#fce4ec') : 'white'};
  border: 2px solid
    ${(props) => (props.selected ? (props.gender === Gender.MALE ? '#1976d2' : '#f06292') : '#ddd')};
  color: ${(props) =>
    props.selected ? (props.gender === Gender.MALE ? '#1976d2' : '#f06292') : '#444'};
  font-weight: ${(props) => (props.selected ? '600' : 'normal')};

  &:hover {
    background-color: ${(props) => (props.gender === Gender.MALE ? '#e3f2fd' : '#fce4ec')};
    border-color: ${(props) => (props.gender === Gender.MALE ? '#1976d2' : '#f06292')};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #f06292;
    box-shadow: 0 0 0 3px rgba(240, 98, 146, 0.2);
  }
`;

export const CharCount = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 0.75rem;
  color: #666;
`;

export const HelpText = styled.div`
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.5rem;
`;

export const ProfilePreview = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
`;

export const PreviewTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

export const PreviewItem = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const PreviewLabel = styled.div`
  width: 80px;
  font-weight: 500;
  color: #666;
`;

export const PreviewValue = styled.div`
  flex: 1;
  color: #333;
`;

export const ErrorMessage = styled.div`
  margin-bottom: 1rem;
  color: #e53935;
  font-size: 0.875rem;
  padding: 0.75rem;
  background-color: #ffebee;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '!';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background-color: #e53935;
    color: white;
    border-radius: 50%;
    font-weight: bold;
    font-size: 0.75rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 1.5rem;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: transparent;
  color: #666;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const NextButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #f06292;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ec407a;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.875rem 2rem;
  background-color: #f06292;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #ec407a;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
