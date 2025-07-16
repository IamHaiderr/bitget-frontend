import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 0 0 0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

const TabsRow = styled.div`
  display: flex;
  gap: 48px;
  margin-bottom: 0;
  margin-top: 32px;
  justify-content: flex-start;
  align-items: flex-end;
`;
const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  color: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.text)};
  font-weight: 700;
  font-size: 1.18rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border-bottom: 3px solid ${({ theme, active }) => (active ? theme.colors.primary : 'transparent')};
  padding: 0 0 12px 0;
  cursor: pointer;
  transition: color 0.18s, border-bottom 0.18s;
  outline: none;
`;
const SubTabs = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 32px;
  margin-top: 18px;
  font-size: 1.01rem;
`;
const SubTab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  color: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.text)};
  font-weight: ${({ active }) => (active ? 700 : 500)};
  border-bottom: 2.5px solid ${({ theme, active }) => (active ? theme.colors.primary : 'transparent')};
  padding: 0 0 8px 0;
  cursor: pointer;
  transition: color 0.18s, border-bottom 0.18s;
  outline: none;
`;

const SearchRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 8px;
  margin-top: 18px;
  position: relative;
`;
const SearchInput = styled.input`
  padding: 8px 36px 8px 16px;
  border-radius: 8px;
  border: 1.5px solid #e3e8f0;
  font-size: 1rem;
  background: #fafbfc;
  color: #232527;
  width: 260px;
  outline: none;
  transition: border 0.18s;
  &:focus {
    border: 1.5px solid #00c18c;
  }
`;
const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #bbb;
  font-size: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
  background: none;
  text-align: left;
  margin-bottom: 32px;
`;

const Th = styled.th`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  padding: 16px 12px;
  background: none;
  text-align: left;
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
  padding: 18px 12px;
  border-top: none;
  vertical-align: middle;
  text-align: left;
`;

const CoinCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CoinImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fff;
`;

const DetailsLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  margin-right: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const TradeLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
`;

const StarIcon = styled(FaRegStar)`
  color: #bbb;
  font-size: 1.1rem;
  margin-right: 8px;
  vertical-align: middle;
  cursor: pointer;
`;
const Tag = styled.span`
  background: #f3f7f6;
  color: #888;
  font-size: 0.78rem;
  font-weight: 500;
  border-radius: 6px;
  padding: 1.5px 8px;
  margin-left: 8px;
  vertical-align: middle;
  letter-spacing: 0.01em;
