import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';

import Image from '../Assets/School Gardening days-2.webp'; // Ensure this path is correct
import Image2 from '../Assets/Organic Farming 1st tile.webp'; // Ensure this path is correct
import Image3 from '../Assets/Emporing Schools for a greener future.webp'; // Ensure this path is correct

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

// Custom message component for displaying success/error messages
const MessageDisplay = ({ message, type, onClose }) => {
  if (!message) return null; // Don't render if there's no message
  
  // Determine background and text color based on message type using Tailwind CSS classes
  const bgColorClass = type === 'error' ? 'bg-red-100' : 'bg-green-100';
  const textColorClass = type === 'error' ? 'text-red-700' : 'text-green-700';

  return (
    <div className={`p-3 rounded-md mb-4 text-sm text-center ${bgColorClass} ${textColorClass}`}>
      <p>{message}</p>
      {/* Optional: button if you want users to dismiss the message manually */}
      {/* <button onClick={onClose} className="float-right text-lg font-bold">&times;</button> */}
    </div>
  );
};

// Main VolunteerPage component
const VolunteerPage = () => {
  // State for all form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    residence: '', // Country of Residence
    areaOfInterests: [], // Array for checkboxes
    availability: '',
    reason: '',
  });

  // State for displaying submission messages (success/error)
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  // State for managing loading status during form submission
  const [isLoading, setIsLoading] = useState(false);

  // useEffect hook to automatically clear messages after a set duration
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000); // Message visible for 5 seconds (5000 milliseconds)
      return () => clearTimeout(timer); // Cleanup function to clear the timer
    }
  }, [message]); // Dependency array: runs whenever 'message' state changes

  // Handler for all form input changes
  const handleChange = (e) => {
    // Clear any existing messages when the user starts typing/changing input
    setMessage('');
    setMessageType('');

    const { name, value, type, checked } = e.target;

    // Special handling for checkbox inputs (Area of Interests)
    if (type === 'checkbox') {
      setFormData((prev) => {
        const newInterests = checked
          ? [...prev.areaOfInterests, value] // Add value if checkbox is checked
          : prev.areaOfInterests.filter((interest) => interest !== value); // Remove value if unchecked
        return { ...prev, areaOfInterests: newInterests };
      });
    } else {
      // Standard handling for text, email, tel, select, textarea inputs
      setFormData((prev) => ({
        ...prev,
        [name]: value, // Update the specific field based on its 'name' attribute
      }));
    }
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    // Clear any previous messages before a new submission attempt
    setMessage('');
    setMessageType('');
    setIsLoading(true); // Set loading state to true (show spinner, disable form)

    try {
      // Simulate network latency for better UX during development (remove in production)
      await new Promise(resolve => setTimeout(resolve, 500));

      // Send form data to the backend API
      const response = await fetch('https://ssn-backend.vercel.app/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert formData object to JSON string
      });

      const result = await response.json(); // Parse the JSON response from the backend

      // Check if the HTTP response status is OK (200-299)
      if (response.ok) {
        // Set success message and type
        setMessage(result.message || 'Application submitted successfully! We will get back to you soon.');
        setMessageType('success');
        
        // Reset form fields only on successful submission
        setFormData({
          name: '', email: '', phone: '', residence: '',
          areaOfInterests: [], availability: '', reason: '',
        });
      } else {
        // Handle API errors (e.g., validation errors sent from backend with non-2xx status)
        setMessage(result.message || 'Failed to submit application. Please check your inputs and try again.');
        setMessageType('error');
      }
    } catch (error) {
      // Handle network errors (e.g., server unreachable, no internet connection)
      console.error('Error submitting volunteer application:', error);
      setMessage('An unexpected error occurred. Please check your internet connection and try again.');
      setMessageType('error');
    } finally {
      setIsLoading(false); // Always set loading state to false after the attempt (success or failure)
    }
  };

  return (
    <>
      {/* Page Header section */}
      <PageHeader
        title="Volunteer With Us"
        description="Join our team and help create sustainable schools across Uganda"
        backgroundImage="/images/ssn_dot.svg"
        isPattern={true}
      />

      {/* Section: How You Can Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-green-700">How You Can Help</h2>

            <div className="space-y-12">
              {/* Education & Training */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img src={Image} alt="Volunteer teaching students" className="rounded-lg shadow-lg w-full h-auto object-cover" 
                  loading='lazy'/>
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

              {/* Hands-on Projects */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 md:order-2">
                  <img src={Image3} alt="Volunteer working in a garden" className="rounded-lg shadow-lg w-full h-auto object-cover" loading='lazy'/>
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

              {/* Administrative Support */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img src={Image2} alt="Volunteer doing administrative work" className="rounded-lg shadow-lg w-full h-auto object-cover" loading='lazy' />
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

      {/* Section: Volunteer Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-green-700">Volunteer Application</h2>

            {/* Message Display for form submission status */}
            <MessageDisplay message={message} type={messageType} onClose={() => setMessage('')} />

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* First Name Input */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                    disabled={isLoading} // Disable input during loading
                  />
                </div>

                {/* Email Address Input */}
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
                    disabled={isLoading} // Disable input during loading
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Phone Number Input */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    disabled={isLoading} // Disable input during loading
                  />
                </div>
                {/* Country of Residence Select */}
                <div className="mb-6">
                  <label htmlFor="residence" className="block text-gray-700 font-medium mb-2">Country of Residence</label>
                  <select
                    id="residence"
                    name="residence"
                    value={formData.residence}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                    disabled={isLoading} // Disable select during loading
                  >
                    {countries.map((countryOption) => (
                      <option key={countryOption.value} value={countryOption.value}>
                        {countryOption.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Areas of Interest Checkboxes */}
              <div className="mb-6">
                <label htmlFor="interests" className="block text-gray-700 font-medium mb-2">Areas of Interest</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="education"
                      name="interests"
                      value="education"
                      checked={formData.areaOfInterests.includes('education')}
                      onChange={handleChange}
                      className="mr-2"
                      disabled={isLoading} // Disable checkbox during loading
                    />
                    <label htmlFor="education">Education & Training</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="projects"
                      name="interests"
                      value="projects"
                      checked={formData.areaOfInterests.includes('projects')}
                      onChange={handleChange}
                      className="mr-2"
                      disabled={isLoading} // Disable checkbox during loading
                    />
                    <label htmlFor="projects">Hands-on Projects</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="admin"
                      name="interests"
                      value="admin"
                      checked={formData.areaOfInterests.includes('admin')}
                      onChange={handleChange}
                      className="mr-2"
                      disabled={isLoading} // Disable checkbox during loading
                    />
                    <label htmlFor="admin">Administrative Support</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="other"
                      name="interests"
                      value="other"
                      checked={formData.areaOfInterests.includes('other')}
                      onChange={handleChange}
                      className="mr-2"
                      disabled={isLoading} // Disable checkbox during loading
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
              </div>

              {/* Availability Select */}
              <div className="mb-6">
                <label htmlFor="availability" className="block text-gray-700 font-medium mb-2">Availability</label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                  disabled={isLoading} // Disable select during loading
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="both">Both weekdays and weekends</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {/* Reason for Volunteering Textarea */}
              <div className="mb-6">
                <label htmlFor="reason" className="block text-gray-700 font-medium mb-2">Why do you want to volunteer with us?</label>
                <textarea
                  id="reason"
                  name="reason"
                  rows="5"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                  disabled={isLoading} // Disable textarea during loading
                ></textarea>
              </div>

              {/* Submit Button with Loading Spinner */}
              <button
                type="submit"
                className="w-full bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center" // Added flex, items-center, justify-center for spinner alignment
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? ( // Conditional rendering for spinner or text
                  <>
                    {/* Tailwind CSS based spinner */}
                    <span className="animate-spin h-5 w-5 mr-3 border-b-2 border-white rounded-full" role="status" aria-hidden="true"></span>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default VolunteerPage;
