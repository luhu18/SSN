import React from 'react';
import PageHeader from '../components/PageHeader';

import Image from '../Assets/working.webp'

const ProgramsPage = () => {
  return (
    <>
      <PageHeader 
        title="Our Programs" 
        description="Discover the initiatives we're implementing to create sustainable schools"
        backgroundImage="/images/programs-header.jpg"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-green-700">Core Programs</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img src={Image} alt="School garden with students" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-green-600">School Gardens & Food Forests</h3>
                  <p className="text-lg mb-4">
                    We help schools establish organic gardens and food forests that serve as outdoor classrooms and sources of nutritious food for students.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Training in organic gardening techniques</li>
                    <li>Provision of seeds, tools, and materials</li>
                    <li>Curriculum integration support</li>
                    <li>Ongoing mentorship and technical assistance</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 md:order-2">
                  <img src={Image} alt="Students planting trees" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                </div>
                <div className="md:w-2/3 md:order-1">
                  <h3 className="text-2xl font-semibold mb-4 text-green-600">Tree Planting & Reforestation</h3>
                  <p className="text-lg mb-4">
                    Our tree planting initiatives help combat deforestation, create shade, and teach students about the importance of trees for the environment.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>School-based tree nurseries</li>
                    <li>Community tree planting events</li>
                    <li>Indigenous species conservation</li>
                    <li>Long-term tree care and monitoring</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img src={Image} alt="Students at an eco-camp" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-green-600">Eco Summer Camps</h3>
                  <p className="text-lg mb-4">
                    Our immersive eco-camps provide hands-on environmental education and leadership development for students and teachers.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Practical environmental education workshops</li>
                    <li>Leadership and teamwork development</li>
                    <li>Sustainable living skills training</li>
                    <li>Nature connection and outdoor activities</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 md:order-2">
                  <img src={Image} alt="Students participating in a cleanup campaign" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                </div>
                <div className="md:w-2/3 md:order-1">
                  <h3 className="text-2xl font-semibold mb-4 text-green-600">Cleanup Campaigns</h3>
                  <p className="text-lg mb-4">
                    Our cleanup campaigns mobilize students and communities to address waste management issues and promote environmental stewardship.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>School and community cleanup events</li>
                    <li>Waste segregation and recycling education</li>
                    <li>Plastic pollution awareness</li>
                    <li>Sustainable waste management solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-green-700">Educational Initiatives</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="p-4 rounded-full bg-green-100 text-green-600 mb-4 w-16 h-16 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-green-600">Teacher Training</h3>
                <p className="text-center mb-4">
                  We provide specialized training for teachers on environmental education and sustainable practices.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Environmental curriculum development</li>
                  <li>Practical teaching methodologies</li>
                  <li>Integration of sustainability into existing subjects</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="p-4 rounded-full bg-green-100 text-green-600 mb-4 w-16 h-16 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-green-600">Resource Development</h3>
                <p className="text-center mb-4">
                  We create and distribute educational materials on sustainability and environmental conservation.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Lesson plans and activity guides</li>
                  <li>Visual aids and educational posters</li>
                  <li>Digital resources and online learning tools</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="p-4 rounded-full bg-green-100 text-green-600 mb-4 w-16 h-16 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a4 4 0 011.13-2.733A4.986 4.986 0 0010 6c2.76 0 5 2.24 5 5zm-4-2a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-green-600">Student Leadership</h3>
                <p className="text-center mb-4">
                  We empower students to become environmental leaders and advocates in their schools and communities.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Eco-club formation and support</li>
                  <li>Youth environmental leadership training</li>
                  <li>Student-led sustainability projects</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="p-4 rounded-full bg-green-100 text-green-600 mb-4 w-16 h-16 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-green-600">Community Engagement</h3>
                <p className="text-center mb-4">
                  We facilitate collaboration between schools and their surrounding communities for broader environmental impact.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Parent and community workshops</li>
                  <li>School-community partnership projects</li>
                  <li>Knowledge sharing between schools and communities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Join Our Network</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We're always looking to expand our network of schools committed to sustainability. Join us to access resources, training, and a community of like-minded educators and students.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
            >
              Contact Us
            </a>
            <a 
              href="/volunteer" 
              className="bg-yellow-400 text-green-800 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-green-700"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramsPage;