import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} fullWidth={fullWidth} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  variant: 'primary' | 'secondary' | 'outline';
  size: 'small' | 'medium' | 'large';
  fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  /* 배리언트에 따른 스타일 */
  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return `
          background-color: #f06292;
          color: white;
          border: none;
          
          &:hover:not(:disabled) {
            background-color: #ec407a;
          }
        `;
      case 'secondary':
        return `
          background-color: transparent;
          color: #666;
          border: none;
          
          &:hover:not(:disabled) {
            background-color: #f5f5f5;
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: #f06292;
          border: 1px solid #f06292;
          
          &:hover:not(:disabled) {
            background-color: rgba(240, 98, 146, 0.05);
          }
        `;
      default:
        return '';
    }
  }}

  /* 크기에 따른 스타일 */
  ${(props) => {
    switch (props.size) {
      case 'small':
        return `
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
        `;
      case 'medium':
        return `
          padding: 0.75rem 1.25rem;
          font-size: 1rem;
        `;
      case 'large':
        return `
          padding: 0.875rem 1.5rem;
          font-size: 1.125rem;
        `;
      default:
        return '';
    }
  }}
  
  /* 비활성화 상태 */
  &:disabled {
    background-color: #ccc;
    color: #888;
    cursor: not-allowed;
  }
`;

export default Button;
