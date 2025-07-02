import React from 'react';
import PageHeader from '../components/PageHeader';

// Using a single placeholder image to avoid import errors for now
// Remember to replace this with specific image imports and usage later!
import Image from '../Assets/Gerden2.webp';
import Cleanup from '../Assets/cleanups.webp'
import Admin from '../Assets/admin.webp'
import Plantt from '../Assets/planttt.webp'
import Planting from '../Assets/planting.webp'
import Image2 from '../Assets/plants2.webp';
import Image3 from '../Assets/TAEW.webp';
import Image4 from '../Assets/seedling planting.webp';
import Image5 from '../Assets/school gerden.webp'



const ActivitiesPage = () => {
  // Define your key activities data
  const keyActivities = [
    {
      title: "Fighting Hidden Hunger",
      description: "Our program addresses malnutrition by establishing sustainable school gardens that yield nutrient-rich crops. Students learn to cultivate a variety of staples like **potatoes, bananas, cassava, maize, beans, and leafy greens**, ensuring access to fresh food and combating nutritional deficiencies within the school and community.",
      image: Image, // Placeholder image
      alt: "Students harvesting diverse crops from a school garden",
      date: "Ongoing Initiative"
    },
    {
      title: "Cleanup Campaigns",
      description: "We organize regular cleanup campaigns in collaboration with schools and local communities. These initiatives not only beautify the environment but also educate participants on proper waste management, recycling, and the importance of a clean living space for health and sustainability.",
      image: Cleanup, // Placeholder image
      alt: "Students participating in a community cleanup campaign",
      date: "Monthly Events"
    },
    {
      title: "School Gardening Days",
      description: "Hands-on school gardening days are central to our practical approach to environmental education. Students actively participate in planting, nurturing, and harvesting, developing practical agricultural skills, fostering a connection with nature, and contributing to their school's food security.",
      image: Admin, // Placeholder image
      alt: "Students engaged in school gardening activities",
      date: "Seasonal Activities"
    },
    {
      title: "Environmental Education Workshops",
      description: "We conduct interactive workshops for students and teachers focused on critical environmental topics. These sessions cover climate change awareness, biodiversity conservation, water harvesting, sustainable agriculture techniques, and the promotion of eco-friendly practices within school compounds and beyond.",
      image: Plantt, // Placeholder image
      alt: "Students and teachers in an environmental education workshop",
      date: "Quarterly Workshops"
    },
  ];

  // Define your timeline milestones data
  const milestones = [
    { year: 2024, description: "Launched 'Green Schools Challenge' across 10 new schools in Kampala." },
    { year: 2023, description: "Expanded 'Fighting Hidden Hunger' program to include 5,000 additional students in Kakuma." },
    { year: 2023, description: "Conducted 15 teacher training workshops for 150 educators." },
    { year: 2022, description: "Established our first pilot school gardens in Kakuma, Turkana County, Kenya." },
    { year: 2021, description: "Initiated partnerships with local government and community leaders in Uganda." },
    { year: 2020, description: "Founded Sustainable Schools Network with a focus on environmental education." },
  ];

  // Images for the photo gallery - all using the same placeholder image for now
  const galleryImages = [
    { src: Planting , alt: "Students cleaning up the school grounds." },
    { src: Image4, alt: "Children planting seedlings in a garden." },
    { src: Image3, alt: "Teachers attending an environmental education workshop." },
    { src: Image5, alt: "A thriving school garden with various crops." },
    { src: Image2, alt: "Students tending to a growing school garden." },
    { src: Image, alt: "Children learning about nature outdoors." },
  ];


  return (
    <>
      <PageHeader
        title="Our Activities & Impact"
        description="Explore the hands-on initiatives transforming schools and communities."
        // Using the placeholder image for the header background
        backgroundImage={Image}
      />

      {/* Highlight Key Activities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-green-800">Our Core Activities</h2>

          <div className="space-y-16">
            {keyActivities.map((activity, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                  <img
                    src={activity.image} // Using the placeholder image
                    alt={activity.alt}
                    className="rounded-xl shadow-xl w-full h-72 object-cover object-center transform transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-green-700">{activity.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  <div className="flex items-center text-gray-600 font-medium">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{activity.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-green-800">Moments of Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={image.src} // Using the placeholder image for all gallery items
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center text-lg font-semibold px-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline of Milestones Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-green-800">Our Journey: Milestones</h2>
          <div className="relative border-l-4 border-green-500 pl-8 ml-4 md:ml-0">
            {milestones.map((milestone, index) => (
              <div key={index} className="mb-10 flex items-start">
                <div className="absolute w-4 h-4 bg-green-600 rounded-full mt-1 -left-2 transform -translate-x-1/2"></div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">{milestone.year}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusing the Impact Numbers and Testimonials sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-green-700">Our Broader Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <p className="text-lg">Schools Engaged</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">5,000+</div>
                <p className="text-lg">Trees Planted</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
                <p className="text-lg">Cleanup Campaigns</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-center text-green-600">Testimonials</h3>
              <div className="space-y-8">
                <blockquote className="italic border-l-4 border-green-500 pl-4 py-2">
                  <p className="mb-2">"The school garden project has transformed how our students think about food and nutrition. They're now excited about growing their own vegetables and learning about sustainable agriculture."</p>
                  <footer className="text-gray-600">— Sarah Namukasa, Headteacher at St. Mary's School</footer>
                </blockquote>
                <blockquote className="italic border-l-4 border-green-500 pl-4 py-2">
                  <p className="mb-2">"The environmental education workshops have given me new tools to engage my students in learning about conservation and sustainability. It's made a real difference in our classroom."</p>
                  <footer className="text-gray-600">— John Mukasa, Science Teacher at Kampala Model School</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivitiesPage;