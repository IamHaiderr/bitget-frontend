import { ThemeProvider, createGlobalStyle } from 'styled-components';
import type { AppProps } from 'next/app';

const GlobalStyle = createGlobalStyle`
  html, body {
    background: #111315;
    color: #fff;
    margin: 0;
    font-family: 'Inter', 'Roboto', 'Arial', sans-serif;
    overflow-x: hidden;
    /* allow vertical scrolling */
    width: 100vw;
    min-height: 100vh;
  }
`;

const theme = {
  colors: {
    primary: '#00E1A2',
    background: '#111315',
    card: '#181A1B',
    text: '#fff',
    accent: '#00E1A2',
    border: '#232527',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
} 