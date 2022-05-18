import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import globalStyle from 'styles/globalStyle';
import ThemeProvider from 'context/ThemeProvider';
import Layout from 'components/common/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Global styles={globalStyle} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
