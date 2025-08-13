import Image from 'next/image';
import Link from 'next/link';

const prefillMessage = encodeURIComponent(
  "Ciao, vorrei liberarmi velocemente di alcuni libri usati. Potete aiutarmi?"
);

const WhatsAppButton = () => (
  <div className="whatsapp-button">
    <Link href={`https://wa.me/3514229421?text=${prefillMessage}`} target="_blank">
      <div className="relative w-[50px] h-[50px]">
        <Image
          src="/icons/whatsapp-icon.svg"
          alt="WhatsApp"
          width={24}
          height={24}
          sizes="(min-width: 769px) and (max-width: 1200px) 30px, 30px, (min-width: 1201px) 30px"
        />
      </div>
    </Link>
  </div>
);

export default WhatsAppButton;
