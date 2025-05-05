import * as S from './style';

interface Tip {
  icon: React.ReactNode;
  text: string;
}

interface TipsCardProps {
  tips: Tip[];
}

export default function TipsCard({ tips }: TipsCardProps) {
  return (
    <S.TipsCard>
      <S.TipsTitle>소개팅 팁</S.TipsTitle>
      <S.TipsList>
        {tips.map((tip, index) => (
          <S.TipItem key={index}>
            <S.TipIcon>{tip.icon}</S.TipIcon>
            <S.TipText>{tip.text}</S.TipText>
          </S.TipItem>
        ))}
      </S.TipsList>
    </S.TipsCard>
  );
}
