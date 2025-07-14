import styled from 'styled-components';
import { useState } from 'react';

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

const FAQList = styled.div`
  width: 100%;
  max-width: 800px;
`;

const FAQItem = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const Question = styled.div<{ open: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 1.1rem;
  padding: 20px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${({ open, theme }) => open ? `1px solid ${theme.colors.border}` : 'none'};
`;

const Answer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  padding: 20px 24px;
  display: block;
`;

const faqs = [
  { q: 'What is cryptocurrency exchange?', a: 'A platform to buy, sell, and trade cryptocurrencies.' },
  { q: 'What products does Bitget offer?', a: 'Spot, futures, copy trading, staking, and more.' },
  { q: 'How do you track cryptocurrency prices?', a: 'With real-time market data and charts.' },
  { q: 'How to make cryptocurrencies on Bitget?', a: 'Trade, stake, or copy top traders to earn.' },
  { q: 'How to earn with crypto at Bitget?', a: 'Use copy trading, staking, and promotions.' },
  { q: 'Why choose Bitget as your cryptocurrency exchange?', a: 'Security, low fees, and innovative features.' },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <Section>
      <Heading>Bitget FAQ</Heading>
      <FAQList>
        {faqs.map((faq, i) => (
          <FAQItem key={faq.q}>
            <Question open={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              {faq.q}
              <span>{openIndex === i ? '-' : '+'}</span>
            </Question>
            {openIndex === i && <Answer>{faq.a}</Answer>}
          </FAQItem>
        ))}
      </FAQList>
    </Section>
  );
};

export default FAQAccordion; 