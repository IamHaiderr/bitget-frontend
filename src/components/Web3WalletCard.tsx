import styled from 'styled-components';

const Card = styled.div`
  background: #181A1B;
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.18);
  padding: 48px 40px 32px 40px;
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 72px;
  height: 72px;
  background: #00E1A2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  font-size: 2.8rem;
  color: #111315;
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
`;

const Subtitle = styled.div`
  color: #bdbdbd;
  font-size: 1.15rem;
  text-align: center;
  margin-bottom: 36px;
`;

const OptionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const Option = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 28px 0 18px 0;
  border-bottom: 1px solid #232527;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #202325;
  }
`;

const OptionIcon = styled.div`
  font-size: 1.3rem;
  color: #bdbdbd;
  margin-right: 18px;
  margin-top: 2px;
`;

const OptionText = styled.div`
  flex: 1;
`;

const OptionTitle = styled.div`
  color: #fff;
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 2px;
`;

const OptionSubtitle = styled.div`
  color: #bdbdbd;
  font-size: 1rem;
`;

const OptionArrow = styled.div`
  font-size: 1.3rem;
  color: #bdbdbd;
  margin-left: 18px;
  margin-top: 2px;
`;

export default function Web3WalletCard() {
  return (
    <Card>
      <Logo>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#00E1A2"/>
          <path d="M15 27L25 13H19L25 27H15Z" fill="#111315"/>
        </svg>
      </Logo>
      <Heading>Welcome to Bitget Wallet Extension</Heading>
      <Subtitle>Multi-chain wallet trusted by millions of people</Subtitle>
      <OptionList>
        <Option>
          <OptionIcon>＋</OptionIcon>
          <OptionText>
            <OptionTitle>Create a new wallet</OptionTitle>
            <OptionSubtitle>Start fresh with a new wallet</OptionSubtitle>
          </OptionText>
          <OptionArrow>→</OptionArrow>
        </Option>
        <Option>
          <OptionIcon>🛡️</OptionIcon>
          <OptionText>
            <OptionTitle>Recover with mnemonic</OptionTitle>
            <OptionSubtitle>Restore access with your secret phrase</OptionSubtitle>
          </OptionText>
          <OptionArrow>→</OptionArrow>
        </Option>
        <Option>
          <OptionIcon>🔑</OptionIcon>
          <OptionText>
            <OptionTitle>Recover with private key</OptionTitle>
            <OptionSubtitle>Use your private key to regain access</OptionSubtitle>
          </OptionText>
          <OptionArrow>→</OptionArrow>
        </Option>
        <Option style={{ borderBottom: 'none' }}>
          <OptionIcon>🧩</OptionIcon>
          <OptionText>
            <OptionTitle>Ledger</OptionTitle>
            <OptionSubtitle>Connect your Ledger wallet</OptionSubtitle>
          </OptionText>
          <OptionArrow>→</OptionArrow>
        </Option>
      </OptionList>
    </Card>
  );
} 