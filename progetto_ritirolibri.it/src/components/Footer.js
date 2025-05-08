import ContactForm from "./Form";
import Button from '@/components/ui/button';
import { Spacer } from "@heroui/spacer";
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <div className="footer-container">

      <div id="footer" className="footer-spacer" />
      <footer className="footer">
        <div className="footer-form-wrapper">
          <ContactForm />
        </div>

        <Spacer y={4} />

        <section className="footer-contact-section">
          <p className="footer-minitext">oppure</p>
          <Button
              href={`https://wa.me/3514229421}`}
              target="_blank"
              className="secondary-cta"
              type="secondary"
            >
              <Phone className="icon" />
              &nbsp;Chiamaci
          </Button>

          <Button href="mailto:info@ritirolibri.it" className="secondary-cta" type="secondary">
            <Mail className="icon" />
            &nbsp;Inviaci una email
          </Button>
        </section>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>RitiroLibri S.r.l.</p>
            <p>Via dei Librai 10, 00100 Roma (RM)</p>
            <p>P.IVA 12345678901 | REA RM-1234567</p>
            <p>Capitale sociale €10.000 i.v.</p>
            <p>PEC: ritirolibri@pec.it</p>
          </div>

          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cookie-policy">Cookie Policy</a>
            <a href="/termini-e-condizioni">Termini e Condizioni</a>
            <a href="/note-legali">Note Legali</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;