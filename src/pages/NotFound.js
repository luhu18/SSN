import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-9xl font-bold text-green-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Return to Homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFound;