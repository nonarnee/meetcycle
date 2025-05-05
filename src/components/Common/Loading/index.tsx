import * as S from './style';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  fullScreen?: boolean;
}

export default function Loading({ size = 'medium', text, fullScreen = false }: LoadingProps) {
  return (
    <S.LoadingContainer fullScreen={fullScreen}>
      <S.Spinner size={size} />
      {text && <S.LoadingText>{text}</S.LoadingText>}
    </S.LoadingContainer>
  );
}
