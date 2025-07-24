import React from 'react';
import PageHeader from '../components/PageHeader';

import FoodForest from '../Assets/School Gardens &Food forsts.webp';
import Planting from '../Assets/Tree planting.webp';
import Camping from '../Assets/Eco Summer camps.webp';
import Cleanup from '../Assets/Cleanup Campaigns.webp';

const ProgramsPage = () => {
  return (
    <>
      <PageHeader 
        title="Our Programs" 
        description="Discover the initiatives we're implementing to create sustainable schools"
        backgroundImage="/images/ssn_dot.svg"
        isPattern={true}
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-green-700">Core Programs</h2>
            
            <div className="space-y-12">
              {/* School Gardens & Food Forests */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* MODIFICATION HERE: Removed h-full, Added aspect-video */}
                <div className="md:w-1/3 aspect-video"> 
                  <img 
                    src={FoodForest} 
                    alt="School garden with students" 
                    // Kept w-full h-full object-cover to fill the new aspect-ratio container
                    className="rounded-lg shadow-lg w-full h-full object-cover transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    loading="lazy" 
                  />
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
              
              {/* Tree Planting & Reforestation */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* MODIFICATION HERE: Removed h-full, Added aspect-video */}
                <div className="md:w-1/3 md:order-2 aspect-video">
                  <img 
                    src={Planting} 
                    alt="Students planting trees" 
                    // Kept w-full h-full object-cover to fill the new aspect-ratio container
                    className="rounded-lg shadow-lg w-full h-full object-cover transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    loading="lazy" 
                  />
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
              
              {/* Eco Summer Camps */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* MODIFICATION HERE: Removed h-full, Added aspect-video */}
                <div className="md:w-1/3 aspect-video">
                  <img 
                    src={Camping} 
                    alt="Students at an eco-camp" 
                    // Kept w-full h-full object-cover to fill the new aspect-ratio container
                    className="rounded-lg shadow-lg w-full h-full object-cover transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    loading="lazy" 
                  />
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
              
              {/* Cleanup Campaigns */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* MODIFICATION HERE: Removed h-full, Added aspect-video */}
                <div className="md:w-1/3 md:order-2 aspect-video">
                  <img 
                    src={Cleanup} 
                    alt="Students participating in a cleanup campaign" 
                    // Kept w-full h-full object-cover to fill the new aspect-ratio container
                    className="rounded-lg shadow-lg w-full h-full object-cover transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    loading="lazy" 
                  />
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
      
      {/* Educational Initiatives Section and Join Our Network Section remain the same */}
      {/* ... (rest of your code for these sections) ... */}
    </>
  );
};

export default ProgramsPage;