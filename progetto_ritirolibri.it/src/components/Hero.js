import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Spacer } from "@heroui/spacer";
import { Camera, ArrowBigRight, ArrowBigDown, Clock, BookCheck, Truck } from "lucide-react";
import Button from "@/components/ui/button";
import Logo from "@/assets/images/logo_ritirolibriit.png";

const Hero = () => {

  const features = [
    {
      Icon: Clock,
      title: "Ritiro Sempre Gratuito",
      text: "Nessun costo nascosto. Anche una sola scatola è gratis.",
    },
    {
      Icon: Truck,
      title: "Valutazione Immediata in 24 ore",
      text: "Zero perdite di tempo. Ricevi rapidamente una risposta.",
    },
    {
      Icon: BookCheck,
      title: "Massima Comodità, Zero Sforzi",
      text: "Mandiamo noi il corriere direttamente a casa tua.",
    },
  ];

  return (
    <section className="hero-section py-16 md:py-24">
      <div className="hero-container">
        <div className="logo-container">
          <Image
            src={Logo}
            width={160}
            height={160}
            alt="RitiroLibri.it Logo"
            className="logo-img"
          />
          <h1 className="main-heading">
            <Balancer>
              <span className="base-text">
                Liberati subito dei tuoi libri senza muovere un dito:&nbsp;
              </span>
              <span className="highlight-text">Li ritiriamo GRATIS!</span>
            </Balancer>
            <ArrowBigDown className="icon-down-arrow" />
          </h1>
        </div>

        <div className="button-group">
          <Button href="#footer" className="primary-cta" type="primary">
            <Camera className="icon" />
            &nbsp;Prenota il ritiro gratuito
          </Button>
          <Button href="/come_funziona" className="secondary-cta" type="secondary">
            <ArrowBigRight className="icon" />
            &nbsp;Scopri come funziona
          </Button>
        </div>

        <Spacer y={8} />

        {/*
        <p className="subtitle">
          <Balancer>
            Il modo più semplice e veloce per liberare spazio senza alcuno sforzo!
          </Balancer>
        </p>

        <Spacer y={8} />
        */}

        <div className="why-choose mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, text }) => (
            <div key={title} className="feature-card">
              <div className="icon-wrapper">
                <Icon className="feature-icon" />
              </div>
              <h3 className="feature-title">{title}</h3>
              <p className="feature-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
