import styled from 'styled-components';
import SignupNavbar from '../components/SignupNavbar';
import Link from 'next/link';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 0;
`;

const LeftCol = styled.div`
  flex: 1.1;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 36px 0 56px 5vw;
  min-width: 380px;
`;

const CnHeading = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111315;
  margin-bottom: 14px;
  text-align: center;
`;

const CnSubheading = styled.div`
  font-size: 1.1rem;
  color: #232527;
  margin-bottom: 38px;
  text-align: center;
`;

const FootballImg = styled.div`
  width: 340px;
  height: 340px;
  background: #eee;
  border-radius: 24px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  align-self: center;
`;

const TelegramCard = styled.div`
  display: flex;
  align-items: flex-start;
  background: #fff;
  border-radius: 32px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  padding: 20px 36px 20px 20px;
  font-size: 1.13rem;
  color: #232527;
  margin-top: 18px;
  min-width: 380px;
  max-width: 440px;
  width: 100%;
  align-self: center;
`;

const TelegramIcon = styled.div`
  width: 38px;
  height: 38px;
  background: #229ED9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.6rem;
  margin-right: 16px;
`;

const TelegramText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const TelegramMain = styled.div`
  font-weight: 600;
  font-size: 1.13rem;
  color: #232527;
  margin-bottom: 2px;
  word-break: break-word;
`;

const TelegramSub = styled.div`
  font-size: 1.01rem;
  color: #888;
  word-break: break-word;
`;

const RightCol = styled.div`
  flex: 1;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 36px 4vw 56px 2vw;
  position: relative;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  padding: 40px 48px 32px 48px;
  max-width: 480px;
  width: 100%;
  min-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Heading = styled.h1`
  color: #111315;
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 28px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputLabel = styled.label`
  font-size: 1.08rem;
  color: #6c7a89;
  margin-bottom: 12px;
  font-weight: 600;
  width: 100%;
  letter-spacing: 0.01em;
  transition: color 0.18s;
`;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 2px 16px 10px;
  border: 1.5px solid #e0e0e0;
  border-radius: 28px;
  font-size: 1.08rem;
  background: #fafbfc;
  color: #232527;
  margin-bottom: 2px;
  outline: none;
  transition: border 0.18s;
  &:focus {
    border-color: #00E1A2;
    background: #fff;
  }
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
  font-size: 0.99rem;
  color: #232527;
  line-height: 1.5;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  margin-top: 3px;
`;

const CreateAccountBtn = styled.button`
  width: 100%;
  background: #e0e0e0;
  color: #bdbdbd;
  border: none;
  border-radius: 28px;
  padding: 18px 0;
  font-size: 1.13rem;
  font-weight: 700;
  margin-top: 10px;
  cursor: not-allowed;
  letter-spacing: 0.01em;
`;

const Divider = styled.div`
  width: 100%;
  text-align: center;
  color: #bdbdbd;
  font-size: 1rem;
  margin: 30px 0 18px 0;
  position: relative;
  &:before, &:after {
    content: '';
    display: inline-block;
    width: 38%;
    height: 1px;
    background: #e0e0e0;
    vertical-align: middle;
    margin: 0 8px;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 18px;
  justify-content: flex-start;
`;

const SocialBtn = styled.button`
  background: #fafbfc;
  border: 1.5px solid #e0e0e0;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  color: #232527;
  cursor: pointer;
  transition: box-shadow 0.15s, border 0.15s;
  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.10);
    border-color: #00E1A2;
  }
`;

const WalletBtn = styled(SocialBtn)`
  border-radius: 24px;
  width: auto;
  padding: 0 18px;
  font-size: 1rem;
  font-weight: 500;
  gap: 8px;
`;

const LoginLink = styled.div`
  color: #232527;
  font-size: 1rem;
  margin-top: 10px;
  text-align: left;
  a {
    color: #00E1A2;
    text-decoration: none;
    font-weight: 500;
    margin-left: 4px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = styled.footer`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  color: #bdbdbd;
  font-size: 0.97rem;
  background: #fff;
  padding: 18px 0 12px 0;
  border-top: 1px solid #f0f0f0;
  a {
    color: #bdbdbd;
    text-decoration: none;
    margin: 0 6px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function SignupPage() {
  return (
    <>
      <SignupNavbar />
      <PageContainer>
        <MainContent>
          <LeftCol>
            {/* Logo removed as requested */}
            <CnHeading>庆祝Bitget<br />与西甲联赛的合作</CnHeading>
            <CnSubheading>领取您的6200 USDT欢迎奖金</CnSubheading>
            <FootballImg>
              {/* Placeholder for footballers image */}
              <span role="img" aria-label="footballers" style={{ fontSize: '6rem' }}>⚽️</span>
            </FootballImg>
            <TelegramCard>
              <TelegramIcon>
                <span role="img" aria-label="telegram">✈️</span>
              </TelegramIcon>
              <TelegramText>
                <TelegramMain>
                  Join the Bitget Telegram group now <span style={{ fontSize: '1.2em' }}>→</span>
                </TelegramMain>
                <TelegramSub>
                  Get help, share tips, and receive the latest news from Bitmain.
                </TelegramSub>
              </TelegramText>
            </TelegramCard>
          </LeftCol>
          <RightCol>
            <Card>
              <Heading>Welcome to Bitget</Heading>
              <Form>
                <InputGroup>
                  <InputLabel>Email/Mobile Number</InputLabel>
                  <Input placeholder="Email/mobile phone number (excluding international area code)" />
                </InputGroup>
                <InputGroup>
                  <InputLabel>password</InputLabel>
                  <Input placeholder="Set password" type="password" />
                </InputGroup>
                <InputGroup>
                  <InputLabel>Invite Code</InputLabel>
                  <Input placeholder="请输入邀请码，区分大小写" />
                </InputGroup>
                <CheckboxRow>
                  <Checkbox type="checkbox" />
                  I have read and agreed to the <a href="#" style={{ color: '#00E1A2', textDecoration: 'none' }}>User Agreement</a> and <a href="#" style={{ color: '#00E1A2', textDecoration: 'none' }}>Privacy Policy</a>
                </CheckboxRow>
                <CreateAccountBtn disabled>Create Account</CreateAccountBtn>
              </Form>
              <Divider>Or log in via the following methods</Divider>
              <SocialRow>
                <SocialBtn title="Google">G</SocialBtn>
                <SocialBtn title="Apple"></SocialBtn>
                <SocialBtn title="Telegram">✈️</SocialBtn>
                <WalletBtn>
                  Connect your wallet
                </WalletBtn>
                <SocialBtn title="MetaMask">
                  <span role="img" aria-label="metamask">🦊</span>
                </SocialBtn>
                <SocialBtn title="Bitget">
                  <span role="img" aria-label="bitget">🌀</span>
                </SocialBtn>
              </SocialRow>
              <LoginLink>
                Already have an account?
                <Link href="/login">Log in</Link>
              </LoginLink>
            </Card>
          </RightCol>
        </MainContent>
        <Footer>
          <span>© 2025 Bitget</span>
          <a href="#">privacy</a>
          <span>·</span>
          <a href="#">Terms</a>
          <span>·</span>
          <a href="#">risk</a>
        </Footer>
      </PageContainer>
    </>
  );
} 