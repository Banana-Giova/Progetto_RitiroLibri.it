import Head from 'next/head'
import Layout from '@/components/layout'

const CookiePolicy = () => {
  return (
    <Layout>
      <Head>
        <title>RitiroLibri.it | Cookie Policy</title>
        <meta
          name="description"
          content="Scopri come RitiroLibri.it utilizza i cookie e come gestire il tuo consenso."
        />
      </Head>

      <section className="content-section cookie-policy-section">
        <h1 className="section-title">Cookie Policy di RitiroLibri.it</h1>
        <p className="section-subtitle">
          <strong>Ultimo aggiornamento:</strong> 8 maggio 2025<br/>
          <strong>Indirizzo sito:</strong> https://ritirolibri.it
        </p>

        <h2 className="subtitle">1. Cosa sono i cookie?</h2>
        <p>
          I cookie sono piccoli file di testo che i siti web inviano e memorizzano sul dispositivo
          dell’utente quando li visita. Possono contenere informazioni sul tuo comportamento di
          navigazione e migliorare l’esperienza utente.
        </p>

        <h2 className="subtitle">2. Tipologie di cookie utilizzati</h2>
        <ul className="list">
          <li><strong>Cookie tecnici (necessari)</strong>: consentono il corretto funzionamento del sito (es. sessione di login, carrello).</li>
          <li><strong>Cookie di funzionalità</strong>: memorizzano preferenze (lingua, layout) per servizi personalizzati.</li>
          <li><strong>Cookie di prestazione/analitici</strong>: raccolgono informazioni anonime sul traffico (es. Google Analytics).</li>
          <li><strong>Cookie di profilazione e pubblicità</strong>: usati da terze parti per messaggi pubblicitari mirati.</li>
        </ul>

        <h2 className="subtitle">3. Finalità del trattamento</h2>
        <ul className="list">
          <li>Garantire la sicurezza e funzionalità del sito</li>
          <li>Analizzare l’utilizzo del sito per migliorarne contenuti e usabilità</li>
          <li>Personalizzare offerte commerciali e pubblicità</li>
        </ul>

        <h2 className="subtitle">4. Durata dei cookie</h2>
        <table className="cookie-table">
          <thead>
            <tr>
              <th>Tipo di cookie</th>
              <th>Durata</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tecnici</td>
              <td>Fino alla chiusura del browser</td>
            </tr>
            <tr>
              <td>Funzionalità</td>
              <td>6–12 mesi</td>
            </tr>
            <tr>
              <td>Analitici</td>
              <td>1–25 mesi (dipende dal servizio)</td>
            </tr>
            <tr>
              <td>Profilazione/pubblicità</td>
              <td>6–24 mesi</td>
            </tr>
          </tbody>
        </table>

        <h2 className="subtitle">5. Gestione del consenso e disattivazione</h2>
        <p>
          Puoi modificare in qualsiasi momento le tue preferenze sui cookie:
        </p>
        <ul className="list">
          <li><strong>Banner cookie</strong>: clicca su “Impostazioni cookie” in fondo alla pagina.</li>
          <li><strong>Browser</strong>: segui le istruzioni per disabilitare i cookie (Chrome, Firefox, Edge, Safari).</li>
          <li><strong>Opt-out servizi terzi</strong>:
            <ul className="list-nested">
              <li>Google Analytics → <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">ga-optout</a></li>
              <li>Facebook Pixel → <a href="https://www.facebook.com/help/568137493302217" target="_blank">fb-optout</a></li>
            </ul>
          </li>
        </ul>
        <p className="note">
          La disabilitazione di cookie tecnici potrebbe compromettere la navigazione o alcune funzionalità.
        </p>

        <h2 className="subtitle">6. Contatti</h2>
        <p>
          Per domande sulla presente Cookie Policy, scrivi a{' '}
          <a href="mailto:privacy@ritirolibri.it">privacy@ritirolibri.it</a>
        </p>

        <hr className="divider" />

        <p className="small-text">
          Questa policy si integra con la <a href="/privacy-policy">Privacy Policy</a> di RitiroLibri.it.
          L’uso continuato del sito dopo aver modificato le impostazioni o chiuso il banner implica
          accettazione dei cookie.
        </p>
      </section>
    </Layout>
  )
}

export default CookiePolicy;