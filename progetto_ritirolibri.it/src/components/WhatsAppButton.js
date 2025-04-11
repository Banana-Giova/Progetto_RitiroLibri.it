'use client'
import Image from "next/image";
import WhatsAppIcon from "@/assets/icons/whatsapp-icon.svg"

const prefillMessage = encodeURIComponent("Ciao, vorrei liberarmi di alcuni libri...");
const WhatsAppButton = () => (
    <div className="whatsapp-button">
        <a 
        href={`https://wa.me/3514229421?text=${prefillMessage}`}
        target="_blank"
        className="fixed bottom-6 right-6 bg-whatsapp-green p-4 rounded-full shadow-lg"
        >
        <Image 
            src={WhatsAppIcon}
            alt="WhatsApp" 
            width={24} 
            height={24} />
        </a>
    </div>
);

export default WhatsAppButton;