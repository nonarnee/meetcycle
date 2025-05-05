import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { colors } from '@/styles/colors';

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
  position: relative;
  overflow: hidden;

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
          background-color: ${colors.primary.main};
          color: #fff;
          border: none;
          box-shadow: 0 2px 4px ${colors.primary.main}33;

          &:hover:not(:disabled) {
            background-color: ${colors.primary.dark};
            transform: translateY(-2px);
            box-shadow: 0 4px 8px ${colors.primary.main}4D;
          }

          &:active:not(:disabled) {
            transform: translateY(0);
            box-shadow: none;
          }
        `;
      case 'secondary':
        return css`
          background-color: ${colors.secondary.light};
          color: ${colors.secondary.main};
          border: none;

          &:hover:not(:disabled) {
            background-color: ${colors.secondary.main}22;
          }
        `;
      case 'tertiary':
        return css`
          background-color: ${colors.neutral[100]};
          color: ${colors.neutral[800]};
          border: none;

          &:hover:not(:disabled) {
            background-color: ${colors.primary.main}0D;
            transform: translateY(-2px);
          }

          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          color: ${colors.primary.main};
          border: 2px solid ${colors.primary.main};

          &:hover:not(:disabled) {
            background-color: ${colors.primary.main}0D;
          }
        `;
      case 'ghost':
        return css`
          background-color: transparent;
          color: ${colors.neutral[600]};
          border: none;

          &:hover:not(:disabled) {
            background-color: ${colors.neutral[100]};
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
    background-color: ${colors.neutral[200]};
    color: ${colors.neutral[500]};
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;
