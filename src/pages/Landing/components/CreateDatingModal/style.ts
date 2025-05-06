import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
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
  padding: 1rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 1rem 1rem 3rem;
  }
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  width: 100%;
  max-width: 550px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 2rem);

  @media (max-width: 768px) {
    margin: 2rem 0;
    max-height: none;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #f0f0f0;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 10;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
  }
`;

export const ModalScrollContent = styled.div`
  padding: 2rem;
  overflow-y: auto;
  flex: 1;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background-color: #f5f5f5;
    color: #333;
  }
`;

export const ModalDescription = styled.p`
  margin: 0 0 2rem;
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 0.9rem;
  color: #555;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #f06292;
    box-shadow: 0 0 0 3px rgba(240, 98, 146, 0.1);
  }

  &::placeholder {
    color: #aaa;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const HelpText = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.75rem;
  color: #888;
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: #ffebee;
  border-radius: 8px;
  color: #d32f2f;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

export const AlertIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: #d32f2f;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  font-size: 0.75rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;
