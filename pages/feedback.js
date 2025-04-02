import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a]">
      <a
        href="/"
        className="mb-9 px-4 py-2 bg-gray-700 text-orange-300 text-2xl rounded-lg hover:bg-gray-600 hover:text-orange-300"
      >
        ← Back to Home
      </a>

      <h1 className="text-3xl font-bold mb-6 text-orange-300">Contact and Feedback</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-700"
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
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-zinc-600 rounded-lg bg-zinc-700 text-white text-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-orange-400 text-black text-xl px-4 py-2 rounded-lg hover:bg-orange-300 transition-colors duration-200"
        >
          Send
        </button>
        {success && (
          <p className="mt-4 text-green-400">Thank you! Your message has been sent.</p>
        )}
        {error && (
          <p className="mt-4 text-red-400">{error}</p>
        )}
      </form>
    </div>
  );
};

export default Feedback;
