import styled from '@emotion/styled';
import { Link } from 'react-router';

export const FormContainer = styled.div`
  max-width: 450px;
  width: 100%;
  padding: 2.5rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

export const FormHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #f06292;
  margin: 0;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
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

export const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  border: 1px solid ${(props) => (props.error ? '#f44336' : '#e0e0e0')};
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  transition: all 0.2s ease;
  background-color: ${(props) => (props.error ? 'rgba(244, 67, 54, 0.05)' : 'white')};

  &:focus {
    outline: none;
    border-color: #f06292;
    box-shadow: 0 0 0 3px rgba(240, 98, 146, 0.1);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const ErrorMessage = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.75rem;
  color: #f44336;
`;

export const FormFooter = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin: 0;
`;

export const FooterLink = styled(Link)`
  color: #f06292;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ec407a;
    text-decoration: underline;
  }
`;
