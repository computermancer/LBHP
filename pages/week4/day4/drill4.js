import Nav from '../../../components/Nav';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Drill4SupportedSideLyingHipAbduction() {{
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
            Week 4 - Day 4
          </button>
        </div>

        <h2 className="text-orange-300 text-3xl font-bold mb-6">Drill 4: Supported Side-Lying Hip Abduction</h2>

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
<li>Lie on your side with knees slightly bent.</li>
<li>Head supported by your arm.</li>
        </ul>
      </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Instructions:</h3>
        <ul className="list-disc list-inside text-white text-lg">
<li>Inhale to prepare.</li>
<li>Exhale and lift the top leg slightly without rotating the pelvis.</li>
<li>Hold for 2–3 seconds, then return.</li>
        </ul>
      </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Sets / Reps / Breath / Rest:</h3>
        <ul className="list-disc list-inside text-white text-lg">
<li>Sets: 2–3</li>
<li>Reps: 8–10 per side</li>
<li>Breath: Exhale to lift, inhale to return</li>
<li>Rest: As needed</li>
        </ul>
      </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Feel:</h3>
        <ul className="list-disc list-inside text-white text-lg">
<li>Glute activation and hip control</li>
<li>Pelvic stability throughout</li>
        </ul>
      </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Avoid:</h3>
        <ul className="list-disc list-inside text-white text-lg">
<li>Rolling the pelvis or hiking the hip</li>
        </ul>
      </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Red Flags:</h3>
        <ul className="list-disc list-inside text-white text-lg">
<li>Pain in the hips or lower back</li>
        </ul>
      </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Regression:</h3>
        <ul className="list-disc list-inside text-white text-lg">
<li>Perform with a pillow between knees for support.</li>
        </ul>
      </section>
      </main>
    </>
  );
}}
