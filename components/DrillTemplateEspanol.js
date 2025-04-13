import MainEspNavBar from './MainEspNavBar';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function DrillTemplateEspanol({ 
  title,
  backButtonText,
  videoId, 
  videoStart,
  setup,
  instructions,
  setsReps,
  whatToFeel,
  whatToAvoid,
  redFlags,
  regression
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MainEspNavBar />
      <main className="px-4 sm:px-8 text-white font-sans pt-24">
        <div className="max-w-[500px] mx-auto py-12">
          <div className="mb-4">
            <button
              onClick={() => router.back()}
              className="block w-full bg-primary-900 hover:bg-primary-800 text-primary-200 text-4xl font-bold py-2 px-4 rounded text-left transition-colors duration-200"
            >
              {backButtonText}
            </button>
          </div>

          <h2 className="text-primary-200 text-3xl font-bold mb-6">{title}</h2>

          {/* Collapsible Video Section */}
          <div className="mb-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-primary-900 hover:bg-primary-800 text-primary-200 text-xl font-semibold py-2 px-4 rounded mb-2 transition-colors duration-200"
            >
              {isOpen ? 'Ocultar Video' : 'Mostrar Video'}
            </button>
            {isOpen && videoId && (
              <div className="mt-4 relative w-full aspect-video rounded-lg overflow-hidden bg-primary-800">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?si=ag7LzQN-vqxK0DbX&amp;start=${videoStart || 0}`}
                  title="Video del Ejercicio"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          <section className="mb-6">
            <h3 className="text-primary-200 text-xl font-semibold mb-2">Preparación:</h3>
            <ul className="list-disc list-inside text-white text-lg space-y-2">
              {setup.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-primary-200 text-xl font-semibold mb-2">Instrucciones:</h3>
            <ul className="list-disc list-inside text-white text-lg space-y-2">
              {instructions.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-primary-200 text-xl font-semibold mb-2">Series / Repeticiones / Respiración / Descanso:</h3>
            <ul className="list-disc list-inside text-white text-lg space-y-2">
              {setsReps.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-primary-200 text-xl font-semibold mb-2">Qué Debes Sentir:</h3>
            <ul className="list-disc list-inside text-white text-lg space-y-2">
              {whatToFeel.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-primary-200 text-xl font-semibold mb-2">Qué Debes Evitar:</h3>
            <ul className="list-disc list-inside text-white text-lg space-y-2">
              {whatToAvoid.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-primary-200 text-xl font-semibold mb-2">Banderas Rojas:</h3>
            <ul className="list-disc list-inside text-white text-lg space-y-2">
              {redFlags.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-primary-200 text-xl font-semibold mb-2">Regresión:</h3>
            <ul className="list-disc list-inside text-white text-lg space-y-2">
              {regression.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}