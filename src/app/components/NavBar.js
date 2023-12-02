'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white z-10">
      <div className="flex items-center justify-between px-6 md:px-8 py-3 md:py-6">
        <Link href="/" className="font-bold text-xl">
          KELL EGY OTTHON
        </Link>

        <div className="hidden md:flex flex-grow items-center justify-end space-x-4">
          <Link href="/#about" onClick={closeMenu} className="block md:inline-block mt-4 md:mt-0">
            RÓLUNK
          </Link>
          <Link href="/#services" onClick={closeMenu} className="block md:inline-block mt-4 md:mt-0">
            SZOLGÁLTATÁSOK
          </Link>
          <Link href="/blogPage" onClick={closeMenu} className="block md:inline-block mt-4 md:mt-0">
            BLOG
          </Link>
          <Link href="/#contact" onClick={closeMenu} className="block md:inline-block mt-4 md:mt-0">
            KAPCSOLAT
          </Link>
        </div>

        <div className="md:hidden relative">
          <input type="checkbox" id="toggle" className="hidden" />

          <label htmlFor="toggle" className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleMenu}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </label>

          <div className={`menu bg-white absolute top-full right-0 mt-2 rounded-md border shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}>
            <Link href="/#about" onClick={closeMenu} className="block py-2 px-2">
              RÓLUNK
            </Link>
            <Link href="/#services" onClick={closeMenu} className="block py-2 px-2">
              SZOLGÁLTATÁSOK
            </Link>
            <Link href="/blogPage" onClick={closeMenu} className="block py-2 px-2">
              BLOG
            </Link>
            <Link href="/#contact" onClick={closeMenu} className="block py-2 px-2">
              KAPCSOLAT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
