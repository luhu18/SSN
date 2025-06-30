import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-green-700 text-white py-20 md:py-32">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/images/hero-background.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-20" 
          aria-hidden="true"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building Sustainable Schools for a Greener Future
          </h1>
          <p className="text-xl md:text-2xl mb-10">
            Empowering schools with environmental education, sustainable practices, and hands-on projects to create a better world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/programs" 
              className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
            >
              Our Programs
            </Link>
            <Link 
              to="/donate" 
              className="bg-yellow-400 text-green-800 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-700"
            >
              Support Our Cause
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;