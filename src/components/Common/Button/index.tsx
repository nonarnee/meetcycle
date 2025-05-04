import React from 'react';

import * as S from './style';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
  width?: string;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  disabled = false,
  size = 'medium',
  variant = 'primary',
  width,
}: ButtonProps) {
  return (
    <S.Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      size={size}
      variant={variant}
      width={width}
    >
      {children}
    </S.Button>
  );
}
