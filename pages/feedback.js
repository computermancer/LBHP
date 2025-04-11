import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import WeekLayout from '../components/WeekLayout';

emailjs.init('-ElvYDuaUUsIy5Qpj'); // Your public key

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
        },
        (err) => {
          console.error('Error sending feedback:', err);
          setError('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-zinc-900">
      <WeekLayout
        title="Contact and Feedback"
        subtitle="Get in Touch"
      >
        <div className="space-y-6">
          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-[500px] bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-700"
          >
            <label className="block mb-4 text-orange-300 text-xl">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-zinc-600 rounded-lg bg-zinc-700 text-white text-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </label>
            <label className="block mb-4 text-orange-300 text-xl">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-zinc-600 rounded-lg bg-zinc-700 text-white text-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </label>
            <label className="block mb-4 text-orange-300 text-xl">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-zinc-600 rounded-lg bg-zinc-700 text-white text-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
              ></textarea>
            </label>
            <button
              type="submit"
              className="w-full bg-gray-700 hover:bg-gray-600 text-orange-300 font-bold py-2 px-4 rounded-lg text-xl transition-colors duration-200 border border-gray-600"
            >
              Send Message
            </button>
            {success && (
              <p className="mt-4 text-green-400 text-base">
                Thank you for your feedback! We'll get back to you soon.
              </p>
            )}
            {error && (
              <p className="mt-4 text-red-400 text-base">
                {error}
              </p>
            )}
          </form>
        </div>
      </WeekLayout>
    </div>
  );
};

export default Feedback;
