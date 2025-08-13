import ContactForm from "./Form";
import Button from '@/components/ui/button';
import { Spacer } from "@heroui/spacer";
import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';

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
              href={`tel:+39 351 422 9421`}
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
            <p>RitiroLibri S.r.l. &copy;</p>
            <p>Sede ufficiale a Roma (RM)</p>
            <Link href="mailto:info@ritirolibri.it" className="footer-link">Info: info@ritirolibri.it</Link>
            <Link href="mailto:ritirolibri@pec.it" className="footer-link">PEC: ritirolibri@pec.it</Link>
          </div>

          <div className="footer-links">
            <Link href="/privacy-policy/index.html">Privacy Policy</Link>
            <Link href="/cookie-policy/index.html">Cookie Policy</Link>
            <Link href="/termini-e-condizioni/index.html">Termini e Condizioni</Link>
            <Link href="/note-legali/index.html">Note Legali</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;