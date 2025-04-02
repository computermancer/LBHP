import Nav from '../../../components/Nav';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function GentleBilateralRocking() {{
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav />
      <main className="p-8 text-white min-h-screen font-sans">
        
        <div className="mb-4">
          <button
            onClick={() => router.back()}
            className="block w-[700px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-3xl font-bold py-2 px-4 rounded text-left"
          >
            Week 1 - Day 3
          </button>
        </div>

        <h2 className="text-orange-300 text-3xl font-bold mb-6">Drill 5: Gentle Bilateral Rocking</h2>

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
                src="https://www.youtube.com/embed/wn0IyvGBeUI?si=ag7LzQN-vqxK0DbX&amp;start=2248"
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
            <li>Lie on your back with knees bent, feet flat on the floor.</li>
<li>Arms resting comfortably by your sides.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Instructions:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Gently rock both knees side to side.</li>
<li>Move within a comfortable range of motion.</li>
<li>Return to center before switching sides.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Sets / Reps / Breath / Rest:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Sets: 2–3</li>
            <li>Reps: 8–10 slow rocks per side</li>
            <li>Breath: Inhale at center, exhale as you rock</li>
            <li>Rest: As needed</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Feel:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Gentle mobility through the pelvis and lower back</li>
<li>Relaxed movement with control</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Avoid:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Forcing the knees too far</li>
<li>Tension through the spine</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Red Flags:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Sharp pain or discomfort</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Regression:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Reduce range of motion if needed.</li>
          </ul>
        </section>
      </main>
    </>
  );
}}
