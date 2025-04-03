import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Nav from '../components/Nav';
import Link from 'next/link';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Replace with your EmailJS credentials
    const SERVICE_ID = 'service_8wz9oal';
    const TEMPLATE_ID_CU = 'template_j1w420r'; // Contact Us
    const TEMPLATE_ID_AR = 'template_pi8469a'; // Auto-Reply
    const PUBLIC_KEY = '-ElvYDuaUUsIy5Qpj';
  
    // Send feedback notification to yourself
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID_CU, formData, PUBLIC_KEY)
      .then(
        (response) => {
          console.log('Feedback sent successfully:', response);
  
          // Send auto-reply to the user
          emailjs
            .send(
              SERVICE_ID,
              TEMPLATE_ID_AR,
              {
                name: formData.name,
                email: formData.email,
                message: formData.message,
              },
              PUBLIC_KEY
            )
            .then(
              (autoReplyResponse) => {
                console.log('Auto-reply sent successfully:', autoReplyResponse);
              },
              (autoReplyError) => {
                console.error('Error sending auto-reply:', autoReplyError);
              }
            );
  
          setSuccess(true);
          setFormData({ name: '', email: '', message: '' });
          setSubmitted(true);
        },
        (err) => {
          console.error('Error sending feedback:', err);
          setError('Something went wrong. Please try again.');
        }
      );
  };
  

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          {!submitted && (
            <>
              <h1 className="text-orange-300 text-4xl font-bold mb-2">Feedback</h1>
              <h2 className="text-orange-300 text-xl font-semibold mb-4">Share Your Thoughts</h2>
            </>
          )}

          <div className="space-y-4">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 [&:-webkit-autofill]:bg-gray-700 [&:-webkit-autofill]:text-white [&:-webkit-autofill]:border-gray-600 [&:-webkit-autofill]:shadow-[0_0_0_30px_rgb(55,65,81)]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 [&:-webkit-autofill]:bg-gray-700 [&:-webkit-autofill]:text-white [&:-webkit-autofill]:border-gray-600 [&:-webkit-autofill]:shadow-[0_0_0_30px_rgb(55,65,81)]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-32 p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Share your thoughts about the program..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-400 hover:bg-orange-300 text-black text-xl font-semibold py-2 px-4 rounded"
                >
                  Submit Feedback
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <p className="text-orange-300 text-2xl font-bold mb-4">Thank you for your feedback!</p>
                <p className="text-gray-400 text-lg mb-8">Your input helps us improve the program.</p>
                <Link href="/" className="inline-block bg-orange-400 hover:bg-orange-300 text-black text-xl font-semibold py-2 px-8 rounded">
                  Back to Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feedback;
