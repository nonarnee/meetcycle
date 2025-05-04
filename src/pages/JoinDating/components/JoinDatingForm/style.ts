import styled from '@emotion/styled';

import { Gender } from '@/types';

export const FormCard = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const FormHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #eee;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
    color: #333;
  }
`;

export const Form = styled.form`
  padding: 1.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #444;
`;

export const Input = styled.input`
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

export const GenderSelection = styled.div`
  display: flex;
  gap: 1rem;
`;

export const GenderOption = styled.div<{ selected: boolean; gender: Gender }>`
  flex: 1;
  padding: 0.75rem;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${(props) =>
    props.selected ? (props.gender === Gender.MALE ? '#e3f2fd' : '#fce4ec') : 'white'};
  border: 1px solid
    ${(props) => (props.selected ? (props.gender === Gender.MALE ? '#1976d2' : '#f06292') : '#ddd')};
  color: ${(props) =>
    props.selected ? (props.gender === Gender.MALE ? '#1976d2' : '#f06292') : '#444'};
  font-weight: ${(props) => (props.selected ? '500' : 'normal')};

  &:hover {
    background-color: ${(props) => (props.gender === Gender.MALE ? '#e3f2fd' : '#fce4ec')};
    border-color: ${(props) => (props.gender === Gender.MALE ? '#1976d2' : '#f06292')};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #f06292;
    box-shadow: 0 0 0 2px rgba(240, 98, 146, 0.2);
  }
`;

export const ErrorMessage = styled.div`
  margin-bottom: 1rem;
  color: #e53935;
  font-size: 0.875rem;
`;
