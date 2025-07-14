import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  padding: 48px 32px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 24px;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Legal = styled.div`
  color: #888;
  font-size: 0.95rem;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <Logo>Bitget</Logo>
    <NavLinks>
      <NavLink href="#">Home</NavLink>
      <NavLink href="#">Markets</NavLink>
      <NavLink href="#">Futures</NavLink>
      <NavLink href="#">Copy Trade</NavLink>
      <NavLink href="#">Buy Crypto</NavLink>
      <NavLink href="#">Web3</NavLink>
      <NavLink href="#">Support</NavLink>
    </NavLinks>
    <Legal>
      &copy; {new Date().getFullYear()} Bitget. All rights reserved.<br />
      This site is for informational purposes only and is not investment advice.
    </Legal>
  </FooterContainer>
);

export default Footer; 