import React, { useState } from 'react'; // Import useState
import PageHeader from '../components/PageHeader';

const ContactPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State for submission feedback
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFeedbackMessage(''); // Clear message on input change
  };

  // Basic email validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle form submission
  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    setFeedbackMessage(''); // Clear previous messages
    setMessageType('');

    // Client-side validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFeedbackMessage('All fields are required.');
      setMessageType('error');
      return;
    }
    if (!validateEmail(formData.email)) {
      setFeedbackMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }

    setIsSubmitting(true); // Disable button during submission

    try {
      // This is the endpoint your backend will need to provide
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFeedbackMessage(data.message || 'Your message has been sent successfully!');
        setMessageType('success');
        // Clear form fields
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setFeedbackMessage(data.message || 'Failed to send message. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setFeedbackMessage('An error occurred. Please check your connection and try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with the Sustainable Schools Network team"
        // Ensure this image exists in your public/images folder
        backgroundImage="/images/contact-header.jpg" 
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-green-700">Get In Touch</h2>

            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-6 text-green-600">Contact Information</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      {/* Updated address based on the current location context */}
                      <p className="text-gray-600">Kakuma, Turkana County, Kenya<br />Kampala, Uganda</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      {/* Updated phone numbers based on Footer */}
                      <p className="text-gray-600">Kenya: +254 7XX XXX XXX</p>
                      <p className="text-gray-600">Uganda: +256 783 605958</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">info@sustainable-schools-network.org</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-6 text-green-600">Follow Us</h3>
                <div className="flex space-x-4">
                  {/* Social Media Icons - Ensure these links are correct */}
                  <a href="https://facebook.com/yoursustainableschoolsnetwork" target="_blank" rel="noopener noreferrer" className="bg-green-100 text-green-600 p-3 rounded-full hover:bg-green-200 transition duration-300" aria-label="Facebook">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="https://twitter.com/yoursustainableschoolsnetwork" target="_blank" rel="noopener noreferrer" className="bg-green-100 text-green-600 p-3 rounded-full hover:bg-green-200 transition duration-300" aria-label="Twitter">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://instagram.com/yoursustainableschoolsnetwork" target="_blank" rel="noopener noreferrer" className="bg-green-100 text-green-600 p-3 rounded-full hover:bg-green-200 transition duration-300" aria-label="Instagram">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-6 text-green-600">Send Us a Message</h3>

                {/* Added onSubmit handler and state management to the form */}
                <form onSubmit={handleContactFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name" // Important for handleChange
                      value={formData.name} // Controlled component
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                      disabled={isSubmitting} // Disable during submission
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email" // Important for handleChange
                      value={formData.email} // Controlled component
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject" // Important for handleChange
                      value={formData.subject} // Controlled component
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message" // Important for handleChange
                      rows="5"
                      value={formData.message} // Controlled component
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  {/* Display feedback message */}
                  {feedbackMessage && (
                    <p className={`mt-2 text-sm ${messageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                      {feedbackMessage}
                    </p>
                  )}

                  <button
                  onClick={handleContactFormSubmit}
                    type="submit"
                    className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting} // Disable button during submission
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-green-700">Find Us</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
              {/* Replace with an actual map embed */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                {/* To embed a Google Map:
                  1. Go to Google Maps.
                  2. Search for your location (e.g., "Kampala, Uganda").
                  3. Click "Share" -> "Embed a map" -> Copy the HTML.
                  4. Paste the iframe src into the src attribute below.
                  Ensure you update the address and phone numbers in the Contact Info section as well,
                  as I've made assumptions based on the footer's content and current location context.
                */}
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d178.89782341226032!2d32.25050873698847!3d0.5282678712653968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x177cfd2cd22734e3%3A0x728ce0411c409f91!2sG7H2%2B76M%20Namayumba%20Cell%2C%20Namayumba%2C%20Uganda!3m2!1d0.5282167999999999!2d32.2505501!5e1!3m2!1sen!2ske!4v1751547347749!5m2!1sen!2ske"referrerpolicy="no-referrer-when-downgrade"
                   width="100%" 
                   height="100%" 
                   title='Our Location'
                   style={{ border: 0 }} // Use JSX style object for inline styles
                   allowFullScreen="" 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   aria-label="Google Map of Kampala, Uganda" // Added for accessibility
                 ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;