import styled from '@emotion/styled';

export const HeroSection = styled.section`
  text-align: center;
  padding: 2rem 1rem 4rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const HeroTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroText = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
