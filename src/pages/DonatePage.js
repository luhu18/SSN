import React from 'react';

const DonatePage = () => {
  // Your GoFundMe campaign URL
  const goFundMeCampaignUrl = "https://www.gofundme.com/f/supporting-sustainable-schools-network-ssn";

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
            <li className="mb-1"><span className='font-bold text-blue-700'>70% Programs & Projects:</span> Direct funding for school initiatives, training, and resources.</li>
            <li className="mb-1"><span className='font-bold font-bold text-blue-700'>20% Operational Costs:</span> Administrative support, outreach, and logistics to run our programs.</li>
            <li className="mb-1"><span className='font-bold font-bold text-blue-700'>10% Capacity Building: </span>Research, development, and expansion of our sustainable solutions.</li>
          </ul>
        </div>
        <img src="images/Emporing Schools for a greener future.webp" alt="Impact of donations" className="mx-auto rounded-lg shadow-lg max-w-full h-auto md:max-w-xl" />
      </section>

      <section className="mb-12 bg-green-700 text-white p-8 rounded-lg text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
        <p className="text-xl mb-6">
          Your support, no matter the size, helps us build a brighter, more sustainable future for Uganda.
        </p>
        {/* Donation Button/Link */}
        <a
          href={goFundMeCampaignUrl}
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
          className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-green-100 transition duration-300 ease-in-out shadow-lg"
        >
          Donate on GoFundMe
        </a>
      </section>
    </div>
  );
};

export default DonatePage;