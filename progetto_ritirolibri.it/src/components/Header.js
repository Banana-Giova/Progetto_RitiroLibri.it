import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">Chi siamo</Link></li>
          <li><Link href="/contact">Contatti</Link></li>
        </ul>
      </nav>
    </header>
  );
}
