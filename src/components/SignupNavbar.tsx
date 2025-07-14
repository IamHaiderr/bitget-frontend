import styled from 'styled-components';

const NavbarContainer = styled.nav`
  width: 100%;
  background: #181A1B;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 64px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  font-weight: bold;
  color: #00E1A2;
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const IconBtn = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;

const SignupNavbar = () => (
  <NavbarContainer>
    <Logo>
      <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="24" fontSize="24" fontWeight="bold" fill="#00E1A2">Bitget</text>
      </svg>
    </Logo>
    <RightIcons>
      <IconBtn title="App">
        <span role="img" aria-label="app">📱</span>
      </IconBtn>
      <IconBtn title="Globe">
        <span role="img" aria-label="globe">🌐</span>
      </IconBtn>
    </RightIcons>
  </NavbarContainer>
);

export default SignupNavbar; 