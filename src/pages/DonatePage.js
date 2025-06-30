import React from 'react';
import { Link } from 'react-router-dom';
// Receive openDonationPopup as a prop to trigger the modal
const DonatePage = ({ openDonationPopup }) => {
  const handleDonateClick = (e) => {
    e.preventDefault();
    openDonationPopup(); // Call the function to open the donation popup
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-green-800 text-center mb-8">
        Your Donation Makes a Difference in Uganda
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Your Support Matters</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At Sustainable Schools Network, we are dedicated to transforming education and communities in Uganda through sustainable practices. Your generous donation empowers us to provide critical resources, implement eco-friendly initiatives, and foster a generation of environmentally conscious leaders.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Every shilling contributed directly impacts the lives of students, teachers, and their families, creating ripple effects of positive change across Uganda and beyond. From planting trees to setting up clean water sources and promoting renewable energy, your support is the foundation of our work.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-700 mb-2">Empower Education</h3>
            <p className="text-gray-600">
              Your funds help us develop and implement environmental curricula, train teachers, and provide educational materials that inspire students to become stewards of the environment.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Promote Sustainability</h3>
            <p className="text-gray-600">
              Support projects like school gardens for food security, water harvesting systems for clean water, and solar panels for sustainable energy in schools.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">How Your Donation is Used</h2>
        <div className="max-w-2xl mx-auto mb-6">
          <p className="text-lg text-gray-700 mb-3">
            We ensure your contribution is used efficiently and effectively to maximize impact. Here's a general breakdown:
          </p>
          <ul className="list-disc list-inside text-left mx-auto max-w-sm text-gray-700">
            <li className="mb-1">**70% Programs & Projects:** Direct funding for school initiatives, training, and resources.</li>
            <li className="mb-1">**20% Operational Costs:** Administrative support, outreach, and logistics to run our programs.</li>
            <li className="mb-1">**10% Capacity Building:** Research, development, and expansion of our sustainable solutions.</li>
          </ul>
        </div>
        <img src="/image_224838.jpg" alt="Impact of donations" className="mx-auto rounded-lg shadow-lg max-w-full h-auto md:max-w-xl" /> {/* Replace with an actual impactful image */}
      </section>

      <section className="mb-12 bg-green-700 text-white p-8 rounded-lg text-center shadow-lg">
        <h2 className="3xl font-bold mb-4">Ready to Make an Impact?</h2>
        <p className="text-xl mb-6">
          Your support, no matter the size, helps us build a brighter, more sustainable future for Uganda.
        </p>
        <button
          onClick={handleDonateClick}
          className="bg-white text-green-700 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-xl"
        >
          Donate Now
        </button>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Other Ways to Give</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-purple-700 mb-2">Monthly Giving</h3>
            <p className="text-gray-600 mb-3">
              Become a recurring donor and provide consistent support that allows us to plan long-term projects and sustain our efforts. It's easy to set up and manage.
            </p>
            <button
              onClick={handleDonateClick} // Or a specific handler for recurring if different
              className="text-purple-600 hover:underline font-medium"
            >
              Learn More about Monthly Giving
            </button>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-orange-700 mb-2">Corporate Partnerships</h3>
            <p className="text-gray-600 mb-3">
              Businesses can partner with us to support specific projects, engage in CSR initiatives, or contribute through employee matching programs.
            </p>
            <Link to="/contact" className="text-orange-600 hover:underline font-medium">
              Contact Us to Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;