import styled from '@emotion/styled';

export const HowItWorksSection = styled.section`
  padding: 4rem 0;
  background-color: white;
  border-radius: 8px;
  margin-top: 2rem;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #333;
`;

export const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Step = styled.div`
  text-align: center;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f06292;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0 auto 1rem;
`;

export const StepTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #333;
`;

export const StepText = styled.p`
  color: #666;
  line-height: 1.6;
`;
