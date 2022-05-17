import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import globalStyle from 'styles/globalStyle';
import ThemeProvider from 'context/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
