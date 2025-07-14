import styled from 'styled-components';

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  width: 100%;
`;

const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 0 32px 0;
  background: ${({ theme }) => theme.colors.background};
`;

const Left = styled.div`
  max-width: 600px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`;

const Subheading = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 32px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 24px;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  flex: 1;
  outline: none;
`;

const SearchButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #111315;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 8px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

const SocialIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
`;

const BannerImage = styled.div`
  width: 420px;
  height: 220px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroSection = () => (
  <SectionContainer>
    <HeroContainer>
      <Left>
        <Heading>2025 KCGI: Glory to LALIGA!</Heading>
        <Subheading>Build a crypto portfolio, join the world’s top traders, and win big!</Subheading>
        <SearchBar>
          <Input placeholder="Search for coins, products, or help..." />
          <SearchButton>Search</SearchButton>
        </SearchBar>
        <SocialIcons>
          <SocialIcon>F</SocialIcon>
          <SocialIcon>T</SocialIcon>
          <SocialIcon>Y</SocialIcon>
          <SocialIcon>I</SocialIcon>
        </SocialIcons>
      </Left>
      <BannerImage>
        <video
          src="/kcgi-banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
        />
      </BannerImage>
    </HeroContainer>
  </SectionContainer>
);

export default HeroSection; 