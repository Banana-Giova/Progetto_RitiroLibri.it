import Link from 'next/link';

export default function Custom404() {
  return (
    <div className='error-container'>
      <h1>404 — Pagina non trovata</h1>
      <p>Oops! La pagina non esiste.</p>
      <Link href="/">Torna alla home</Link>
    </div>
  );
}