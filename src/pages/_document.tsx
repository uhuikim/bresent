import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="빵을 사랑하는 사람들을 위한 사이트입니다."
          />
          <meta name="keywords" content="빵" />
          <meta name="author" content="Uhui Kim" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="og:site_name" content="Bresent" />
          <meta name="og:title" content="Bresent" />
          <meta name="og:type" content="website" />
          <meta
            name="og:description"
            content="빵을 사랑하는 사람들을 위한 사이트입니다."
          />
          <meta name="og:url" content="https://bresent.co.kr/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
