import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
`;

export const FormContainer = styled.div`
  max-width: 28rem;
  width: 100%;
  padding: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const FormHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 800;
  color: #111827;
`;

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const InputContainer = styled.div``;

export const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  color: #111827;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    ring: 2px;
    ring-offset: 2px;
    ring-color: #6366f1;
    border-color: #6366f1;
    z-index: 10;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #ef4444;
`;

export const SubmitButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background-color: #6366f1;

  &:hover:not(:disabled) {
    background-color: #4f46e5;
  }

  &:focus {
    outline: none;
    ring: 2px;
    ring-offset: 2px;
    ring-color: #6366f1;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
