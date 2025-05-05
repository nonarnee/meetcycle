import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { Gender } from '@/types';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
`;

export const FormCard = styled.div`
  background-color: ${colors.neutral[50]};
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const FormHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${colors.neutral[200]};
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
    color: ${colors.neutral[800]};
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
  color: ${colors.neutral[700]};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${colors.neutral[200]};
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${colors.primary.main};
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
    props.selected
      ? props.gender === Gender.MALE
        ? colors.secondary.light
        : colors.primary.light
      : colors.neutral[50]};
  border: 1px solid
    ${(props) =>
      props.selected
        ? props.gender === Gender.MALE
          ? colors.secondary.main
          : colors.primary.main
        : colors.neutral[200]};
  color: ${(props) =>
    props.selected
      ? props.gender === Gender.MALE
        ? colors.secondary.main
        : colors.primary.main
      : colors.neutral[700]};
  font-weight: ${(props) => (props.selected ? '500' : 'normal')};
  &:hover {
    background-color: ${(props) =>
      props.gender === Gender.MALE ? colors.secondary.light : colors.primary.light};
    border-color: ${(props) =>
      props.gender === Gender.MALE ? colors.secondary.main : colors.primary.main};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${colors.neutral[200]};
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${colors.primary.main};
    box-shadow: 0 0 0 2px rgba(240, 98, 146, 0.2);
  }
`;

export const ErrorMessage = styled.div`
  margin-bottom: 1rem;
  color: ${colors.error};
  font-size: 0.875rem;
`;
