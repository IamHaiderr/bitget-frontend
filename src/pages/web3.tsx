import Web3WalletCard from '../components/Web3WalletCard';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #111315;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
`;

export default function Web3Page() {
  return (
    <PageContainer>
      <Web3WalletCard />
    </PageContainer>
  );
} 