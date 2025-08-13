import Link from 'next/link';

export default function Custom500() {
  return (
    <div className='error-container'>
      <h1>500 — Errore del server</h1>
      <p>Qualcosa è andato storto. Riprova più tardi!</p>
      <Link href="/">Torna alla home</Link>
    </div>
  );
}