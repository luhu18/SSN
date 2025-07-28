import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 w-full z-50">
      {/* Removed "fixed-top" from the nav class */}
      <nav className="container mx-auto px-4 py-2 flex items-center">
        {/* Logo/Brand */}
        <div className="font-bold text-xl">
          <Link to="/" className="hover:text-green-800">
            <img src='/ssn_logo.webp' alt='ssn logo' className="w-12 h-12 rounded-full" />
          </Link>
        </div>

        {/* Hamburger Icon (visible on small screens, hidden on md and larger) */}
        {/* Added ml-auto to push the hamburger to the right on mobile */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-green-600 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop Navigation Links (hidden on small screens, visible on md and larger) */}
        {/* This div now contains both the main links and the donate button.
            It's pushed to the right using ml-auto. */}
        <div className="hidden md:flex items-center ml-auto">
          {/* Group of regular text links with their own spacing */}
          <div className="flex space-x-6">
            <Link to="/" className="text-green-600 hover:text-green-800">Home</Link>
            <Link to="/about" className="text-green-600 hover:text-green-800">About</Link>
            <Link to="/programs" className="text-green-600 hover:text-green-800">Programs</Link>
            <Link to="/activities" className="text-green-600 hover:text-green-800">Activities</Link>
            <Link to="/resources" className="text-green-600 hover:text-green-800">Resources</Link>
            <Link to="/contact" className="text-green-600 hover:text-green-800">Contact</Link>
            <Link to="/volunteer" className="text-green-600 hover:text-green-800">Volunteer</Link>
            <Link to="/blog" className="text-green-600 hover:text-green-800">Blogs</Link>
          </div>

          {/* Donate button - now explicitly spaced from the previous group */}
          <Link
            to="/donate"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition ease-in-out duration-150 ml-6"
          >
            Donate
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={isMenuOpen ? 'md:hidden block' : 'md:hidden hidden'} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/programs" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Programs</Link>
          <Link to="/activities" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Activities</Link>
          <Link to="/resources" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/donate" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Donate</Link>
          <Link to="/volunteer" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Volunteer</Link>
          <Link to="/blogs" className="text-green-600 hover:text-green-800 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;