import { ThemeProvider } from "styled-components";
import type { AppProps } from 'next/app'

// global styles
import GlobalStyles from '../styles/global'


const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp
