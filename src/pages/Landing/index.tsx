import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import CreateDatingModal, { DatingFormData } from '../../components/Modal/CreateDatingModal';

const mockAccessCode = 'MEET123';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreateDating = (datingData: DatingFormData) => {
    console.log('소개팅 생성 데이터:', datingData);
    closeModal();

    navigate(`/board/${mockAccessCode}`);
  };

  return (
    <Container>
      <Header>
        <Logo>MeetCycle</Logo>
        <Navigation>
          <CreateButton onClick={openModal}>소개팅 개설하기</CreateButton>
        </Navigation>
      </Header>

      <HeroSection>
        <HeroTitle>로테이션 소개팅을 쉽고 재미있게</HeroTitle>
        <HeroText>
          밋사이클과 함께 새로운 만남을 시작하세요. 간편한 설정으로 로테이션 소개팅을 진행하고,
          서로에게 맞는 짝을 찾아보세요.
        </HeroText>
        <StartButton onClick={openModal}>지금 시작하기</StartButton>
      </HeroSection>

      <FeaturesSection>
        <FeatureCard>
          <FeatureTitle>쉬운 소개팅 개설</FeatureTitle>
          <FeatureText>몇 가지 정보만 입력하면 바로 소개팅을 개설할 수 있어요.</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>로테이션 매칭</FeatureTitle>
          <FeatureText>모든 참가자가 서로 만날 수 있는 로테이션 방식으로 진행됩니다.</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>간편한 결과 확인</FeatureTitle>
          <FeatureText>서로 마음이 맞는 경우에만 연락처가 공유됩니다.</FeatureText>
        </FeatureCard>
      </FeaturesSection>

      <HowItWorksSection>
        <SectionTitle>이용 방법</SectionTitle>
        <StepsContainer>
          <Step>
            <StepNumber>1</StepNumber>
            <StepTitle>소개팅 개설하기</StepTitle>
            <StepText>이벤트 정보를 입력하고 소개팅을 개설하세요.</StepText>
          </Step>
          <Step>
            <StepNumber>2</StepNumber>
            <StepTitle>참가자 초대하기</StepTitle>
            <StepText>생성된 링크를 참가자들에게 공유하세요.</StepText>
          </Step>
          <Step>
            <StepNumber>3</StepNumber>
            <StepTitle>로테이션 소개팅 진행</StepTitle>
            <StepText>모든 참가자가 서로 만날 수 있도록 로테이션이 진행됩니다.</StepText>
          </Step>
          <Step>
            <StepNumber>4</StepNumber>
            <StepTitle>결과 확인하기</StepTitle>
            <StepText>서로 마음에 들어한 경우에만 연락처가 공유됩니다.</StepText>
          </Step>
        </StepsContainer>
      </HowItWorksSection>

      <Footer>
        <FooterText>© 2025 MeetCycle - All rights reserved</FooterText>
      </Footer>

      {isModalOpen && <CreateDatingModal onClose={closeModal} onSubmit={handleCreateDating} />}
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #fff5f7 0%, #f8f0ff 100%);
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
  color: #f06292;
`;

const Navigation = styled.nav`
  display: flex;
`;

const CreateButton = styled.button`
  background-color: #f06292;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #ec407a;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StartButton = styled.button`
  background-color: #f06292;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.875rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(240, 98, 146, 0.2);
  
  &:hover {
    background-color: #ec407a;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(240, 98, 146, 0.3);
  }
`;

const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  color: #f06292;
  margin-bottom: 1rem;
`;

const FeatureText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const HowItWorksSection = styled.section`
  padding: 4rem 2rem;
  background-color: white;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 3rem;
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Step = styled.div`
  text-align: center;
  padding: 1.5rem;
`;

const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #f06292;
  color: white;
  border-radius: 50%;
  font-weight: 600;
  margin: 0 auto 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.75rem;
`;

const StepText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.875rem;
`;

export default LandingPage; 
