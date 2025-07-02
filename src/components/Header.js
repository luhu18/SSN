import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// --- CORRECTED IMPORTS FOR HEROICONS V2 ---
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'; // Use /24/solid for 24x24 solid icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 w-full z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between fixed-top">
        {/* Logo/Brand - Added rounded-full to the img tag */}
        <div className="font-bold text-xl">
          <Link to="/" className="hover:text-green-800">
            {/* Added rounded-full class here */}
            <img src='/ssn_logo.webp' alt='ssn logo' className="w-12 h-12 rounded-full" />
          </Link>
        </div>

        {/* Hamburger Icon (visible on small screens, hidden on md and larger) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-green-600 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {/* Conditional rendering for Menu/X icon - NOW USING BARS3ICON and XMARKICON */}
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" /> // 'X' icon when menu is open
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" /> // Hamburger icon when menu is closed
            )}
          </button>
        </div>

        {/* Desktop Navigation Links (hidden on small screens, visible on md and larger) */}
        <div className="hidden md:flex md:space-x-6">
          <Link to="/" className="text-green-600 hover:text-green-800">Home</Link>
          <Link to="/about" className="text-green-600 hover:text-green-800">About</Link>
          <Link to="/programs" className="text-green-600 hover:text-green-800">Programs</Link>
          <Link to="/activities" className="text-green-600 hover:text-green-800">Activities</Link>
          <Link to="/resources" className="text-green-600 hover:text-green-800">Resources</Link>
          <Link to="/contact" className="text-green-600 hover:text-green-800">Contact</Link>
          <Link to="/donate" className="text-green-600 hover:text-green-800">Donate</Link>
          <Link to="/volunteer" className="text-green-600 hover:text-green-800">Volunteer</Link>
        </div>
      </nav>

      {/* Mobile Menu (conditionally rendered based on isMenuOpen state and screen size) */}
      <div className={isMenuOpen ? 'md:hidden block' : 'md:hidden hidden'} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/programs" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Programs</Link>
          <Link to="/activities" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Activities</Link>
          <Link to="/resources" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Resources</Link>
          <Link to="/contact" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/donate" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Donate</Link>
          <Link to="/volunteer" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Volunteer</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;