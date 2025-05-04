import styled from '@emotion/styled';

export const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FeatureCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  color: #f06292;
  margin-bottom: 1rem;
`;

export const FeatureText = styled.p`
  color: #666;
  line-height: 1.6;
`;
