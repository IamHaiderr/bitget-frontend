import styled from 'styled-components';
import LoginNavbar from '../components/LoginNavbar';
import { useState } from 'react';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #000;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', 'Roboto', 'Arial', sans-serif;
`;

const CenterContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background: #000;
  border-radius: 16px;
  padding: 0;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 18px;
  text-align: center;
  letter-spacing: 0.01em;
  line-height: 1.1;
`;

const SubText = styled.div`
  color: #fff;
  font-size: 1.08rem;
  margin-bottom: 18px;
  text-align: center;
  font-weight: 400;
`;

const RegisterLink = styled.a`
  color: #00E1A2;
  margin-left: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.08rem;
  &:hover {
    text-decoration: underline;
  }
`;

const QRBtn = styled.button`
  background: #181A1B;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1.2rem;
  padding: 8px 10px;
  margin-left: 12px;
  cursor: pointer;
  transition: background 0.18s;
  &:hover {
    background: #232527;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 18px;
  margin-top: 18px;
  width: 100%;
  border-bottom: 1.5px solid #232527;
`;

const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  color: ${({ active }) => (active ? '#fff' : '#888')};
  font-size: 1.13rem;
  font-weight: 700;
  border-bottom: ${({ active }) => (active ? '3px solid #00E1A2' : '3px solid transparent')};
  padding: 0 0 10px 0;
  cursor: pointer;
  transition: color 0.18s, border-bottom 0.18s;
`;

const Input = styled.input`
  width: 100%;
  padding: 20px 24px;
  border: 1.5px solid #232527;
  border-radius: 24px;
  font-size: 1.13rem;
  background: #000;
  color: #fff;
  margin-bottom: 24px;
  outline: none;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: border 0.18s;
  &:focus {
    border-color: #00E1A2;
    background: #000;
  }
`;

const NextBtn = styled.button`
  width: 100%;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 24px;
  padding: 20px 0;
  font-size: 1.18rem;
  font-weight: 800;
  margin-bottom: 24px;
  cursor: pointer;
  letter-spacing: 0.01em;
  transition: background 0.18s, color 0.18s;
  &:hover {
    background: #00E1A2;
    color: #000;
  }
`;

const Divider = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 1rem;
  margin: 18px 0 18px 0;
  position: relative;
  font-weight: 400;
  &:before, &:after {
    content: '';
    display: inline-block;
    width: 38%;
    height: 1px;
    background: #232527;
    vertical-align: middle;
    margin: 0 8px;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 24px;
  justify-content: center;
`;

const SocialBtn = styled.button`
  background: #000;
  border: 1.5px solid #232527;
  border-radius: 12px;
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.15s, border 0.15s, background 0.15s;
  &:hover {
    background: #181A1B;
    border-color: #00E1A2;
  }
`;

const WalletBtn = styled(SocialBtn)`
  border-radius: 24px;
  width: auto;
  padding: 0 22px;
  font-size: 1.13rem;
  font-weight: 600;
  gap: 8px;
`;

const SmarterTrading = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 1.7rem;
  margin-top: 72px;
  margin-bottom: 40px;
  letter-spacing: 0.01em;
  text-align: center;
`;

const Footer = styled.footer`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  color: #fff;
  font-size: 0.97rem;
  background: #000;
  padding: 18px 0 12px 0;
  border-top: 1px solid #232527;
  a {
    color: #fff;
    text-decoration: none;
    margin: 0 6px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'email' | 'sub'>('email');
  return (
    <PageContainer>
      <LoginNavbar />
      <CenterContent>
        <Card>
          <Heading>Log in</Heading>
          <SubText>
            Don&apos;t have an account?
            <RegisterLink href="/signup">Register</RegisterLink>
            <QRBtn title="QR code login">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
                <rect x="2" y="2" width="6" height="6" rx="1.5" fill="#fff"/>
                <rect x="2" y="14" width="6" height="6" rx="1.5" fill="#fff"/>
                <rect x="14" y="2" width="6" height="6" rx="1.5" fill="#fff"/>
                <rect x="8" y="8" width="6" height="6" rx="1.5" fill="#fff"/>
                <rect x="14" y="14" width="2" height="2" rx="0.5" fill="#fff"/>
                <rect x="18" y="18" width="2" height="2" rx="0.5" fill="#fff"/>
              </svg>
            </QRBtn>
          </SubText>
          <Tabs>
            <Tab active={activeTab === 'email'} onClick={() => setActiveTab('email')}>Email/Mobile Number</Tab>
            <Tab active={activeTab === 'sub'} onClick={() => setActiveTab('sub')}>Sub-accounts</Tab>
          </Tabs>
          <Input placeholder="Email/mobile phone number (excluding int" />
          <NextBtn>Next step</NextBtn>
          <Divider>or</Divider>
          <SocialRow>
            <SocialBtn title="Google">G</SocialBtn>
            <SocialBtn title="Apple"></SocialBtn>
            <SocialBtn title="Telegram">✈️</SocialBtn>
            <WalletBtn>
              <span role="img" aria-label="metamask">🦊</span> Wallet
            </WalletBtn>
          </SocialRow>
        </Card>
        <SmarterTrading>Smarter trading</SmarterTrading>
      </CenterContent>
      <Footer>
        <span>© 2025 Bitget</span>
        <a href="#">privacy</a>
        <span>·</span>
        <a href="#">Terms</a>
        <span>·</span>
        <a href="#">risk</a>
      </Footer>
    </PageContainer>
  );
} 