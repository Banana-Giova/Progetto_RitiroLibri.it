import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/come_funziona/index.html', label: 'Come Funziona?' },
    { href: '/about/index.html', label: 'Chi Siamo' },
    { href: '/contact/index.html', label: 'Contattaci' },
  ];

  return (
    <nav aria-label="Main navigation" className="navbar">
      <div className="navbar-inner">
        <div className='navbar-inner-logo'>
            <div className="logo-navbar">
            <Link href='/' label='Homepage'>
                <Image
                src={"/images/logo_navbar_optimized_nobg.png"}
                width={128}
                height={32}
                alt="RitiroLibri.it Navbar"
                className="logo-navbar"
                />
            </Link>
            </div>
        </div>
        <div className='navbar-inner-items'>
            <button
                className={`nav-toggle ${open ? 'open' : ''}`}
                aria-label={open ? 'Chiudi menu' : 'Apri menu'}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                >
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
            </button>
            
            <ul className={`mobile-menu ${open ? 'open' : ''}`}>
            {links.map(({ href, label }) => (
                <li key={href}>
                <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={pathname === href ? 'active' : ''}
                >
                    {label}
                </Link>
                </li>
            ))}
            </ul>
        </div>
      </div>
    </nav>
  );
}
