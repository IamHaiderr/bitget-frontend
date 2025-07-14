import styled from 'styled-components';

const NavbarContainer = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 64px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #111315;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    opacity: 0.9;
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <Logo>Bitget</Logo>
    <NavLinks>
      <NavLink>Home</NavLink>
      <NavLink>Markets</NavLink>
      <NavLink>Futures</NavLink>
      <NavLink>Copy Trade</NavLink>
      <NavLink>Buy Crypto</NavLink>
      <NavLink>Web3</NavLink>
      <NavLink>More</NavLink>
    </NavLinks>
    <Actions>
      <NavLink>EN/USD</NavLink>
      <NavLink>Support</NavLink>
      <NavLink>Download</NavLink>
      <Button>Login</Button>
      <Button>Sign Up</Button>
      {/* Mobile menu icon placeholder */}
      <span style={{ fontSize: 24, cursor: 'pointer' }}>☰</span>
    </Actions>
  </NavbarContainer>
);

export default Navbar; 