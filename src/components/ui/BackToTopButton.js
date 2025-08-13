import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`back-to-top${visible ? ' visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Torna in cima"
    >
      <ArrowUp size={24} />
    </button>
  );
}

export default BackToTopButton;