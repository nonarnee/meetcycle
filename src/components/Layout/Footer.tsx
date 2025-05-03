import styled from '@emotion/styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>© {currentYear} MeetCycle - All rights reserved</FooterText>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1.5rem;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.875rem;
`;

export default Footer;
