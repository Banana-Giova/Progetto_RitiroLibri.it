import { useState, useEffect } from 'react';

export default function CookieConsentBanner() {
  const STORAGE_KEY = 'cookieConsentAccepted';
  const [visible, setVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) setVisible(true);
    } catch (e) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch (e) {}
    setFadingOut(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div className={`cookie-banner ${fadingOut ? 'fade-out' : ''}`}>
      <div className="cookie-banner-content">
        <p>
          Questo sito utilizza <strong>cookie tecnici</strong> e <strong>cookie di terze parti</strong> (es. Google Analytics)  
          per offrirti la migliore esperienza di navigazione.  
          Cliccando su “Accetta” acconsenti all’uso dei cookie.  
          Per maggiori dettagli consulta la nostra <a href="/cookie-policy">Cookie Policy</a>.
        </p>
        <button className="cookie-banner-button" onClick={handleAccept}>
          Accetta
        </button>
      </div>
    </div>
  );
}
