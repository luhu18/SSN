import React from 'react';
import PageHeader from '../components/PageHeader';
import Image from '../Assets/upwork prof.png'

const AboutPage = () => {
  return (
    <>
      <PageHeader 
        title="About Us" 
        description="Learn about our mission, vision, and the team behind Sustainable Schools Network"
        backgroundImage="/images/about-header.jpg"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-green-700">Our Story</h2>
            <p className="text-lg mb-6">
              Sustainable Schools Network (SSN) was founded in 2018 with a vision to transform schools into centers of environmental education and sustainable practices. We believe that by empowering the next generation with knowledge and hands-on experience in sustainability, we can create lasting positive change for our planet.
            </p>
            <p className="text-lg mb-6">
              What began as a small initiative in a few schools in Kampala has now grown into a network spanning over 50 schools across Uganda, with partnerships extending to neighboring countries.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-green-700">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
              <img src={Image} alt="Hyuba Puis" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-500" />
              <h3 className="text-xl font-semibold text-green-700">Hyuba Puis</h3>
              <p className="text-md text-gray-600">Environmental Trainer</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
              <img src={Image} alt="Kayemba Enock" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-500" />
              <h3 className="text-xl font-semibold text-green-700">Kayemba Enock</h3>
              <p className="text-md text-gray-600 mb-4">P/Secretary</p>
              <div className="text-sm text-gray-700 space-y-1">
                <p className="flex items-center justify-center">
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06L6.22 10.27a10 10 0 005.56 5.56l1.554-1.24a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.173 18 2 12.827 2 6V3z"></path>
                  </svg>
                  +256 783 605958
                </p>
                <p className="flex items-center justify-center">
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  info@sustainable-schools-network.org
                </p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
              <img src={Image} alt="Igor Lemmen" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-500" />
              <h3 className="text-xl font-semibold text-green-700">Igor Lemmen</h3>
              <p className="text-md text-gray-600">Project Mentor</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;