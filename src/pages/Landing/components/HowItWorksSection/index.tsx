import * as S from './style';

export default function HowItWorksSection() {
  return (
    <S.HowItWorksSection>
      <S.SectionTitle>이용 방법</S.SectionTitle>
      <S.StepsContainer>
        <S.Step>
          <S.StepNumber>1</S.StepNumber>
          <S.StepTitle>소개팅 개설하기</S.StepTitle>
          <S.StepText>이벤트 정보를 입력하고 소개팅을 개설하세요.</S.StepText>
        </S.Step>
        <S.Step>
          <S.StepNumber>2</S.StepNumber>
          <S.StepTitle>참가자 초대하기</S.StepTitle>
          <S.StepText>생성된 링크를 참가자들에게 공유하세요.</S.StepText>
        </S.Step>
        <S.Step>
          <S.StepNumber>3</S.StepNumber>
          <S.StepTitle>로테이션 소개팅 진행</S.StepTitle>
          <S.StepText>모든 참가자가 서로 만날 수 있도록 로테이션이 진행됩니다.</S.StepText>
        </S.Step>
        <S.Step>
          <S.StepNumber>4</S.StepNumber>
          <S.StepTitle>결과 확인하기</S.StepTitle>
          <S.StepText>서로 마음에 들어한 경우에만 연락처가 공유됩니다.</S.StepText>
        </S.Step>
      </S.StepsContainer>
    </S.HowItWorksSection>
  );
}
