import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { XMarkIcon } from '@heroicons/react/24/solid';

const DonationPopup = ({ onClose, initialMethod }) => {
  const [method, setMethod] = useState(initialMethod || '');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // Specific for M-Pesa
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); // For user feedback (success/error)

  const PAYPAL_CLIENT_ID = 'AfoBCl61mo1G8VpDX-t6-bfFrQsaWKQceiNbPnjAKLWoj-_3eZ-vS886rMpswG9JH1YymmRIzMgQdHPY'; // Example client ID, replace with your own!

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    if (initialMethod) {
      setMethod(initialMethod);
    }
    setMessage('');
  }, [initialMethod]);

  // IMPORTANT FIX: isValid now only returns a boolean, no state updates!
  const isValid = () => {
    if (!amount || parseFloat(amount) <= 0 || !name.trim()) {
      return false;
    }
    if (method !== 'MPesa' && !email.trim()) {
      return false;
    }
    if (method === 'MPesa' && (!phone.trim() || !/^\+?\d{9,15}$/.test(phone.trim()))) {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    // Moved message setting based on validation to handleSubmit
    if (!isValid()) {
      // Only set message if validation fails, and only when submit is attempted
      if (!amount || parseFloat(amount) <= 0 || !name.trim()) {
          setMessage('Please enter a valid amount and your name.');
      } else if (method !== 'MPesa' && !email.trim()) {
          setMessage('Please enter your email address.');
      } else if (method === 'MPesa' && (!phone.trim() || !/^\+?\d{9,15}$/.test(phone.trim()))) {
          setMessage('Please enter a valid M-Pesa phone number (e.g., 2547XXXXXXXX).');
      } else {
          setMessage('Please fill all required fields.'); // Fallback if other specific messages don't match
      }
      return;
    }

    setLoading(true);
    setMessage(''); // Clear previous messages before new attempt

    try {
      let res;
      if (method === 'Flutterwave') {
        res = await axios.post('http://localhost:8081/api/flutterwave/pay', { name, email, amount: parseFloat(amount) });
        window.location.href = res.data.paymentLink;
      } else if (method === 'MPesa') {
        res = await axios.post('http://localhost:8081/api/mpesa/stkpush', { phone, amount: parseFloat(amount) });
        setMessage(res.data.message);
      } else if (method === 'Stripe') {
        res = await axios.post('http://localhost:8081/api/stripe/create-checkout-session', { name, email, amount: parseFloat(amount) });
        window.location.href = res.data.url;
      } else if (method === 'PayPal') {
        setMessage('Please use the PayPal button below to complete your donation.');
      }
    } catch (error) {
      console.error('Donation submission error:', error.response ? error.response.data : error.message);
      setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg relative animate-fade-in-up max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors z-10"
          aria-label="Close donation popup"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-3xl font-extrabold text-green-700 text-center mb-4">Make a Donation</h2>
        <p className="text-center text-gray-600 mb-6">Support SSN by donating securely via your preferred method.</p>

        {message && (
          <div className={`p-3 rounded-md text-sm mb-4 text-center ${
            message.includes('success') ? 'bg-green-100 text-green-700' :
            message.includes('error') || message.includes('valid') || message.includes('fill') ? 'bg-red-100 text-red-700' :
            'bg-blue-100 text-blue-700'
          }`}>
            {message}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="method" className="block text-sm font-medium text-gray-700 mb-1">Select Payment Method</label>
          <select
            id="method"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            value={method}
            onChange={(e) => {
              setMethod(e.target.value);
              setMessage(''); // Clear message on method change
            }}
          >
            <option value="">-- Choose Method --</option>
            <option value="Flutterwave">Flutterwave</option>
            <option value="MPesa">MPesa</option>
            <option value="Stripe">Stripe</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>

        {method && (
          <>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Lucien Hussein"
                value={name}
                onChange={(e) => { setName(e.target.value); setMessage(''); }}
                required
              />
            </div>

            {method !== 'MPesa' && (
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  type="email"
                  placeholder="hussein@example.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setMessage(''); }}
                  required={method !== 'MPesa'}
                />
              </div>
            )}

            {method === 'MPesa' && (
               <div className="mb-4">
    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (M-Pesa)</label>
    <input
      id="phone"
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
      placeholder="e.g., 07XXXXXXXX or +2547XXXXXXXX" // More explicit placeholder
      value={phone}
      onChange={(e) => {
        // Automatically clean the input: allow digits and an optional leading '+'
        const cleanedValue = e.target.value.replace(/[^0-9+]/g, '');
        // Ensure '+' only appears at the very beginning if present
        if (cleanedValue.startsWith('+')) {
          setPhone('+' + cleanedValue.slice(1).replace(/\+/g, ''));
        } else {
          setPhone(cleanedValue);
        }
        setMessage(''); // Clear message on input change
      }}
      required={method === 'MPesa'}
      type="tel"
      pattern="^(07\d{8}|\+2547\d{8})$"
      title="Enter a valid M-Pesa number: 07XXXXXXXX or +2547XXXXXXXX"
      inputMode="numeric" 
      maxLength="13" 
      minLength="10" 
    />
  </div>
            )}

            <div className="mb-6">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
              <input
                id="amount"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                type="number"
                placeholder="e.g., 100"
                value={amount}
                onChange={(e) => { setAmount(e.target.value); setMessage(''); }}
                required
                min="1"
              />
            </div>
          </>
        )}

        {method && method !== 'PayPal' && (
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              disabled={loading || !isValid()} // isValid() no longer causes a re-render loop
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <span className="animate-spin h-5 w-5 mr-3 border-b-2 border-white rounded-full" role="status" aria-hidden="true"></span>
              ) : (
                `Donate with ${method}`
              )}
            </button>
          </div>
        )}

        {method === 'PayPal' && (
          <div className="mt-6 p-4 border border-gray-200 rounded-md bg-gray-50">
            <p className="text-center text-gray-700 mb-3">Click the PayPal button below to proceed:</p>
            <PayPalScriptProvider options={{ 'client-id': PAYPAL_CLIENT_ID }}>
              <PayPalButtons
                style={{ layout: 'horizontal', color: 'blue', shape: 'pill' }}
                createOrder={(data, actions) => {
                  if (!isValid()) {
                    setMessage('Please fill in Name and Amount before proceeding with PayPal.');
                    return actions.reject();
                  }
                  return actions.order.create({
                    purchase_units: [{
                      amount: {
                        currency_code: 'USD',
                        value: amount || '1.00',
                      },
                    }],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    setMessage(`Donation successful! Thank you, ${details.payer.name.given_name}!`);
                    console.log('PayPal transaction details:', details);
                    // You might want to send this success to your backend for recording
                    // axios.post('/api/paypal/success', { orderId: data.orderID, payerId: data.payerID, details });
                  }).finally(() => {
                    setTimeout(() => onClose(), 2000);
                  });
                }}
                onError={(err) => {
                  setMessage('An error occurred with PayPal. Please try again.');
                  console.error('PayPal error:', err);
                }}
                onCancel={(data) => {
                  setMessage('PayPal transaction cancelled.');
                  console.log('PayPal cancelled:', data);
                }}
              />
            </PayPalScriptProvider>
          </div>
        )}

        <p className="text-center text-gray-500 mt-6 text-sm">Secure payment via Stripe, M-Pesa, Flutterwave, and PayPal.</p>
      </div>
    </div>
  );
};

export default DonationPopup;
