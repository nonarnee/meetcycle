import styled from '@emotion/styled';
import { Link } from 'react-router';

import { colors } from '@/styles/colors';

export const FormContainer = styled.div`
  max-width: 450px;
  width: 100%;
  padding: 2.5rem;
  background-color: ${colors.neutral[50]};
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
  color: ${colors.primary.main};
  margin: 0;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${colors.neutral[800]};
  margin: 0 0 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: ${colors.neutral[600]};
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
  color: ${colors.neutral[700]};
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  color: ${colors.neutral[400]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  border: 1px solid ${(props) => (props.error ? colors.error : colors.neutral[200])};
  border-radius: 8px;
  font-size: 1rem;
  color: ${colors.neutral[800]};
  transition: all 0.2s ease;
  background-color: ${(props) => (props.error ? colors.error + '0D' : colors.neutral[50])};

  &:focus {
    outline: none;
    border-color: ${colors.primary.main};
    box-shadow: 0 0 0 3px ${colors.primary.main}1A;
  }

  &::placeholder {
    color: ${colors.neutral[400]};
  }
`;

export const ErrorMessage = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.75rem;
  color: ${colors.error};
`;

export const FormFooter = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
  color: ${colors.neutral[600]};
  margin: 0;
`;

export const FooterLink = styled(Link)`
  color: ${colors.primary.main};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primary.dark};
    text-decoration: underline;
  }
`;
