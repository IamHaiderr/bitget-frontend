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
  margin-bottom: 32px;
  text-align: center;
`;

const FeaturesRow = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

const FeatureCard = styled.div`
  min-width: 280px;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const Icon = styled.div`
  width: 56px;
  height: 56px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111315;
  font-size: 2rem;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  text-align: center;
`;

const features = [
  { icon: '🛡️', title: 'Protection Fund', desc: 'A $300M+ fund to protect user assets.' },
  { icon: '🔍', title: 'Proof of Reserves', desc: '100% verifiable reserves for all user funds.' },
  { icon: '❄️', title: 'Cold Storage', desc: 'Most assets stored in multi-sig cold wallets.' },
];

const SecurityFeatures = () => (
  <SectionContainer>
    <Section>
      <Heading>Safe and reliable</Heading>
      <FeaturesRow>
        {features.map((f) => (
          <FeatureCard key={f.title}>
            <Icon>{f.icon}</Icon>
            <Title>{f.title}</Title>
            <Description>{f.desc}</Description>
          </FeatureCard>
        ))}
      </FeaturesRow>
    </Section>
  </SectionContainer>
);

export default SecurityFeatures; 