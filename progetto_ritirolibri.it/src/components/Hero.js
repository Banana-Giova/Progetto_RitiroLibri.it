import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Spacer } from "@heroui/spacer"
import { Camera, ArrowBigRight } from "lucide-react";
import Button from "@/components/ui/button";
import Logo from "@/assets/images/logo_ritirolibriit.png";

const Hero = () => {
  return (
    <section className="hero-section py-16 md:py-24">
      <div className="container">
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
            <span className="highlight-text">Liberati subito dei tuoi libri</span>
            <span className="base-text"> senza muovere un dito: li ritiriamo GRATIS!</span>
          </Balancer>
        </h1>
        </div>

        <p className="subtitle">
          <Balancer>
            Il servizio più semplice e veloce per liberare spazio in casa 
            senza alcuno sforzo o costo!
          </Balancer>
        </p>

        <Spacer y={8} />

        <div className="button-group">
          <Button href="/prenota" className="primary-cta" type="primary">
              <Camera className="icon" />
              Prenota il ritiro gratuito
          </Button>

          <Button href="/come-funziona" className="secondary-cta" type="secondary">
          <ArrowBigRight className="icon" />
              Scopri come funziona
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;