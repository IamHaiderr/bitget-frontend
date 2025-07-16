import styled from 'styled-components';
import { useState } from 'react';

const PromoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 96px;
  padding: 48px 32px;
  background: ${({ theme }) => theme.colors.background};
  max-width: 1200px;
  margin: 0 auto;
  min-height: 700px;
`;

const PhoneMockup = styled.div`
  width: 320px;
  aspect-ratio: 10 / 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111315;
  min-height: 640px;
  max-height: 640px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #111315;
  border: none;
  border-radius: 4px;
  padding: 12px 32px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 48px 0 48px 0;
`;

const FeatureBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FeatureTitle = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
`;

const FeatureDesc = styled.div`
  color: #888;
  font-size: 1.25rem;
`;

const BigHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 32px;
  line-height: 1.1;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 400px;
`;

const TabsRow = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
  margin-bottom: 32px;
  justify-content: center;
  margin-top: 98px;
`;

const TabButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  color: ${({ active }) => (active ? '#fff' : '#44454A')};
  font-size: 3rem;
  font-weight: 400;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? '5px solid #fff' : 'none')};
  padding: 0 0 8px 0;
  outline: none;
  transition: color 0.2s;
`;

const MobileAppPromo = () => {
  const [tab, setTab] = useState<'exchange' | 'web3'>('exchange');
  return (
    <>
      <TabsRow>
        <TabButton active={tab === 'exchange'} onClick={() => setTab('exchange')}>Exchange</TabButton>
        <TabButton active={tab === 'web3'} onClick={() => setTab('web3')}>Web3</TabButton>
      </TabsRow>
      <PromoSection>
        <PhoneMockup>
          <video
            src={tab === 'exchange' ? '/phonemockup.mp4' : '/web3phone.mp4'}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#111315', display: 'block' }}
          />
        </PhoneMockup>
        {tab === 'exchange' ? (
          <RightContent>
            <BigHeading>Start your crypto<br />journey here</BigHeading>
            <Features>
              <FeatureBlock>
                <FeatureTitle>Fiat</FeatureTitle>
                <FeatureDesc>Over 140 fiat currencies supported</FeatureDesc>
              </FeatureBlock>
              <FeatureBlock>
                <FeatureTitle>Trade</FeatureTitle>
                <FeatureDesc>Futures, spot, margin, bot...</FeatureDesc>
              </FeatureBlock>
              <FeatureBlock>
                <FeatureTitle>Earn</FeatureTitle>
                <FeatureDesc>Boost your crypto profits safely and easily!</FeatureDesc>
              </FeatureBlock>
            </Features>
            <Button style={{ alignSelf: 'flex-start', marginTop: '24px', fontSize: '1.3rem', padding: '18px 36px', borderRadius: '14px' }}>
              Sign up now
            </Button>
          </RightContent>
        ) : (
          <RightContent>
            <BigHeading>Start your Web3<br />journey</BigHeading>
            <Features>
              <FeatureBlock>
                <FeatureTitle>Bitget Wallet</FeatureTitle>
                <FeatureDesc>Discover a safer, decentralized experience with a Web3 wallet.</FeatureDesc>
              </FeatureBlock>
              <FeatureBlock>
                <FeatureTitle>Bitget Swap</FeatureTitle>
                <FeatureDesc>Cross-chain swap with flexible price limits.</FeatureDesc>
              </FeatureBlock>
              <FeatureBlock>
                <FeatureTitle>Bitget NFT</FeatureTitle>
                <FeatureDesc>Place batch orders and buy NFTs with any coin.</FeatureDesc>
              </FeatureBlock>
              <FeatureBlock>
                <FeatureTitle>2000+ DApps</FeatureTitle>
                <FeatureDesc>A massive collection of popular DApps.</FeatureDesc>
              </FeatureBlock>
            </Features>
            <Button style={{ alignSelf: 'flex-start', marginTop: '24px', fontSize: '1.3rem', padding: '18px 36px', borderRadius: '14px' }}>
              Start now
            </Button>
          </RightContent>
        )}
      </PromoSection>
    </>
  );
};

export default MobileAppPromo; 