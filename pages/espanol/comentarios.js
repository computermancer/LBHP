import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import NavEspanol from '../../components/NavEspanol';

emailjs.init('-ElvYDuaUUsIy5Qpj'); // Your public key

const Comentarios = () => {
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
          console.log('Comentario enviado exitosamente:', response);
  
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
                console.log('Respuesta automática enviada exitosamente:', autoReplyResponse);
              },
              (autoReplyError) => {
                console.error('Error al enviar respuesta automática:', autoReplyError);
              }
            );
  
          setSuccess(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (err) => {
          console.error('Error al enviar comentario:', err);
          setError('Algo salió mal. Por favor, inténtalo de nuevo.');
        }
      );
  };

  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">

        <a> </a>

          <h1 className="text-orange-300 text-4xl font-bold mb-2">Contacto y Comentarios</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Comparte tus Pensamientos</h2>
          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-[500px] bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-700"
          >
            <label className="block mb-4 text-orange-300 text-xl">
              Nombre
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
              Correo Electrónico
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
              Mensaje
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
              Enviar
            </button>
            {success && (
              <p className="mt-4 text-green-400">¡Gracias! Tu mensaje ha sido enviado.</p>
            )}
            {error && (
              <p className="mt-4 text-red-400">{error}</p>
            )}
          </form>
        </div>
      </main>
    </>
  );
};

export default Comentarios;
