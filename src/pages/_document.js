import Document, { Html, Head, Main, NextScript } from 'next/document';

// import isProd from '@services/f-is-prod';

// import GoogleAnalytics from '@sections/google-analytics';
// import Hotjar from '@sections/hotjar';


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    
    return {
      ...initialProps,
      // isProd: isProd || false,
      // hotjarId: process.env.HOTJAR_ID || null,
      // hotjarSv: process.env.HOTJAR_SV || null,
      // gaId: process.env.GA_ID || null
    }
  }

  render() { 
    const { 
      isProd,
      // gaId,
      // hotjarId,
      // hotjarSv,
      // adsenseId
    } = this.props;

    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <meta name='application-name' content='Query Chart' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Query Chart' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name="theme-color" content="#ffffff" />

          {/* favicons */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

          {/* styles */}
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
         
          {/* script */}
          

          {/* { 
            ( isProd && gaId) 
            && <GoogleAnalytics id={ gaId } /> 
          }

          { 
            ( isProd && hotjarId && hotjarSv) 
            && <Hotjar id={ hotjarId } sv={ hotjarSv } /> 
          } */}
        </Head>
        
        <body id="top">
          <Main />

          <NextScript />
          {/* Java Script */}
        </body>
      </Html>
    )
  }
}

export default MyDocument;