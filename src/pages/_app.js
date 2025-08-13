import '@/styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '@/components/layout';

function MyApp({ Component, pageProps }) {
  const ga4Id = 
    process.env.NEXT_PUBLIC_GA4_ID;
  const metaPixelId = 
    process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {/* ============= Google Analytics 4 ============= */}
      {ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4Id}', { page_path: window.location.pathname });
              `,
            }}
          />
        </>
      )}

      {/* ================= Meta Pixel ================= */}
      {metaPixelId && (
        <>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(
                    window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js'
                  );
                fbq('init', ${JSON.stringify(metaPixelId)});
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              alt='facebook'
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}

      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/icon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo_ritirolibriit_32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo_ritirolibriit_16x16.png" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
