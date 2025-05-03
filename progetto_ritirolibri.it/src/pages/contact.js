import Head from 'next/head';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import Button from '@/components/ui/button';

export default function Contact() {
  return (
    <section className="contact-section">
      <Head>
        <title>RitiroLibri.it | Contattaci</title>
        <meta
          name="description"
          content="Contattaci ora! Siamo a tua disposizione su WhatsApp, telefono o via mail."
        />
      </Head>

        <div className='spacer-about' />
          <h2 className="highlight-text">&nbsp;📞 Contattaci&nbsp;</h2>
          <br/>
        <p className="section-subtitle-light">
          Hai domande? Siamo a tua disposizione su WhatsApp, telefono o via email.
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <Phone className="contact-icon" />
            <h3 className="contact-method">WhatsApp & Telefono</h3>
            <p className="contact-detail">
              <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                +39 351 422 9421
              </a>
            </p>
            <Button
              href="https://wa.me/3514229421"
              className="secondary-cta"
              type="secondary"
            >
              Scrivici su WhatsApp
            </Button>
          </div>

          <div className="contact-card">
            <MessageCircle className="contact-icon" />
            <h3 className="contact-method">RitiroLibri.it</h3>
            <p className="contact-detail">
              Prenota il tuo ritiro a domicilio ora!
            </p>
            <Button href="#footer" className="secondary-cta" type="secondary">
              Compila il form
            </Button>
          </div>

          <div className="contact-card">
            <Mail className="contact-icon" />
            <h3 className="contact-method">Email</h3>
            <p className="contact-detail">
              <a href="mailto:info@ritirolibri.it">Invia una mail a info@ritirolibri.it</a>
            </p>
            <Button href="mailto:info@ritirolibri.it" className="secondary-cta" type="secondary">
              Inviaci una email
            </Button>
          </div>

        </div>
    </section>
);
}