`;
const MiniChart = styled.div`
  width: 80px;
  height: 32px;
  background: linear-gradient(90deg, #eafaf3 0%, #e3e8f0 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: #bbb;
`;
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 32px 0 0 0;
`;
const PageBtn = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? '#00c18c' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#232527')};
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  min-width: 32px;
  &:hover {
    background: #eafaf3;
    color: #00c18c;
  }
`;

const marketData = [
  { name: 'BTC/USDT', img: '/btc.svg', price: '118,233.7', change: '+1.26%', amount: '10.15B', volume: '118,233.7', chart: '', details: '#', trade: '#', tag: 'Spot' },
  { name: 'ETH/USDT', img: '/eth.svg', price: '3,161.09', change: '+6.64%', amount: '10.94B', volume: '3,161.09', chart: '', details: '#', trade: '#', tag: 'Contract' },
  { name: 'XRP/USDT', img: '/btc.svg', price: '2.9368', change: '+4.15%', amount: '2.998B', volume: '2.9368', chart: '', details: '#', trade: '#', tag: 'Spot' },
  { name: 'BCH/USDT', img: '/btc.svg', price: '437.98', change: '+2.51%', amount: '43.22M', volume: '437.98', chart: '', details: '#', trade: '#', tag: 'Contract' },
  { name: 'LTC/USDT', img: '/btc.svg', price: '96.22', change: '+4.56%', amount: '62.42M', volume: '96.22', chart: '', details: '#', trade: '#', tag: '' },
  { name: 'ADA/USDT', img: '/btc.svg', price: '0.244', change: '+4.20%', amount: '212.09M', volume: '0.244', chart: '', details: '#', trade: '#', tag: 'Spot' },
  { name: 'DOT/USDT', img: '/btc.svg', price: '4.134', change: '+7.23%', amount: '40.17M', volume: '4.134', chart: '', details: '#', trade: '#', tag: '' },
  { name: 'DOGE/USDT', img: '/btc.svg', price: '0.1991', change: '+4.68%', amount: '642.94M', volume: '0.1991', chart: '', details: '#', trade: '#', tag: 'Spot' },
  { name: 'SOL/USDT', img: '/btc.svg', price: '164.096', change: '+1.35%', amount: '2.31B', volume: '164.096', chart: '', details: '#', trade: '#', tag: 'Contract' },
  { name: 'BNB/USDT', img: '/btc.svg', price: '691.46', change: '+2.06%', amount: '22.28M', volume: '691.46', chart: '', details: '#', trade: '#', tag: '' },
  // ... add more rows as needed for demo
];

// Ticker bar styles and data
const TickerBar = styled.div`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  height: 32px;
  display: flex;
  align-items: center;
  overflow: hidden;
  font-size: 0.98rem;
  color: #232527;
  position: relative;
  z-index: 10;
`;
const TickerContent = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: ticker-scroll 32s linear infinite;
  @keyframes ticker-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;
const TickerItem = styled.span<{ color?: string }>`
  margin-right: 32px;
  font-weight: 500;
  color: ${({ color }) => color || '#232527'};
`;

const tickerData = [
  { pair: 'BGB / USDT', price: '4.6245', change: '+1.05%', color: '#00c18c' },
  { pair: 'ETH / USDT', price: '3,180.13', change: '+6.22%', color: '#00c18c' },
  { pair: 'DOGE / USDT', price: '0.1596', change: '+4.22%', color: '#00c18c' },
  { pair: 'TAC / USDT', price: '0.0181', change: '-3.08%', color: '#f6465d' },
  { pair: 'PENGU / USDT', price: '0.03753', change: '+3.54%', color: '#00c18c' },
  { pair: 'ANI / USDT', price: '0.01137', change: '-1.08%', color: '#f6465d' },
  // ... add more as needed
];

function Ticker() {
  // Optionally, duplicate tickerData for seamless loop
  const items = [...tickerData, ...tickerData];
  return (
    <TickerBar>
      <TickerContent>
        {items.map((item, i) => (
          <TickerItem key={i} color={item.color}>
            {item.pair} <span style={{ color: '#888', margin: '0 4px' }}>/</span> {item.price} <span style={{ color: item.color, marginLeft: 4 }}>{item.change}</span>
          </TickerItem>
        ))}
      </TickerContent>
    </TickerBar>
  );
}

// Main nav bar styles and data
const MainNavBar = styled.div`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.05rem;
  z-index: 9;
`;
const MainNavContent = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 32px;
`;
const MainNavLinks = styled.ul`
  display: flex;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const MainNavLink = styled.li<{ active?: boolean }>`
  cursor: pointer;
  font-size: 1.05rem;
  color: ${({ active }) => (active ? '#00c18c' : '#232527')};
  font-weight: ${({ active }) => (active ? 700 : 500)};
  border-bottom: ${({ active }) => (active ? '2px solid #00c18c' : '2px solid transparent')};
  padding: 0 2px 2px 2px;
  transition: color 0.18s, border-bottom 0.18s;
  &:hover {
    color: #00c18c;
  }
`;
const MainNavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
const MainNavButton = styled.a`
  color: #232527;
  font-weight: 500;
  text-decoration: none;
  margin-left: 8px;
  padding: 4px 16px;
  border-radius: 4px;
  border: 1px solid #eee;
  background: #f8f8f8;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: #f0f0f0;
  }
`;
const MainNavRegister = styled(MainNavButton)`
  color: #fff;
  background: #00c18c;
  border: none;
  font-weight: 700;
  &:hover {
    background: #00bfae;
  }
`;
const MainNavSearch = styled.input`
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 1rem;
  background: #fafbfc;
  margin-left: 8px;
`;

function MainNav() {
  return (
    <MainNavBar>
      <MainNavContent>
        <MainNavLinks>
          <MainNavLink>Quickly buy coins</MainNavLink>
          <MainNavLink>Quotes</MainNavLink>
          <MainNavLink active>market</MainNavLink>
          <MainNavLink>trade</MainNavLink>
          <MainNavLink>contract</MainNavLink>
          <MainNavLink>Financial Management</MainNavLink>
          <MainNavLink>Web3</MainNavLink>
          <MainNavLink>square</MainNavLink>
          <MainNavLink>More</MainNavLink>
        </MainNavLinks>
        <MainNavActions>
          <MainNavButton href="/login">Log in</MainNavButton>
          <MainNavRegister href="/signup">register</MainNavRegister>
          <span style={{ fontSize: 20, color: '#888', marginLeft: 8, cursor: 'pointer' }}>🔍</span>
        </MainNavActions>
      </MainNavContent>
    </MainNavBar>
  );
}

const PromoBanner = styled.div`
  background: #181c1f;
  color: #fff;
  border-radius: 16px;
  padding: 36px 40px;
  margin: 48px auto 48px auto;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 16px rgba(0,0,0,0.10);
