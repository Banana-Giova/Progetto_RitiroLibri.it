import Head from 'next/head';
import Button from '@/components/ui/button';
import { BookOpen, Globe, Zap, Smile, Check, Rocket } from 'lucide-react';

const reviews = [
  {
    author: 'Carlo C.',
    rating: 5,
    text: 'Servizio impeccabile! Hanno ritirato tutti i miei libri in un lampo e mi hanno pagato subito.',
  },
  {
    author: 'Luca R.',
    rating: 4,
    text: 'Molto professionali e gentili. Il corriere è arrivato puntuale e non ho dovuto fare nulla.',
  },
  {
    author: 'Giulia V.',
    rating: 5,
    text: 'Ho liberato un’intera stanza di libri in pochi click. Consigliatissimi!',
  },
  {
    author: 'Mirko D.',
    rating: 4,
    text: 'Ottima esperienza: mi hanno aiutato a sgomberare il mio deposito bare.',
  },
  {
    author: 'Elena S.',
    rating: 5,
    text: 'Sostenibili e trasparenti: mi hanno tenuto sempre aggiornato. Bravi!',
  },
  {
    author: 'Andrea B.',
    rating: 5,
    text: 'Recupero tempestivo, comunicazioni rapide e cordiali, pagamento puntuale. Ottimo.',
  },
];

export default function About() {
  return (
    <div className='about-container'>
      <Head>
        <title>RitiroLibri.it | Chi Siamo</title>
        <meta
          name="description"
          content="Scopri la nostra mission, i valori e i numeri di RitiroLibri.it: passione, sostenibilità ed efficienza al tuo servizio."
        />
      </Head>

      {/* Chi Siamo */}
      <section className="about-section">
      <div className='about-container'>
      <div className='spacer-about' />
      <h2 className="highlight-text">&nbsp;👤 Chi Siamo&nbsp;</h2>

      <section className="about-cards">
        <div className="about-card mission-card">
          <h3 className="card-title">La nostra Mission</h3>
          <p className="card-text">
            Crediamo nel valore dei libri e nel loro potenziale infinito. Il nostro obiettivo è dare
            una seconda vita ai libri che non leggi più, riducendo gli sprechi e promuovendo la
            cultura attraverso donazioni a scuole, biblioteche e associazioni benefiche.
          </p>
        </div>

        <div className="about-card values-card">
          <h3 className="card-title">I nostri Valori</h3>
          <ul className="card-list">
            <li><BookOpen className="card-icon" />Passione per la lettura</li>
            <li><Globe   className="card-icon" />Sostenibilità e impegno sociale</li>
            <li><Zap     className="card-icon" />Efficienza e semplicità</li>
            <li><Smile   className="card-icon" />Soddisfazione del cliente</li>
          </ul>
        </div>

        <div className="about-card stats-card">
          <h3 className="card-title">I nostri Numeri</h3>
          <ul className="card-list">
            <li><Check className="card-icon" />Oltre 10.000 clienti soddisfatti</li>
            <li><Check className="card-icon" />Più di 50.000 libri ritirati e valorizzati</li>
            <li><Check className="card-icon" />Più di 100 scuole e associazioni aiutate</li>
          </ul>
        </div>
      </section>

      <hr className='about-divider' />

        {/* Recensioni */}
        <section className="reviews-section">
          <h3 className="reviews-title">Le recensioni dei nostri clienti</h3>
          <div className="reviews-grid">
            {reviews.map(({ author, rating, text }, idx) => (
              <div key={idx} className="review-card">
                <div className="review-rating">
                  {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
                </div>
                <p className="review-text">“{text}”</p>
                <p className="review-author">— {author}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center mt-8 ">
          <Button 
            href="/about#footer" 
            className="primary-cta"
            type="primary"
          >
            <Rocket className='icon'/>
            &nbsp;Unisciti a chi ci ha già scelto!
          </Button>
        </div>
        </div>
      </section>
    </div>
  );
}
