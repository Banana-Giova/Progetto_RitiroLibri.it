import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import Logo_Navbar from "@/assets/images/ritirolibriit_letter_logo.png";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/come_funziona', label: 'Come Funziona?' },
    { href: '/contact', label: 'Contattaci' },
    { href: '/about', label: 'Chi Siamo' },
  ];

  return (
    <nav aria-label="Main navigation" className="navbar">
      <div className="navbar-inner">
        <div className='navbar-inner-logo'>
            <div className="logo-navbar">
            <a href='/' label='Homepage'>
                <Image
                src={Logo_Navbar}
                alt="RitiroLibri.it Navbar"
                className="logo-navbar"
                />
            </a>
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
