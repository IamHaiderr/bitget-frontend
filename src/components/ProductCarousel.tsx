import styled from 'styled-components';

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  width: 100%;
`;

const CarouselContainer = styled.section`
  display: flex;
  gap: 24px;
  background: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 32px 0;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
    padding: 16px 0;
  }
`;

const Card = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  min-width: 0;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
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
`;

const ProductCarousel = () => (
  <SectionContainer>
    <CarouselContainer>
      <Card>
        <Icon>🔒</Icon>
        <Title>Zero-Fee Spot Trading</Title>
        <Description>Trade crypto with zero fees and deep liquidity.</Description>
      </Card>
      <Card>
        <Icon>⚡</Icon>
        <Title>Futures with High Leverage</Title>
        <Description>Access perpetual contracts with up to 125x leverage.</Description>
      </Card>
      <Card>
        <Icon>🤖</Icon>
        <Title>AI-Powered Trading Bots</Title>
        <Description>Automate your strategies with advanced trading bots.</Description>
      </Card>
    </CarouselContainer>
  </SectionContainer>
);

export default ProductCarousel; 