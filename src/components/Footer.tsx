import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  padding: 48px 32px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FooterTop = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  gap: 32px;
`;
const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 180px;
`;
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 18px;
`;
const DownloadBtn = styled.a`
  display: inline-block;
  background: #232527;
  color: #fff;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 18px;
  text-decoration: none;
  margin-bottom: 18px;
`;
const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
`;
const SocialIcon = styled.div`
  width: 28px;
  height: 28px;
  background: #232527;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.1rem;
`;
const FooterCols = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  flex: 1;
`;
const FooterCol = styled.div`
  min-width: 160px;
`;
const ColTitle = styled.div`
  font-weight: 700;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.primary};
`;
const ColLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 8px;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const Legal = styled.div`
  color: #888;
  font-size: 0.95rem;
  text-align: center;
  margin-top: 32px;
`;

const Footer = () => (
  <FooterContainer>
    <FooterTop>
      <FooterBrand>
        <Logo>Bitget</Logo>
        <span>Trade smarter</span>
        <DownloadBtn href="#">↓ Download the App</DownloadBtn>
        <SocialIcons>
          <SocialIcon>F</SocialIcon>
          <SocialIcon>T</SocialIcon>
          <SocialIcon>Y</SocialIcon>
          <SocialIcon>I</SocialIcon>
        </SocialIcons>
      </FooterBrand>
      <FooterCols>
        <FooterCol>
          <ColTitle>company</ColTitle>
          <ColLink href="#">About Us</ColLink>
          <ColLink href="#">Contact Us</ColLink>
          <ColLink href="#">Overseas Chinese Community</ColLink>
          <ColLink href="#">Career Opportunities</ColLink>
          <ColLink href="#">La Liga Partners</ColLink>
          <ColLink href="#">2023 - 2024 Partner Messi</ColLink>
          <ColLink href="#">Turkish Athlete Partner</ColLink>
          <ColLink href="#">Blockchain4Youth</ColLink>
          <ColLink href="#">Media Kit</ColLink>
          <ColLink href="#">Blog</ColLink>
          <ColLink href="#">Announcement Center</ColLink>
          <ColLink href="#">Proof of Reserves</ColLink>
          <ColLink href="#">Conservation Fund</ColLink>
          <ColLink href="#">Bitget Token (BGB)</ColLink>
          <ColLink href="#">Friendly Links</ColLink>
          <ColLink href="#">Site Map</ColLink>
        </FooterCol>
        <FooterCol>
          <ColTitle>product</ColTitle>
          <ColLink href="#">Spot goods</ColLink>
          <ColLink href="#">On-chain transactions</ColLink>
          <ColLink href="#">contract</ColLink>
          <ColLink href="#">leverage</ColLink>
          <ColLink href="#">Trading Robots</ColLink>
          <ColLink href="#">Financial Management</ColLink>
          <ColLink href="#">APIs</ColLink>
          <ColLink href="#">Wealth Wallet</ColLink>
          <ColLink href="#">Fiat OTC</ColLink>
          <ColLink href="#">Bitget Swap</ColLink>
        </FooterCol>
        <FooterCol>
          <ColTitle>Follow orders</ColTitle>
          <ColLink href="#">Spot copy</ColLink>
          <ColLink href="#">Contract copy</ColLink>
          <ColLink href="#">Robot copying channel</ColLink>
          <ColLink href="#">TraderPro</ColLink>
        </FooterCol>
        <FooterCol>
          <ColTitle>Serve</ColTitle>
          <ColLink href="#">Submit Feedback</ColLink>
          <ColLink href="#">Help Center</ColLink>
          <ColLink href="#">Official verification channel</ColLink>
          <ColLink href="#">Anti-fraud action page</ColLink>
          <ColLink href="#">Coin Listing Application</ColLink>
          <ColLink href="#">VIP Service</ColLink>
          <ColLink href="#">Institutional Services</ColLink>
          <ColLink href="#">Asset Custody</ColLink>
          <ColLink href="#">Download details</ColLink>
          <ColLink href="#">Western Center</ColLink>
          <ColLink href="#">Field Invitation</ColLink>
          <ColLink href="#">Rate Table</ColLink>
          <ColLink href="#">Tax Filing API</ColLink>
        </FooterCol>
        <FooterCol>
          <ColTitle>Legal and Risk Disclosure</ColTitle>
          <ColLink href="#">Law Enforcement Requests</ColLink>
          <ColLink href="#">Regulatory Requests</ColLink>
          <ColLink href="#">Compliance</ColLink>
          <ColLink href="#">Compliance license</ColLink>
          <ColLink href="#">Anti-Money Laundering Policy</ColLink>
          <ColLink href="#">Privacy Policy</ColLink>
          <ColLink href="#">User Agreement</ColLink>
          <ColLink href="#">Warning</ColLink>
          <ColLink href="#">ST Rules</ColLink>
          <ColLink href="#">Contact Service Agreement</ColLink>
        </FooterCol>
        <FooterCol>
          <ColTitle>tool</ColTitle>
          <ColLink href="#">Telegram App Center</ColLink>
          <ColLink href="#">Discord App Center</ColLink>
          <ColLink href="#">Coin Circle Navigation</ColLink>
          <ColLink href="#">Encryptedquery</ColLink>
          <ColLink href="#">Cryptocurrency Widget</ColLink>
          <ColLink href="#">Events Calendar</ColLink>
          <ColLink href="#">Cryptocurrency Price</ColLink>
          <ColLink href="#">Profit Calculator</ColLink>
          <ColLink href="#">Bitcoin ETF</ColLink>
          <ColLink href="#">Market value comparison</ColLink>
        </FooterCol>
        <FooterCol>
          <ColTitle>Buy Coins</ColTitle>
          <ColLink href="#">Concept section</ColLink>
          <ColLink href="#">Calculator</ColLink>
          <ColLink href="#">Buy ETH</ColLink>
          <ColLink href="#">Buy XRP</ColLink>
          <ColLink href="#">Buy DOGE</ColLink>
          <ColLink href="#">Buy SHIB</ColLink>
          <ColLink href="#">Buy BNB</ColLink>
          <ColLink href="#">Buy TRX</ColLink>
          <ColLink href="#">Cryptocurrency Market</ColLink>
          <ColLink href="#">Ethereum Price</ColLink>
          <ColLink href="#">Solana Price Chart</ColLink>
          <ColLink href="#">Burn Prices</ColLink>
          <ColLink href="#">BRC 20 Price</ColLink>
        </FooterCol>
      </FooterCols>
    </FooterTop>
    <Legal>
      &copy; {new Date().getFullYear()} Bitget. All rights reserved.<br />
      This site is for informational purposes only and is not investment advice.
    </Legal>
  </FooterContainer>
);

export default Footer; 