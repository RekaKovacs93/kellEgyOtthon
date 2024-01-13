'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NavBar() {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isMobileView = window.innerWidth < 768; // Set your mobile breakpoint width here
      if (isMobileView) {
        setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 150);
        setPrevScrollPos(currentScrollPos);
      }
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [prevScrollPos]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full bg-white z-10 transition-opacity duration-500 fade-in ${visible ? 'opacity-100' : 'opacity-0 -translate-y-full'}`}>
      <div className="flex items-center justify-between px-10 md:px-8 py-3 md:py-6">
        <Link href="/" className="font-bold text-xl">
          MINDENKINEK KELL EGY OTTHON
        </Link>

        <div className="hidden md:flex flex-grow items-center justify-end space-x-4">
          <Link id="hover-underline" href="/" onClick={closeMenu} className="block md:inline-block mt-4 md:mt-0">
            RÓLUNK
          </Link>
          <Link id="hover-underline" href="./elado" onClick={closeMenu} className="block md:inline-block mt-4 md:mt-0">
            ELADÓKNAK
          </Link>
          <Link id="hover-underline" href="./vevo" onClick={closeMenu} className="block md:inline-block mt-4 md:mt-0">
            VEVŐKNEK
          </Link>
          <Link id="hover-underline" href="./references" onClick={closeMenu} className="block md:inline-block mt-4 md:mt-0">
            REFERENCIÁK
          </Link>
          <Link id="hover-underline" href="./contact" onClick={closeMenu} className="block md:inline-block mt-4 md:mt-0">
            KAPCSOLAT
          </Link>
        </div>

        
          {/* Mobile */}
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

          <div className={`menu fixed top-0 right-0 w-full h-full bg-white z-20 px-5 py-10 transform transition-transform ease-in-out duration-1600 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} ${visible ? 'opacity-100' : 'opacity-0 -translate-y-full'}`}>

            <button onClick={closeMenu} className="fixed top-0 right-1 px-5 py-5 text-xs">X  Bezárás</button>
            <Link href="/#about" onClick={closeMenu} className="block pb-2 py-5 px-2 border-b">
              RÓLUNK
            </Link>
            <Link href="/elado" onClick={closeMenu} className="block pb-2 py-5 px-2 border-b">
              ELADÓKNAK
            </Link>
            <Link href="/vevo" onClick={closeMenu} className="block pb-2 py-5 px-2 border-b">
              VEVŐKNEK
            </Link>
            <Link href="./references" onClick={closeMenu} className="block pb-2 py-5 px-2 border-b">
            REFERENCIÁK
          </Link>

            
            {/* <Link href="/blogPage" onClick={closeMenu} className="block py-2 px-2 border-b">
              BLOG
            </Link> */}
            <Link href="./contact" onClick={closeMenu} className="block pb-2 py-5 px-2 border-b">
              KAPCSOLAT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
