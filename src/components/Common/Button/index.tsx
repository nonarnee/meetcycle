import type { ReactNode } from 'react';

import * as S from './style';

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
  width?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function Button({
  children,
  onClick,
  type = 'button',
  disabled = false,
  size = 'medium',
  variant = 'primary',
  width,
  icon,
  iconPosition = 'left',
}: ButtonProps) {
  return (
    <S.StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      size={size}
      variant={variant}
      width={width}
      hasIcon={!!icon}
    >
      {icon && iconPosition === 'left' && (
        <S.IconWrapper position={iconPosition}>{icon}</S.IconWrapper>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <S.IconWrapper position={iconPosition}>{icon}</S.IconWrapper>
      )}
    </S.StyledButton>
  );
}
