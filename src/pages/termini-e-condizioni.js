import Head from 'next/head'
import Link from 'next/link';

export default function TerminiECondizioni() {
  return (
      <div className="privacy-container">
        <Head>
          <title>RitiroLibri.it | Termini e Condizioni</title>
          <meta
            name="description"
            content="Termini e condizioni d’uso di RitiroLibri.it"
          />
        </Head>

        <section className="content-section cookie-policy-section">
          <h1 className="section-title">Termini e Condizioni</h1>
          <p className="section-subtitle">
            <strong>Ultimo aggiornamento:</strong> 8 maggio 2025
          </p>

          <h2 className="subtitle">1. Oggetto del servizio</h2>
          <p className="policy-content">
            RitiroLibri.it offre un servizio gratuito di ritiro a domicilio di libri usati. 
            L’utente invia una richiesta tramite form, email o WhatsApp e concorda data, ora e altri dettagli utili per il ritiro.
          </p>

          <h2 className="subtitle">2. Modalità di esecuzione</h2>
          <ul className="list policy-content">
            <li>Il ritiro è sempre gratuito, senza costi per l’utente.</li>
            <li>La nostra direzione si riserva il diritto di decidere quali libri accettare.</li>
            <li>Il tempo <strong>medio</strong> di valutazione è di 24 ore.</li>
          </ul>

          <h2 className="subtitle">3. Obblighi dell’utente</h2>
          <ul className="list policy-content">
            <li>Fornire dati corretti e completi (nome, indirizzo, contatti).</li>
            <li>Preparare i libri in scatole o imballaggi come concordato.</li>
          </ul>

          <h2 className="subtitle">4. Limitazioni di responsabilità</h2>
          <p className="policy-content">
            RitiroLibri S.r.l. non è responsabile per danni diversi dai libri consegnati 
            né per ritardi dovuti a forza maggiore.
          </p>

          <h2 className="subtitle">5. Privacy e trattamento dati</h2>
          <p className="policy-content">
            Il trattamento dei tuoi dati è disciplinato dalla nostra <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>

          <h2 className="subtitle">6. Diritto di recesso</h2>
          <p className="policy-content">
            Non trova applicazione il diritto di recesso del Codice del Consumo trattandosi 
            di servizio gratuito.
          </p>

          <h2 className="subtitle">7. Legge applicabile</h2>
          <p className="policy-content">
            Il contratto è regolato dalla legge italiana. 
            Per controversie è competente il Foro di Roma.
          </p>

          <hr className="divider" />

          <p className="small-text">
            Consulta anche le nostre <Link href="/cookie-policy">Cookie Policy</Link> e <Link href="/note-legali">Note Legali</Link>.
          </p>
        </section>
      </div>
  )
}
