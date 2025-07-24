import React from 'react';
import { Link } from 'react-router-dom';


// import { SchoolIcon, TreeIcon, RecycleIcon } from '@heroicons/react/24/solid'; // Example icons
//Images from Assets 
import Image from '../Assets/Tree planting.webp';
import Camping from '../Assets/Eco Summer camps.webp';
import Plant from '../Assets/School Gardens &Food forsts.webp'
import Organic from '../Assets/Organic Farming 1st tile.webp';


const HomePage = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-24 md:py-36 flex items-center justify-center text-center h-screen"
        style={{ backgroundImage: `url('/Emporing Schools for a greener future.webp')` }}
       
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay for readability */}
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fadeInUp">
            Empowering Schools for a Greener Future!
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fadeInUp delay-200">
            Join us in promoting sustainability through education and eco-friendly initiatives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp delay-400">
            <Link
              to="/volunteer" // Link to  Volunteer page
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              Get Involved
            </Link>
            <Link
              to="/donate" // Link to  Donate page
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Mission Preview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8">
            The Sustainable Schools Network (SSN) is dedicated to fostering environmental stewardship among students and communities in Kakuma, Turkana County, Kenya. We aim to integrate sustainable practices into daily school life through practical, hands-on projects, transforming educational institutions into hubs of green innovation and community development.
          </p>
          <Link
            to="/about"
            className="text-green-600 hover:text-green-800 font-semibold text-lg flex items-center justify-center"
          >
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>

      {/* 3. Impact Highlights (Counters or Icons) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Impact So Far</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Schools Engaged */}
            <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              {/* Optional: Add a Heroicon here, e.g., <SchoolIcon className="h-12 w-12 text-green-600 mb-4" /> */}
              <div className="text-5xl font-bold text-green-700 mb-2">5</div>
              <p className="text-xl text-gray-700">Schools Engaged</p>
            </div>
            {/* Trees Planted */}
            <div className="flex flex-col items-center p-6 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              {/* Optional: Add a Heroicon here, e.g., <TreeIcon className="h-12 w-12 text-yellow-600 mb-4" /> */}
              <div className="text-5xl font-bold text-yellow-700 mb-2">100+</div>
              <p className="text-xl text-gray-700">Trees Planted</p>
            </div>
            {/* Cleanup Campaigns */}
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              {/* Optional: Add a Heroicon here, e.g., <RecycleIcon className="h-12 w-12 text-blue-600 mb-4" /> */}
              <div className="text-5xl font-bold text-blue-700 mb-2">5</div>
              <p className="text-xl text-gray-700">Cleanup Campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Program Preview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Key Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Program Card 1: Organic Gardening */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-2 flex flex-col items-center text-center">
              <img src={Organic} alt="Organic Gardening" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-green-700 mb-2">Organic Gardening</h3>
              <p className="text-gray-700 text-sm">Empowering schools to grow their own food using sustainable methods.</p>
              <Link to="/programs" className="mt-4 text-green-600 hover:text-green-800 font-semibold text-sm">Learn More</Link>
            </div>
            {/* Program Card 2: Tree Planting */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-2 flex flex-col items-center text-center">
              <img src={Image} alt="Tree Planting" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-green-700 mb-2">Tree Planting</h3>
              <p className="text-gray-700 text-sm">Restoring local ecosystems and providing shade and fruit for schools.</p>
              <Link to="/programs" className="mt-4 text-green-600 hover:text-green-800 font-semibold text-sm">Learn More</Link>
            </div>
            {/* Program Card 3: Food Forests */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-2 flex flex-col items-center text-center">
              <img src={Plant} alt="Food Forests" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-green-700 mb-2">Food Forests</h3>
              <p className="text-gray-700 text-sm">Creating biodiverse, perennial food systems within school grounds.</p>
              <Link to="/programs" className="mt-4 text-green-600 hover:text-green-800 font-semibold text-sm">Learn More</Link>
            </div>
            {/* Program Card 4: Eco Summer Camps */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-2 flex flex-col items-center text-center">
              <img src={Camping} alt="Eco Summer Camps" className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-green-700 mb-2">Eco Summer Camps</h3>
              <p className="text-gray-700 text-sm">Engaging students in fun, educational environmental activities during holidays.</p>
              <Link to="/programs" className="mt-4 text-green-600 hover:text-green-800 font-semibold text-sm">Learn More</Link>
            </div>
          </div>
          <div className="mt-12">
            <Link
              to="/programs"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Join Us Section */}
      <section className="py-16 bg-green-700 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg mb-8">
            Your support can make a tangible difference in building greener, more sustainable schools in Kakuma. Whether you can offer your time, expertise, or resources, every contribution helps us grow.
          </p>
          <Link
            to="/volunteer" // Link to your Volunteer page
            className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Become a Volunteer
          </Link>
          {/* A simple form could be added here later if desired, linking to a form service */}
        </div>
      </section>

     
    </>
  );
};

export default HomePage;