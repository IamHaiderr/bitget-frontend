import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
  padding: 48px 32px;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 32px;
`;

const ChartImage = styled.div`
  width: 800px;
  height: 400px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 24px;
`;

const QRRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 40px;
`;

const QRCode = styled.div`
  width: 80px;
  height: 80px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #232527;
  font-size: 1.2rem;
  font-weight: bold;
`;

const AppIcons = styled.div`
  display: flex;
  gap: 16px;
`;

const AppIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #232527;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
`;

const TradingChartSection = () => (
  <Section>
    <Heading>Trade anytime, anywhere!</Heading>
    <ChartImage>
      <video
        src="/chart.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '16px' }}
      />
    </ChartImage>
    <QRRow>
      <QRCode>
        <Image src="/qr.png" alt="QR code" width={64} height={64} />
      </QRCode>
      <AppIcons>
        <AppIcon></AppIcon>
        <AppIcon>▶</AppIcon>
      </AppIcons>
    </QRRow>
  </Section>
);

export default TradingChartSection; 