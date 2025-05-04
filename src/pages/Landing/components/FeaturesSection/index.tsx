import * as S from './style';

export default function FeaturesSection() {
  return (
    <S.FeaturesSection>
      <S.FeatureCard>
        <S.FeatureTitle>쉬운 소개팅 개설</S.FeatureTitle>
        <S.FeatureText>몇 가지 정보만 입력하면 바로 소개팅을 개설할 수 있어요.</S.FeatureText>
      </S.FeatureCard>
      <S.FeatureCard>
        <S.FeatureTitle>로테이션 매칭</S.FeatureTitle>
        <S.FeatureText>모든 참가자가 서로 만날 수 있는 로테이션 방식으로 진행됩니다.</S.FeatureText>
      </S.FeatureCard>
      <S.FeatureCard>
        <S.FeatureTitle>간편한 결과 확인</S.FeatureTitle>
        <S.FeatureText>서로 마음이 맞는 경우에만 연락처가 공유됩니다.</S.FeatureText>
      </S.FeatureCard>
    </S.FeaturesSection>
  );
}
