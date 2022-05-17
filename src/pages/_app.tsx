import type { AppProps } from 'next/app';
import { ThemeProvider, Global } from '@emotion/react';
import globalStyle from 'styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
