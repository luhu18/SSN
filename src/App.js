import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Ensure BrowserRouter is imported

// --- ALL IMPORTS AT THE TOP ---
import Header from './components/Header';
import Footer from './components/Footer';
import DonationPopup from '../src/pages/DonationPopup'; // Ensure this file exists in src/components/

// Lazy-loaded page components (these paths are relative to 'src')
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'));
const ActivitiesPage = lazy(() => import('./pages/ActivitiesPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const DonatePage = lazy(() => import('./pages/DonatePage'));
const VolunteerPage = lazy(() => import('./pages/VolunteerPage'));
const NotFound = lazy(() => import('./pages/NotFound'));


// Loading component for Suspense fallback
const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
  </div>
);


function App() {
  const [showDonationPopup, setShowDonationPopup] = useState(false);
  const [initialPaymentMethod, setInitialPaymentMethod] = useState('');

  const openDonationPopup = (method = '') => {
    setInitialPaymentMethod(method);
    setShowDonationPopup(true);
  };

  const closeDonationPopup = () => {
    setShowDonationPopup(false);
    setInitialPaymentMethod('');
  };

  return (
    <BrowserRouter> {/* Use BrowserRouter directly */}
      <div className="font-sans text-gray-800 flex flex-col min-h-screen">
        <Header onDonateClick={openDonationPopup} />

        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/volunteer" element={<VolunteerPage />} />

              <Route
                path="/donate"
                element={<DonatePage openDonationPopup={openDonationPopup} />}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />

        {showDonationPopup && (
          <DonationPopup
            onClose={closeDonationPopup}
            initialMethod={initialPaymentMethod}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;