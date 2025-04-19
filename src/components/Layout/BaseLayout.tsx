import { ReactNode } from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';

interface BaseLayoutProps {
  children: ReactNode;
  rightContent?: ReactNode;
  backgroundColor?: string;
}

const BaseLayout = ({
  children,
  rightContent,
  backgroundColor = 'linear-gradient(135deg, #fff5f7 0%, #f8f0ff 100%)'
}: BaseLayoutProps) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <Header rightContent={rightContent} />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </Container>
  );
};

const Container = styled.div<{ backgroundColor: string }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${props => props.backgroundColor};
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
`;

export default BaseLayout; 
