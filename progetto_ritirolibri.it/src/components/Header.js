import Link from "next/link";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <Link href="/">
          <FaHome size={24} />
        </Link>
        <button onClick={toggleMenu}>
          <Bars3Icon className="icon" height={24} />
        </button>
      </div>
      {isMenuOpen && (
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">Chi Siamo</Link></li>
            <li><Link href="/contact">Contatti</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
