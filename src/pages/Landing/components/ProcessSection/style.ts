import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const ProcessContainer = styled.section`
  padding: 4rem 1.5rem;
  background-color: ${colors.neutral[50]};
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.neutral[800]};
  text-align: center;
  margin-bottom: 5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${colors.primary.main};
    border-radius: 2px;
  }
`;

export const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StepCard = styled.div`
  background-color: ${colors.neutral[50]};
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  position: relative;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

export const StepNumber = styled.div`
  position: absolute;
  top: -15px;
  left: -15px;
  width: 40px;
  height: 40px;
  background-color: ${colors.primary.main};
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  box-shadow: 0 4px 8px ${colors.primary.main}4D;
`;

export const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${colors.primary.light};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: ${colors.primary.main};
`;

export const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.neutral[800]};
  margin-bottom: 1rem;
`;

export const StepDescription = styled.p`
  font-size: 1rem;
  color: ${colors.neutral[600]};
  line-height: 1.5;
`;
