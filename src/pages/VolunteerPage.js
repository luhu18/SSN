import React, { useState } from 'react'; // Import useState
import PageHeader from '../components/PageHeader';

import Image from '../Assets/Gerden2.webp';
import Image2 from '../Assets/admin.webp';
import Image3 from '../Assets/working.webp';

// A common list of countries for the dropdown
const countries = [
  { value: '', label: 'Select your country' },
  { value: 'Uganda', label: 'Uganda' },
  { value: 'Kenya', label: 'Kenya' },
  { value: 'Tanzania', label: 'Tanzania' },
  { value: 'Rwanda', label: 'Rwanda' },
  { value: 'Burundi', label: 'Burundi' },
  { value: 'South Sudan', label: 'South Sudan' },
  { value: 'United States', label: 'United States' },
  { value: 'Canada', label: 'Canada' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'Germany', label: 'Germany' },
  { value: 'Australia', label: 'Australia' },
  { value: 'Other', label: 'Other' },
];

const VolunteerPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '', // NEW: State for country
    interests: [],
    availability: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => {
        const newInterests = checked
          ? [...prev.interests, value]
          : prev.interests.filter((interest) => interest !== value);
        return { ...prev, interests: newInterests };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Volunteer Application Submitted:', formData);
    // Here you would typically send formData to your backend API
    // Example:
     try {
      const response = await fetch('https://ssn-backend-y7lq.onrender.com/api/volunteer-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
       });
       const result = await response.json();
       if (response.ok) {
         alert('Application submitted successfully!');
         setFormData({ // Reset form
           firstName: '', lastName: '', email: '', phone: '', country: '',
           interests: [], availability: '', message: '',
         });
       } else {
         alert('Failed to submit application: ' + (result.message || 'Unknown error'));
       }
     } catch (error) {
       console.error('Error submitting volunteer application:', error);
       alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <PageHeader
        title="Volunteer With Us"
        description="Join our team and help create sustainable schools across Uganda"
        backgroundImage="/images/volunteer-header.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-green-700">How You Can Help</h2>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img src={Image} alt="Volunteer teaching students" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-green-600">Education & Training</h3>
                  <p className="text-lg mb-4">
                    Share your knowledge and skills by helping with environmental education workshops, teacher training, or student mentoring.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Lead workshops on environmental topics</li>
                    <li>Assist with curriculum development</li>
                    <li>Mentor students in eco-clubs</li>
                    <li>Support teacher training programs</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 md:order-2">
                  <img src={Image3} alt="Volunteer working in a garden" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                </div>
                <div className="md:w-2/3 md:order-1">
                  <h3 className="text-2xl font-semibold mb-4 text-green-600">Hands-on Projects</h3>
                  <p className="text-lg mb-4">
                    Get your hands dirty by helping with practical sustainability projects at our partner schools.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Help establish and maintain school gardens</li>
                    <li>Participate in tree planting events</li>
                    <li>Assist with cleanup campaigns</li>
                    <li>Support construction of rainwater harvesting systems</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img src={Image2} alt="Volunteer doing administrative work" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4 text-green-600">Administrative Support</h3>
                  <p className="text-lg mb-4">
                    Help behind the scenes with organizational tasks that keep our programs running smoothly.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Assist with grant writing and fundraising</li>
                    <li>Help with social media and communications</li>
                    <li>Support event planning and coordination</li>
                    <li>Contribute to monitoring and evaluation efforts</li>
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
            <h2 className="text-3xl font-bold mb-10 text-center text-green-700">Volunteer Application</h2>

            {/* Attach onSubmit handler to the form */}
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* NEW: Country Selection Field */}
              <div className="mb-6">
                <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Country of Residence</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  {countries.map((countryOption) => (
                    <option key={countryOption.value} value={countryOption.value}>
                      {countryOption.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="interests" className="block text-gray-700 font-medium mb-2">Areas of Interest</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="education"
                      name="interests" // Use the same name for checkboxes to group them for state
                      value="education"
                      checked={formData.interests.includes('education')}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="education">Education & Training</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="projects"
                      name="interests"
                      value="projects"
                      checked={formData.interests.includes('projects')}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="projects">Hands-on Projects</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="admin"
                      name="interests"
                      value="admin"
                      checked={formData.interests.includes('admin')}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="admin">Administrative Support</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="other"
                      name="interests"
                      value="other"
                      checked={formData.interests.includes('other')}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="availability" className="block text-gray-700 font-medium mb-2">Availability</label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="both">Both weekdays and weekends</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Why do you want to volunteer with us?</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteerPage;