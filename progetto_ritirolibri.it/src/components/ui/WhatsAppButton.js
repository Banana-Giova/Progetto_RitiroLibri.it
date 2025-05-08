'use client'
import Image from "next/image";
import WhatsAppIcon from "@/assets/icons/whatsapp-icon.svg"

const prefillMessage = encodeURIComponent("Ciao, vorrei liberarmi velocemente di alcuni libri usati. Potete aiutarmi?");
const WhatsAppButton = () => (
    <div className="whatsapp-button">
        <a 
        href={`https://wa.me/3514229421?text=${prefillMessage}`}
        target="_blank"
        >
        <Image 
            src={WhatsAppIcon}
            alt="WhatsApp" 
            className="whatsapp-image" />
        </a>
    </div>
);

export default WhatsAppButton;