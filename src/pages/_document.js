import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  
  return (
    <Html lang="it">
      <Head>
        {/* Favicon */} 
        <link rel="icon" href="/icon.ico" />

        {/* Charset e viewport */}
        <meta charSet="utf-8" />

        {/* Meta Description di base (può essere sovrascritta per pagina) */}
        <meta
          name="description"
          content="Hai libri usati da smaltire? RitiroLibri.it li ritira gratuitamente a casa tua. Contattaci ora per liberare spazio velocemente!"
        />

        {/* Meta Keywords (anche se “deprecated” per i grandi motori, può essere usato per SEO secondario) */}
        <meta
          name="keywords"
          content="ritiro libri usati, ritiro libri gratuito, libri usati Roma, sgombero libri, smaltimento libri, come liberarsi di libri vecchi, donare libri usati"
        />

        {/* Open Graph di base */}
        <meta property="og:title"       content="RitiroLibri.it | Ritiro Gratis Libri Usati a Domicilio" />
        <meta property="og:description" content="Hai libri usati da smaltire? RitiroLibri.it li ritira gratuitamente a casa tua." />
        <meta property="og:image"       content={"/logo_ritirolibriit.png"} />
        <meta property="og:url"         content={siteUrl || "https://www.ritirolibri.it/"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}