`;
const PromoTitle = styled.div`
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;
const PromoDesc = styled.div`
  font-size: 0.98rem;
  color: #c7d0d9;
  margin-bottom: 18px;
  text-align: center;
`;
const PromoIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #232527;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  font-size: 2.2rem;
`;

const Breadcrumbs = styled.div`
  color: #888;
  font-size: 0.98rem;
  margin: 0 auto 32px auto;
  max-width: 1200px;
  text-align: left;
  letter-spacing: 0.01em;
`;

export default function MarketsPage() {
  const [tab, setTab] = useState('contract');
  const [subTab, setSubTab] = useState('USDT Contract');
  const [search, setSearch] = useState('');
  const filtered = marketData.filter(row => row.name.toLowerCase().includes(search.toLowerCase()));

  const miniCharts = [
    // Uptrend
    () => (
      <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="0,28 15,20 30,24 45,12 60,16 80,4" stroke="#00c18c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="80" cy="4" r="2.5" fill="#00c18c" />
      </svg>
    ),
    // Downtrend
    () => (
      <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="0,8 15,16 30,12 45,24 60,20 80,28" stroke="#f6465d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="80" cy="28" r="2.5" fill="#f6465d" />
      </svg>
    ),
    // Flat
    () => (
      <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="0,16 20,16 40,16 60,16 80,16" stroke="#888" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="80" cy="16" r="2.5" fill="#888" />
      </svg>
    ),
  ];

  return (
    <PageContainer>
      <Navbar />
      <Ticker />
      <Content>
        <Title>Market</Title>
        <TabsRow>
          <Tab active={tab === 'spot'} onClick={() => setTab('spot')}>Spot goods</Tab>
          <Tab active={tab === 'contract'} onClick={() => setTab('contract')}>contract</Tab>
          <Tab active={tab === 'lever'} onClick={() => setTab('lever')}>lever</Tab>
          <Tab active={tab === 'onchain'} onClick={() => setTab('onchain')}>On-chain transactions</Tab>
        </TabsRow>
        <SubTabs>
          <SubTab active={subTab === 'USDT Contract'} onClick={() => setSubTab('USDT Contract')}>USDT Contract</SubTab>
          <SubTab active={subTab === 'Currency-leased contracts'} onClick={() => setSubTab('Currency-leased contracts')}>Currency-leased contracts</SubTab>
          <SubTab active={subTab === 'USDC Contracts'} onClick={() => setSubTab('USDC Contracts')}>USDC Contracts</SubTab>
        </SubTabs>
        <SearchRow>
          <SearchInput placeholder="search" value={search} onChange={e => setSearch(e.target.value)} />
          <SearchIcon />
        </SearchRow>
        <Table>
          <thead>
            <tr>
              <Th></Th>
              <Th>Trading Pairs</Th>
              <Th>Latest Price</Th>
              <Th>Rise and fall</Th>
              <Th>Transaction amount</Th>
              <Th>24H ups and downs</Th>
              <Th>operate</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <Tr key={row.name + i}>
                <Td><StarIcon /></Td>
                <Td>
                  <CoinCell>
                    <CoinImg src={row.img} alt={row.name} />
                    {row.name}
                  </CoinCell>
                </Td>
                <Td>{row.price}</Td>
                <Td>{row.change}</Td>
                <Td>{row.amount}</Td>
                <Td>{miniCharts[i % miniCharts.length]()}</Td>
                <Td>
                  <DetailsLink href={row.details}>Details</DetailsLink>
                  <TradeLink href={row.trade}>trade</TradeLink>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          <PageBtn active>1</PageBtn>
          <PageBtn>2</PageBtn>
          <PageBtn>3</PageBtn>
          <PageBtn>4</PageBtn>
          <PageBtn>5</PageBtn>
          <span>...</span>
          <PageBtn>17</PageBtn>
          <PageBtn>{'>'}</PageBtn>
        </Pagination>
        <PromoBanner>
          <PromoTitle>成为 Bitget 代理商，变身高净值收入</PromoTitle>
          <PromoDesc>全球招募，打造最强收入计划</PromoDesc>
          <PromoIcon>●●●</PromoIcon>
        </PromoBanner>
        <Breadcrumbs>Bitget / Quotes / <span style={{ color: '#232527' }}>market</span></Breadcrumbs>
      </Content>
      <Footer />
    </PageContainer>
  );
} 