import Head from 'next/head'

const PrivacyPolicy = () => {
  return (
    <div className='privacy-container'>
      <Head>
        <title>RitiroLibri.it | Privacy Policy</title>
        <meta
          name="description"
          content="Scopri come RitiroLibri.it raccoglie, utilizza e protegge i tuoi dati personali."
        />
      </Head>

      <section className="content-section cookie-policy-section">
        <h1 className="section-title">Privacy Policy di RitiroLibri.it</h1>
        <p className="section-subtitle">
          <strong>Ultimo aggiornamento:</strong> 8 maggio 2025<br/>
          <strong>Indirizzo sito:</strong> https://ritirolibri.it
        </p>

        <h2 className="subtitle">1. Titolare del Trattamento</h2>
        <p>
          Il titolare del trattamento è RitiroLibri S.r.l., con sede legale in Via dei Librai 10, 00100 Roma (RM),
          P.IVA 12345678901.
        </p>

        <h2 className="subtitle">2. Dati raccolti</h2>
        <ul className="list">
          <li><strong>Dati forniti volontariamente</strong>: nome, cognome, email, telefono, messaggi, file allegati dal form di contatto.</li>
          <li><strong>Dati di navigazione</strong>: cookie, log del server, indirizzo IP, tipo di browser, pagine visitate.</li>
        </ul>

        <h2 className="subtitle">3. Finalità del trattamento</h2>
        <ul className="list">
          <li>Gestione richieste di ritiro e comunicazioni con l’utente;</li>
          <li>Invio di newsletter e aggiornamenti (se l’utente acconsente);</li>
          <li>Analisi statistica dell’uso del sito (Google Analytics);</li>
          <li>Gestione di eventuali obblighi normativi e fiscali.</li>
        </ul>

        <h2 className="subtitle">4. Base giuridica</h2>
        <ul className="list">
          <li>Esecuzione di un contratto o di misure precontrattuali (art. 6, 1 b GDPR);</li>
          <li>Consenso espresso per finalità di marketing (art. 6, 1 a GDPR);</li>
          <li>Legittimo interesse (art. 6, 1 f GDPR) per analisi statistiche e sicurezza del sito.</li>
        </ul>

        <h2 className="subtitle">5. Conservazione dei dati</h2>
        <p>
          I dati verranno conservati per il tempo strettamente necessario alle finalità sopra descritte,
          comunque non oltre 2 anni dal loro conferimento, salvo obblighi di legge o necessità di difesa in sede giudiziaria.
        </p>

        <h2 className="subtitle">6. Diritti dell’interessato</h2>
        <p>
          In qualsiasi momento l’utente può esercitare i diritti di accesso, rettifica, cancellazione,
          limitazione, portabilità e opposizione, inviando richiesta a{' '}
          <a href="mailto:privacy@ritirolibri.it">privacy@ritirolibri.it</a>.
        </p>

        <h2 className="subtitle">7. Comunicazione a terzi</h2>
        <p>
          I dati potranno essere comunicati a fornitori di servizi (hosting, posta, analytics), 
          alle autorità competenti se previsto dalla legge, e non saranno mai venduti a terzi.
        </p>

        <h2 className="subtitle">8. Misure di sicurezza</h2>
        <p>
          Applichiamo misure tecniche e organizzative per garantire la riservatezza, integrità e disponibilità
          dei dati personali (cifratura, backup, accessi protetti).
        </p>

        <hr className="divider" />

        <p className="small-text">
          Per ulteriori dettagli, consulta anche la nostra <a href="/cookie-policy">Cookie Policy</a>.
        </p>
      </section>
    </div>
  )
}

export default PrivacyPolicy;