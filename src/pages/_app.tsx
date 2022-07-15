import { useState } from 'react';
import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import globalStyle from 'styles/globalStyle';
import ThemeProvider from 'context/ThemeProvider';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from 'components/common/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Global styles={globalStyle} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
