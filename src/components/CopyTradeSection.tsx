import styled from 'styled-components';

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  width: 100%;
`;

const Section = styled.section`
  padding: 48px 0;
  background: ${({ theme }) => theme.colors.background};
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 8px;
  text-align: center;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  margin-bottom: 32px;
  text-align: center;
`;

const TradersRow = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
`;

const TraderCard = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  min-width: 0;
`;

const ProfileImage = styled.div`
  width: 56px;
  height: 56px;
  background: #232527;
  border-radius: 50%;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  margin-bottom: 8px;
`;

const ROI = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  margin-bottom: 16px;
`;

const CopyButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #111315;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
`;

const traders = [
  { name: 'TraderA', roi: '+1978.4%' },
  { name: 'TraderB', roi: '+1013.85%' },
  { name: 'TraderC', roi: '+884.85%' },
  { name: 'TraderD', roi: '+797.4%' },
];

const CopyTradeSection = () => (
  <SectionContainer>
    <Section>
      <Heading>Trade smart, just copy trade!</Heading>
      <Description>Crypto made accessible. Auto-copy top traders and earn like a pro.</Description>
      <TradersRow>
        {traders.map((trader) => (
          <TraderCard key={trader.name}>
            <ProfileImage>👤</ProfileImage>
            <Name>{trader.name}</Name>
            <ROI>{trader.roi}</ROI>
            <CopyButton>Copy</CopyButton>
          </TraderCard>
        ))}
      </TradersRow>
    </Section>
  </SectionContainer>
);

export default CopyTradeSection; 