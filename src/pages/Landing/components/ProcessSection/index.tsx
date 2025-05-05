import { Clock, Heart, UserPlus, Users } from 'lucide-react';

import * as S from './style';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <UserPlus size={32} />,
      title: '소개팅 개설',
      description: '날짜, 장소, 인원을 설정하여 소개팅을 개설합니다.',
    },
    {
      icon: <Users size={32} />,
      title: '참가자 초대',
      description: '생성된 링크를 참가자들에게 공유하세요.',
    },
    {
      icon: <Clock size={32} />,
      title: '로테이션 소개팅',
      description: '모든 참가자가 서로 만날 수 있도록 로테이션이 진행됩니다.',
    },
    {
      icon: <Heart size={32} />,
      title: '결과 확인',
      description: '서로 마음에 들어한 경우에만 연락처가 공유됩니다.',
    },
  ];

  return (
    <S.ProcessContainer>
      <S.SectionTitle>이렇게 진행됩니다</S.SectionTitle>
      <S.StepsContainer>
        {steps.map((step, index) => (
          <S.StepCard key={step.title}>
            <S.StepNumber>{index + 1}</S.StepNumber>
            <S.IconContainer>{step.icon}</S.IconContainer>
            <S.StepTitle>{step.title}</S.StepTitle>
            <S.StepDescription>{step.description}</S.StepDescription>
          </S.StepCard>
        ))}
      </S.StepsContainer>
    </S.ProcessContainer>
  );
}
