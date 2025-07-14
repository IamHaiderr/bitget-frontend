import styled from 'styled-components';
import { useState } from 'react';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tabs = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  margin-top: 32px;
  justify-content: center;
`;

const Tab = styled.button<{ active: boolean }>`
  background: ${({ active, theme }) => (active ? theme.colors.card : 'transparent')};
  border: none;
  color: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.text)};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 20px;
  padding: 10px 28px;
  box-shadow: ${({ active }) => (active ? '0 2px 8px rgba(0,0,0,0.08)' : 'none')};
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Table = styled.table`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0 8px;
  background: none;
  text-align: center;
`;

const Th = styled.th`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  padding: 16px 12px;
  background: none;
  text-align: center;
`;

const Tr = styled.tr`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }
`;

const Td = styled.td`
  color: ${({ theme }) => theme.colors.text};
  padding: 22px 12px 22px 12px;
  border-top: none;
  vertical-align: middle;
  text-align: center;
`;

const CoinCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
`;

const CoinImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fff;
`;

const TradeButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #111315;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
  margin: 0 auto;
  display: block;
  &:hover {
    background: #00c18c;
  }
`;

const coinsData = {
  Popular: [
    { name: 'BTC/USDT', img: '/btc.svg', price: '62,000', change: '+1.7%', volume: '2.1B' },
    { name: 'ETH/USDT', img: '/eth.svg', price: '3,200', change: '-0.5%', volume: '1.1B' },
    { name: 'SOL/USDT', img: '/sol.svg', price: '145', change: '+2.2%', volume: '800M' },
  ],
  Gainers: [
    { name: 'DOGE/USDT', img: '/doge.svg', price: '0.18', change: '+10.2%', volume: '500M' },
    { name: 'PEPE/USDT', img: '/pepe.svg', price: '0.000012', change: '+8.5%', volume: '300M' },
    { name: 'SHIB/USDT', img: '/shib.svg', price: '0.000025', change: '+7.1%', volume: '250M' },
  ],
  'Newly listed': [
    { name: 'NEW1/USDT', img: '/btc.svg', price: '1.20', change: '+0.5%', volume: '10M' },
    { name: 'NEW2/USDT', img: '/eth.svg', price: '0.85', change: '-1.2%', volume: '8M' },
    { name: 'NEW3/USDT', img: '/sol.svg', price: '2.50', change: '+3.8%', volume: '12M' },
  ],
};

const MarketTable = () => {
  const [activeTab, setActiveTab] = useState<'Popular' | 'Gainers' | 'Newly listed'>('Popular');
  const coins = coinsData[activeTab];

  return (
    <Section>
      <Tabs>
        {(['Popular', 'Gainers', 'Newly listed'] as const).map((tab) => (
          <Tab key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
            {tab}
          </Tab>
        ))}
      </Tabs>
      <Table>
        <thead>
          <tr>
            <Th>Coin</Th>
            <Th>Price</Th>
            <Th>Change</Th>
            <Th>24h Volume</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <Tr key={coin.name}>
              <Td>
                <CoinCell>
                  <CoinImg src={coin.img} alt={coin.name} />
                  {coin.name}
                </CoinCell>
              </Td>
              <Td>{coin.price}</Td>
              <Td>{coin.change}</Td>
              <Td>{coin.volume}</Td>
              <Td><TradeButton>Trade</TradeButton></Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Section>
  );
};

export default MarketTable; 