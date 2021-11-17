import Document, { Html, Head, Main, NextScript } from 'next/document';

class FawkesDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="UTF-8" />
          <meta name="description" content="Fawkes is a utility app built for developers and other technical persons who appreciates having a swiss army knife at their disposal at all times." />
          <meta name="author" content="Mads Obel" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@madsobel" />
          <meta property="og:description" content="Fawkes is a utility app built for developers and other technical persons who appreciates having a swiss army knife at their disposal at all times." />
          <meta property="og:image" content="https://fawkesapp.com/android-chrome-512x512.png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&family=Ubuntu:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <script async data-api="/_hive" src="/bee.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default FawkesDocument;
