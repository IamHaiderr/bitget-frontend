import styled from 'styled-components';
import Link from 'next/link';

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
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 6px 10px;
  border-radius: 6px;
  transition: background 0.18s, color 0.18s;
  list-style: none;
  display: flex;
  align-items: center;
  &:hover, &:focus {
    background: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    outline: none;
  }
  & > a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
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
  transition: box-shadow 0.18s, transform 0.18s, background 0.18s;
  margin-right: 18px;
  &:last-child {
    margin-right: 32px;
    background: linear-gradient(90deg, #00E1A2 60%, #00bfae 100%);
    box-shadow: 0 2px 16px rgba(0,225,162,0.18);
    font-weight: 700;
    letter-spacing: 0.5px;
    transform: scale(1.04);
  }
  &:hover {
    opacity: 0.95;
    box-shadow: 0 4px 24px rgba(0,225,162,0.22);
    transform: scale(1.07);
  }
  &.signup-btn {
    margin-right: 86px;
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
      <Link href="/web3" passHref legacyBehavior><NavLink as="a">Web3</NavLink></Link>
      <NavLink>More</NavLink>
    </NavLinks>
    <Actions>
      <Button>Login</Button>
      <Link href="/signup" passHref legacyBehavior><Button as="a" className="signup-btn">Sign Up</Button></Link>
      {/* Mobile menu icon placeholder */}
      <span style={{ fontSize: 24, cursor: 'pointer' }}>☰</span>
    </Actions>
  </NavbarContainer>
);

export default Navbar; 