import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductCarousel from '../components/ProductCarousel';
import MarketTable from '../components/MarketTable';
import MobileAppPromo from '../components/MobileAppPromo';
import CopyTradeSection from '../components/CopyTradeSection';
import SecurityFeatures from '../components/SecurityFeatures';
import TradingChartSection from '../components/TradingChartSection';
import FAQAccordion from '../components/FAQAccordion';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductCarousel />
      <MarketTable />
      <MobileAppPromo />
      <CopyTradeSection />
      <SecurityFeatures />
      <TradingChartSection />
      <FAQAccordion />
      <Footer />
    </>
  );
} 