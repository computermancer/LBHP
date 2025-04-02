import Nav from './Nav';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function DrillTemplate({ 
  title, 
  videoUrl, 
  videoTimestamp,
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
      <Nav />
      <main className="p-8 text-white min-h-screen font-sans">
        <div className="mb-4">
          <button
            onClick={() => router.back()}
            className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-3xl font-bold py-2 px-4 rounded"
          >
            Week 2 - Day 4
          </button>
        </div>

        <h2 className="text-orange-300 text-3xl font-bold mb-6">{title}</h2>

        {/* Collapsible Video Section */}
        <div className="mb-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2"
          >
            {isOpen ? 'Hide Video' : 'Show Video'}
          </button>
          {isOpen && (
            <div className="mt-4">
              <iframe
                width="100%"
                height="315"
                src={`${videoUrl}?si=ag7LzQN-vqxK0DbX&amp;start=${videoTimestamp}`}
                title="Drill Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Setup:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            {setup.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Instructions:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            {instructions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Sets / Reps / Breath / Rest:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            {setsReps.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Feel:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            {whatToFeel.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Avoid:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            {whatToAvoid.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Red Flags:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            {redFlags.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Regression:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            {regression.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
} 