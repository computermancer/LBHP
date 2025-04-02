import Nav from '../../../components/Nav';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Drill2LateralLungeswithBreathControl() {{
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
            Week 5 - Day 2
          </button>
        </div>

        <h2 className="text-orange-300 text-3xl font-bold mb-6">Drill 2: Lateral Lunges with Breath Control</h2>

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
<li>Stand with feet hip-width apart, hands on hips or extended forward.</li>
<li>Shift weight to one side, bending the knee.</li>
        </ul>
      </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Instructions:</h3>
        <ul className="list-disc list-inside text-white text-lg">
<li>Inhale to prepare.</li>
<li>Exhale and shift weight laterally, lowering into a lunge.</li>
<li>Inhale and return to center.</li>
<li>Switch sides and repeat.</li>
        </ul>
      </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Sets / Reps / Breath / Rest:</h3>
        <ul className="list-disc list-inside text-white text-lg">
<li>Sets: 2–3</li>
<li>Reps: 8–10 per side</li>
<li>Breath: Exhale to lower, inhale to return</li>
<li>Rest: 30–45 seconds between sets</li>
        </ul>
      </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Feel:</h3>
        <ul className="list-disc list-inside text-white text-lg">
<li>Glute and adductor engagement</li>
<li>Control and balance while shifting</li>
        </ul>
      </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Avoid:</h3>
        <ul className="list-disc list-inside text-white text-lg">
<li>Collapsing knees or leaning forward</li>
        </ul>
      </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Red Flags:</h3>
        <ul className="list-disc list-inside text-white text-lg">
<li>Pain in knees or hips</li>
        </ul>
      </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Regression:</h3>
        <ul className="list-disc list-inside text-white text-lg">
<li>Perform smaller side shifts.</li>
        </ul>
      </section>
      </main>
    </>
  );
}}
