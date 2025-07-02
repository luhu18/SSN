import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const DonationPopup = ({ onClose, initialMethod }) => {
  // State variables to manage form inputs and UI feedback
  const [selectedMethod, setSelectedMethod] = useState(initialMethod || '');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('UGX'); // State for selected currency, defaults to UGX
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donationFrequency, setDonationFrequency] = useState('one-time'); // 'one-time' or 'monthly'
  const [feedback, setFeedback] = useState({ message: '', type: '' }); // For success/error messages

  // --- Currency Data ---
  // Array of popular currencies for the dropdown
  const currencies = [
    { value: 'UGX', label: 'Ugandan Shilling (UGX)' },
    { value: 'KES', label: 'Kenyan Shilling (KES)' },
    { value: 'TZS', label: 'Tanzanian Shilling (TZS)' },
    { value: 'USD', label: 'US Dollar (USD)' },
    { value: 'EUR', label: 'Euro (EUR)' },
    { value: 'GBP', label: 'British Pound (GBP)' },
    // Add more currencies here if needed
  ];

  // --- useEffect Hook for Body Scroll Lock ---
  // Prevents background scrolling when the popup is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scroll on mount
    return () => {
      document.body.style.overflow = 'unset'; // Re-enable scroll on unmount (popup close)
    };
  }, []); // Empty dependency array ensures this runs only once on mount and unmount

  // --- useEffect Hook for Initial Payment Method and Feedback Reset ---
  // Sets the initial payment method if provided and valid, and resets feedback
  useEffect(() => {
    const validMethods = ['M-Pesa', 'Flutterwave', 'Stripe', 'PayPal'];
    if (initialMethod && validMethods.includes(initialMethod)) {
      setSelectedMethod(initialMethod);
    } else {
      setSelectedMethod(''); // Clear if an invalid initial method is passed
    }
    setFeedback({ message: '', type: '' }); // Clear feedback when popup state changes
  }, [initialMethod]); // Reruns if initialMethod prop changes

  // --- Handlers for Input Changes ---

  // Handles changes for the donation amount input
  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Allows only empty string or numbers (integers or decimals)
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
    setFeedback({ message: '', type: '' }); // Clear feedback on any input change
  };

  // Handles changes for the currency dropdown selection
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    setFeedback({ message: '', type: '' }); // Clear feedback on currency change
  };

  // Handles changes for the donation frequency radio buttons
  const handleFrequencyChange = (e) => {
    setDonationFrequency(e.target.value);
    setFeedback({ message: '', type: '' }); // Clear feedback on frequency change
  };

  // Handles the main form submission for payment processing
  const handlePaymentSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setFeedback({ message: '', type: '' }); // Clear previous feedback messages

    // --- Form Validation ---
    if (!amount || parseFloat(amount) <= 0) {
      setFeedback({ message: 'Please enter a valid donation amount.', type: 'error' });
      return;
    }
    if (!currency) { // Ensure a currency has been selected
      setFeedback({ message: 'Please select a currency.', type: 'error' });
      return;
    }
    if (!selectedMethod) { // Ensure a payment method has been selected
      setFeedback({ message: 'Please select a payment method.', type: 'error' });
      return;
    }

    // Log data for debugging/development purposes
    console.log(`Initiating ${donationFrequency} donation of ${currency} ${amount} via ${selectedMethod}...`);

    try {
      // --- Backend API Call (Simulated) ---
      // In a real application, replace this with your actual backend endpoint
      // and ensure the data sent matches what your API expects.
      const response = await fetch('/api/process-donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount), // Convert amount to a number
          currency: currency,          // Send the selected currency
          paymentMethod: selectedMethod,
          donationFrequency: donationFrequency,
          donorInfo: {
            name: donorName,
            email: donorEmail,
          },
        }),
      });

      const data = await response.json(); // Parse the JSON response from the backend

      if (response.ok) { // Check if the response status is 2xx (success)
        setFeedback({ message: data.message || 'Donation initiated successfully! Thank you for your support.', type: 'success' });
        // Optionally close the popup after a delay to allow the user to read the success message
        setTimeout(() => {
          onClose(); // Call the onClose prop to close the popup
        }, 3000); // Close after 3 seconds
      } else {
        // Handle server-side errors
        setFeedback({ message: data.message || 'Donation failed: An unknown error occurred.', type: 'error' });
        console.error('Backend error:', data);
      }
    } catch (error) {
      // Handle network or other client-side errors
      console.error('Error sending donation request to backend:', error);
      setFeedback({ message: 'An error occurred during the donation process. Please try again.', type: 'error' });
    }
  };

  // --- Render Payment Method Specific Information ---
  // Displays instructions based on the selected payment method
  const renderPaymentMethodInfo = () => {
    // Format the amount for display with the selected currency
    const amountDisplay = `${amount || '0'} ${currency}`;

    switch (selectedMethod) {
      case 'M-Pesa':
        return (
          <div className="bg-green-50 p-4 rounded-md text-green-800">
            <h4 className="font-semibold mb-2">M-Pesa Instructions (Kenya):</h4>
            {donationFrequency === 'monthly' && (
              <p className="mb-2 text-sm text-red-700 font-medium">
                *For monthly M-Pesa donations, please set up a standing order or remember to make a manual transfer each month. We will follow up with details.*
              </p>
            )}
            <p className="mb-1">Follow these steps to donate via M-Pesa:</p>
            <ol className="list-decimal list-inside ml-2 mt-2 space-y-1">
              <li>Go to your M-Pesa menu.</li>
              <li>Select **"Lipa Na M-Pesa"**.</li>
              <li>Select **"Pay Bill"**.</li>
              <li>Enter Business No.: <span className="font-bold text-lg">XXXXXX</span> (Replace with your actual Pay Bill Number)</li>
              <li>Enter Account No.: <span className="font-bold text-lg">SSN_DONATION</span> (Or your organization's specific account identifier)</li>
              <li>Enter Amount: <span className="font-bold text-lg">{amountDisplay}</span></li> {/* Displays amount with selected currency */}
              <li>Enter your M-Pesa PIN and Confirm.</li>
            </ol>
            <p className="mt-3 text-sm font-medium">
              *You will receive an M-Pesa confirmation SMS. Your generosity is deeply appreciated!*
            </p>
            <p className="mt-2 text-xs italic text-gray-600">
                Note: M-Pesa transactions are primarily in KES. If you selected a different currency, please ensure conversion is handled on your end.
            </p>
          </div>
        );
      case 'Flutterwave':
        return (
          <div className="bg-blue-50 p-4 rounded-md text-blue-800">
            <h4 className="font-semibold mb-2">Flutterwave Payment:</h4>
            <p className="mb-2 text-sm">
              You will be securely redirected to Flutterwave's payment gateway to complete your {donationFrequency} transaction for **{amountDisplay}**. Flutterwave supports various payment methods including cards, mobile money, and bank transfers across Africa.
            </p>
            {donationFrequency === 'monthly' && (
              <p className="text-sm font-medium text-blue-700">
                *You will set up the recurring monthly payment on the Flutterwave secure payment gateway.*
              </p>
            )}
            <p className="text-xs italic text-gray-600 mt-2">
              This ensures compliance and secure handling of payment information.
            </p>
          </div>
        );
      case 'Stripe':
        return (
          <div className="bg-purple-50 p-4 rounded-md text-purple-800">
            <h4 className="font-semibold mb-2">Stripe Payment:</h4>
            <p className="mb-2 text-sm">
              You will be securely redirected to Stripe's payment gateway to complete your {donationFrequency} transaction for **{amountDisplay}** using your credit or debit card. Stripe is a leading global payment processor.
            </p>
            {donationFrequency === 'monthly' && (
              <p className="text-sm font-medium text-purple-700">
                *You will set up the recurring monthly payment on the Stripe secure payment page.*
              </p>
            )}
            <p className="text-xs italic text-gray-600 mt-2">
              All card details are handled directly by Stripe, ensuring maximum security (PCI DSS compliant).
            </p>
          </div>
        );
      case 'PayPal':
        return (
          <div className="bg-indigo-50 p-4 rounded-md text-indigo-800">
            <h4 className="font-semibold mb-2">PayPal Payment:</h4>
            <p className="mb-2 text-sm">
              You will be redirected to PayPal's secure website to complete your {donationFrequency} donation for **{amountDisplay}**. Please note that PayPal may handle transactions in USD or other major currencies, with conversion if applicable.
            </p>
            {donationFrequency === 'monthly' && (
              <p className="text-sm font-medium text-indigo-700">
                *You will set up the recurring monthly payment on the PayPal platform.*
              </p>
            )}
          </div>
        );
      default:
        return (
          <p className="text-gray-600 italic text-center">Please select a payment method above to see instructions.</p>
        );
    }
  };

  return (
    // Outer div for the modal overlay
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      {/* Inner div for the modal content */}
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative animate-fade-in-up flex flex-col max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors z-10"
          aria-label="Close donation popup"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Make a Donation</h2>

        <form onSubmit={handlePaymentSubmit} className="flex-grow flex flex-col">
          {/* Feedback Message (Success/Error) */}
          {feedback.message && (
            <div className={`py-2 px-4 rounded-md text-center text-sm mb-4
              ${feedback.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {feedback.message}
            </div>
          )}

          {/* Donation Amount and Currency Selection Inputs */}
          <div className="mb-4 flex flex-col sm:flex-row sm:space-x-4">
            {/* Donation Amount Input */}
            <div className="flex-1 mb-4 sm:mb-0">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Donation Amount</label>
              <input
                type="text" // Using text to allow for more flexible input handling (e.g., empty string)
                inputMode="numeric" // Suggests numeric keyboard on mobile devices
                pattern="[0-9]*\.?[0-9]*" // Basic regex for numbers with optional decimal
                id="amount"
                name="amount"
                value={amount}
                onChange={handleAmountChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="e.g., 50000"
                required
              />
            </div>
            {/* Currency Dropdown Selection */}
            <div className="flex-1">
              <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
              <select
                id="currency"
                name="currency"
                value={currency}
                onChange={handleCurrencyChange} // Event handler for currency selection
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              >
                {currencies.map((curr) => (
                  <option key={curr.value} value={curr.value}>
                    {curr.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Donation Frequency Selection (Radio Buttons) */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Donation Frequency:</label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-green-600 h-4 w-4"
                  name="donationFrequency"
                  value="one-time"
                  checked={donationFrequency === 'one-time'}
                  onChange={handleFrequencyChange}
                />
                <span className="ml-2 text-gray-800">One-time</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-green-600 h-4 w-4"
                  name="donationFrequency"
                  value="monthly"
                  checked={donationFrequency === 'monthly'}
                  onChange={handleFrequencyChange}
                />
                <span className="ml-2 text-gray-800">Monthly</span>
              </label>
            </div>
          </div>

          {/* Donor Information (Optional) - Name and Email */}
          <div className="mb-4">
            <label htmlFor="donorName" className="block text-sm font-medium text-gray-700 mb-1">Your Name (Optional)</label>
            <input
              type="text"
              id="donorName"
              name="donorName"
              value={donorName}
              onChange={(e) => { setDonorName(e.target.value); setFeedback({ message: '', type: '' }); }}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Lucien Hussein"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="donorEmail" className="block text-sm font-medium text-gray-700 mb-1">Your Email (Optional)</label>
            <input
              type="email"
              id="donorEmail"
              name="donorEmail"
              value={donorEmail}
              onChange={(e) => { setDonorEmail(e.target.value); setFeedback({ message: '', type: '' }); }}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>

          {/* Payment Method Selection Buttons */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Choose Payment Method:</label>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => { setSelectedMethod('M-Pesa'); setFeedback({ message: '', type: '' }); }}
                className={`flex items-center justify-center px-4 py-3 rounded-md transition-colors duration-200 text-base font-medium shadow-sm
                  ${selectedMethod === 'M-Pesa' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                `}
              >
                M-Pesa
              </button>
              <button
                type="button"
                onClick={() => { setSelectedMethod('Flutterwave'); setFeedback({ message: '', type: '' }); }}
                className={`flex items-center justify-center px-4 py-3 rounded-md transition-colors duration-200 text-base font-medium shadow-sm
                  ${selectedMethod === 'Flutterwave' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                `}
              >
                Flutterwave
              </button>
              <button
                type="button"
                onClick={() => { setSelectedMethod('Stripe'); setFeedback({ message: '', type: '' }); }}
                className={`flex items-center justify-center px-4 py-3 rounded-md transition-colors duration-200 text-base font-medium shadow-sm
                  ${selectedMethod === 'Stripe' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                `}
              >
                Stripe
              </button>
              <button
                type="button"
                onClick={() => { setSelectedMethod('PayPal'); setFeedback({ message: '', type: '' }); }}
                className={`flex items-center justify-center px-4 py-3 rounded-md transition-colors duration-200 text-base font-medium shadow-sm
                  ${selectedMethod === 'PayPal' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                `}
              >
                PayPal
              </button>
            </div>
          </div>

          {/* Area to display payment method specific instructions/details */}
          <div className="mb-6">
            {renderPaymentMethodInfo()}
          </div>

          {/* Main Submit Button for the form */}
          <button
            type="submit"
            // Button is disabled if amount is invalid, or if no method/currency is selected
            className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold mt-auto"
            disabled={!amount || parseFloat(amount) <= 0 || !selectedMethod || !currency}
          >
            Confirm & Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPopup;