import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import { RiMastodonFill } from 'react-icons/ri';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMessage(''); // 
  };

  const validateEmail = (email) => {
    // Basic email regex for client-side validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    setMessageType('');

    if (!email) {
      setMessage('Please enter your email address.');
      setMessageType('error');
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }

    setIsSubmitting(true); // Disable button during submission

    try {
      // This is the endpoint your backend will need to provide
      const response = await fetch('https://ssn-backend-y7lq.onrender.com/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Thank you for subscribing!');
        setMessageType('success');
        setEmail(''); // Clear the email input on success
      } else {
        setMessage(data.message || 'Subscription failed. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error submitting newsletter form:', error);
      setMessage('An error occurred. Please check your connection and try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

  return (
    <footer className="bg-green-800 text-green-100 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Section 1: About/Mission */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sustainable Schools Network</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Empowering schools and communities in East Africa through environmental education, sustainable agriculture, and ecological restoration for a greener, healthier future.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="lg:text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/activities" className="hover:text-white transition-colors duration-200">Our Activities</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors duration-200">Our Programs</Link></li>
              <li><Link to="/donate" className="hover:text-white transition-colors duration-200">Donate</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors duration-200">Blogs</Link></li>
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <address className="not-italic space-y-3 text-sm">
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                Kiboga District, Lwamata Town Council, Lunnya Village, Uganda
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Uganda: +256 779763525<br/>
                Uganda: +256 783 605958
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@sustainable-schools-network.org
              </p>
            </address>
          </div>

          {/* Section 4: Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6 flex-wrap">
              {/* Social Media Icons */}
              <a href="https://www.facebook.com/profile.php?id=61571408173318" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-green-300 transition-colors duration-200">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* mastodon*/}
             <a
  href="https://mastodon.social/@ehsenvironmentalclub1" 
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Mastodon"
  className="text-white hover:text-green-300 transition-colors duration-200"
>
  {/* Use the FaMastodon component directly */}
  <RiMastodonFill className="w-7 h-7" />
</a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/sustainable-schools-network-ssn-1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-green-300 transition-colors duration-200">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 6.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.56-11.011-3.6z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/sustainableschools256?igsh=MWI5MzNobjlvNGF3cw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-green-300 transition-colors duration-200">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c3.203 0 3.58.016 4.85.071 1.17.053 1.83.255 2.227.408.47.182.895.424 1.297.828.404.404.646.828.828 1.297.153.397.355 1.057.408 2.227.055 1.27.071 1.647.071 4.85s-.016 3.58-.071 4.85c-.053 1.17-.255 1.83-.408 2.227-.182.47-.424.895-.828 1.297-.404.404-.646.828-.828 1.297-.153-.397-.355-1.057-.408-2.227-.055-1.27-.071-1.647-.071-4.85s.016-3.58.071-4.85c.053-1.17.255-1.83.408-2.227.182-.47.424-.895.828-1.297.404.404.828-.646 1.297-.828.397-.153 1.057-.355 2.227-.408C8.42 2.016 8.797 2 12 2zm0 3.6c-3.59 0-3.93.016-5.04.061-1.07.047-1.48.204-1.72.302-.27.114-.49.255-.66.425-.17.17-.31.39-.425.66-.098.24-.255.65-.302 1.72-.045 1.11-.061 1.45-.061 5.04s.016 3.93.061 5.04c.047 1.07.204 1.48.302 1.72.114.27.255.49.425.66.17.17.31.39.425.66.098.24.65.255 1.72.302 1.11.045 1.45.061 5.04.061s3.93-.016 5.04-.061c1.07-.047 1.48-.204 1.72-.302.114-.27.255-.49.425-.66.17-.17.39-.31.66-.425-.098-.24-.65-.255-1.72-.302C15.93 5.616 15.59 5.6 12 5.6zm0 2.4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm6.5-7.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com/@sustainableschoolsnetwork?si=8tbzREKIyp5IEO3p" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white hover:text-green-300 transition-colors duration-200">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.612 6.574A2.035 2.035 0 0018.175 5.1c-1.32-.36-6.6-.36-6.6-.36s-5.28 0-6.6.36a2.035 2.035 0 00-1.437 1.474C3.12 7.91 3.12 12 3.12 12s0 4.09 1.412 5.426c.38.41.9.65 1.438.706 1.32.36 6.6.36 6.6.36s5.28 0 6.6-.36a2.035 2.035 0 001.437-1.474C20.88 16.09 20.88 12 20.88 12s0-4.09-1.268-5.426zM10 15.025v-6.05l5.22 3.025-5.22 3.025z"/>
                </svg>
              </a>
               
            </div>

            <h3 className="text-lg font-semibold text-white mb-4">Newsletter Signup</h3>
            <p className="text-sm opacity-90 mb-4">Stay updated with our latest activities and impact stories.</p>
            {/* Added onSubmit handler and state management to the form */}
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:flex-grow px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
                value={email} // Controlled component
                onChange={handleEmailChange}
                required
                disabled={isSubmitting} // Disable input during submission
              />
              <button
               onClick={handleNewsletterSubmit}
                type="submit"
                className="w-full sm:w-auto bg-gray-900 text-white px-5 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting} // Disable button during submission
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {/* Display feedback message */}
            {message && (
              <p className={`mt-3 text-sm ${messageType === 'success' ? 'text-green-300' : 'text-red-300'}`}>
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-green-700 mt-12 pt-8 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} Sustainable Schools Network. All rights reserved.</p>
          <p>Made with <span role="img" aria-label="heart">❤️</span> for a greener future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;