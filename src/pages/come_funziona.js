import Head from 'next/head';
import { Clock, Camera, Truck, MessageCircleQuestion, MailCheck, ArrowBigDown } from 'lucide-react';
import Button from '@/components/ui/button';
import { Spacer } from '@heroui/spacer';

const ComeFunziona = () => {
  const faq = [
    {
      q: 'Cosa succede ai libri che non acquistate?',
      a: 'Li doniamo a scuole, biblioteche o associazioni benefiche; altrimenti ne curiamo il riciclo.',
    },
    {
      q: 'Quanti libri posso consegnarvi?',
      a: 'Non ci sono limiti: accettiamo qualsiasi quantità, senza restrizioni.',
    },
    {
      q: 'E se ho più di 500 libri?',
      a: 'Organizziamo ritiri personalizzati con più corrieri. Contattaci per una soluzione su misura!',
    },
    {
      q: 'Posso vendere i miei testi scolastici usati?',
      a: 'No, non trattiamo libri scolastici.',
    },
    {
      q: 'Come verrò pagato?',
      a: 'Bonifico, PayPal, Postepay o contanti al momento del ritiro—scegli tu il metodo.',
    },
    {
      q: 'Acquistate libri in lingue diverse dall’italiano?',
      a: 'Sì, accettiamo libri in diverse lingue.',
    },
    {
      q: 'Ci sono costi per il ritiro?',
      a: 'No, il ritiro è sempre gratuito, indipendentemente dalla quantità.',
    },
  ];

  return (
    <div className='how-it-works'>
      <Head>
        <title>RitiroLibri.it | Come Funziona?</title>
        <meta name="description" content="Un processo facile, veloce e senza costi!" />
      </Head>

      <section className="hero-section py-16 md:py-24">
        <div className="hero-container">
          <h1 className="main-heading">
            <span className="highlight-text">Come 🚀 Funziona?</span>

            <p className="spacer-special">&nbsp;</p>

            <p className="subtitle">Un processo facile, veloce e senza costi!</p>
          </h1>

          <div className="why-choose mt-12 grid gap-6 sm:grid-cols-3">
            {/* Passo 1 */}
            <div className="feature-card">
              <div className="icon-wrapper bg-gradient-to-br from-green-500 to-emerald-600">
                <Camera className="feature-icon text-white" />
              </div>
              <h3 className="feature-title">1) Fotografa i tuoi libri</h3>
              <p className="feature-text">Scatta una foto chiara del dorso dei tuoi libri.</p>
            </div>

            {/* Passo 2 */}
            <div className="feature-card">
              <div className="icon-wrapper bg-gradient-to-br from-blue-500 to-cyan-600">
                <Clock className="feature-icon text-white" />
              </div>
              <h3 className="feature-title">2) Valutazione in 24 ore</h3>
              <p className="feature-text">Analizziamo il lotto e ti inviamo la valutazione via email, chiamata o WhatsApp.</p>
            </div>

            {/* Passo 3 */}
            <div className="feature-card">
              <div className="icon-wrapper bg-gradient-to-br from-purple-500 to-fuchsia-600">
                <Truck className="feature-icon text-white" />
              </div>
              <h3 className="feature-title">3) Ritiro gratuito</h3>
              <p className="feature-text">Mandiamo un corriere a casa tua. Zero costi, zero stress.</p>
            </div>
          </div>

          <Spacer y={8}/>

          <div className="mt-16 max-w-4xl mx-auto">
            <section className="faq-section">
              <h2 className="section-title"><MessageCircleQuestion className="icon" /> FAQ (Domande frequenti)</h2>
              <div className="faq-list">
                {faq.map(({ q, a }, i) => (
                  <details key={i} className="faq-item">
                    <summary className="faq-question">{q}</summary>
                    <p className="faq-answer">{a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <Spacer y={8}/>

          <div className="text-center mt-8 ">
                <Button 
                  href="/contact/index.html" 
                  className="primary-cta"
                  type="primary"
                >
                  <MailCheck className='icon'/>
                  &nbsp;Hai altre domande? Contattaci!
                </Button>
          </div>

          <h2>
            Oppure compila il form, è gratuito! <br/>
            Fallo oggi, prima che il valore dei tuoi libri si perda!
          </h2>
          <ArrowBigDown className="icon-down-arrow" />
        </div>
      </section>
      </div>
  );
}

export default ComeFunziona;