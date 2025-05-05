import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface StyledButtonProps {
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
  width?: string;
  hasIcon: boolean;
}

interface IconWrapperProps {
  position: 'left' | 'right';
}

export const IconWrapper = styled.span<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.position === 'right' ? '0.5rem' : 0)};
  margin-right: ${(props) => (props.position === 'left' ? '0.5rem' : 0)};
`;

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  width: ${(props) => props.width || 'auto'};

  ${(props) =>
    props.hasIcon &&
    css`
      gap: 0.5rem;
    `}

  /* Variant styles */
  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return css`
          background-color: #f06292;
          color: white;
          border: none;
          box-shadow: 0 2px 4px rgba(240, 98, 146, 0.2);

          &:hover:not(:disabled) {
            background-color: #ec407a;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(240, 98, 146, 0.3);
          }

          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
      case 'secondary':
        return css`
          background-color: #e3f2fd;
          color: #1976d2;
          border: none;

          &:hover:not(:disabled) {
            background-color: #bbdefb;
          }
        `;
      case 'tertiary':
        return css`
          background-color: #f5f5f5;
          color: #333;
          border: none;

          &:hover:not(:disabled) {
            background-color: #e0e0e0;
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          color: #f06292;
          border: 2px solid #f06292;

          &:hover:not(:disabled) {
            background-color: rgba(240, 98, 146, 0.05);
          }
        `;
      case 'ghost':
        return css`
          background-color: transparent;
          color: #666;
          border: none;

          &:hover:not(:disabled) {
            background-color: #f5f5f5;
          }
        `;
      default:
        return '';
    }
  }}

  /* Size styles */
  ${(props) => {
    switch (props.size) {
      case 'small':
        return css`
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
        `;
      case 'medium':
        return css`
          padding: 0.75rem 1.25rem;
          font-size: 1rem;
        `;
      case 'large':
        return css`
          padding: 0.875rem 1.5rem;
          font-size: 1.125rem;
        `;
      default:
        return '';
    }
  }}
  
  /* Disabled state */
  &:disabled {
    background-color: #e0e0e0;
    color: #9e9e9e;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;
