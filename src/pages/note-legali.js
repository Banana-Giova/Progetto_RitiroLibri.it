import Head from 'next/head'
import Link from 'next/link';

export default function NoteLegali() {
  return (
      <div className="privacy-container">
        <Head>
          <title>RitiroLibri.it | Note Legali</title>
          <meta
            name="description"
            content="Note legali e informazioni societarie di RitiroLibri.it"
          />
        </Head>

        <section className="content-section cookie-policy-section">
          <h1 className="section-title">Note Legali</h1>
          <p className="section-subtitle">
            <strong>RitiroLibri S.r.l.</strong>
          </p>

          <hr className="divider" />

          <h2 className="subtitle">1. Proprietà dei contenuti</h2>
          <p className="policy-content">
            Tutti i testi, i marchi e i loghi presenti su questo sito sono di proprietà di RitiroLibri S.r.l.
            È vietata qualsiasi riproduzione anche parziale, fuori dai casi previsti dalla legge, senza il nostro esplicito consenso.
          </p>

          <h2 className="subtitle">2. Collegamenti a siti esterni</h2>
          <p className="policy-content">
            Questo sito può contenere link a risorse esterne. RitiroLibri.it non è responsabile dei contenuti e delle politiche di tali siti.
          </p>

          <h2 className="subtitle">3. Proprietà intellettuale</h2>
          <ul className="list policy-content">
            <li>Tutti i marchi, i loghi e i segni distintivi sono registrati e protetti.</li>
            <li>Il loro utilizzo è consentito solo previo accordo scritto con RitiroLibri S.r.l.</li>
          </ul>

          <h2 className="subtitle">4. Legge applicabile</h2>
          <p className="policy-content">
            Le presenti note legali sono regolate dalla legge italiana. Per ogni controversia è competente in via esclusiva il Foro di Roma.
          </p>

          <hr className="divider" />

          <p className="small-text">
            Per dettagli sulla gestione dei tuoi dati personali, consulta la nostra <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        </section>
      </div>
  )
}
