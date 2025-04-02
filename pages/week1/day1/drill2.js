import Nav from '../../../components/Nav';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function HooklyingBellyBreathing() {{
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
            Week 1 - Day 1
          </button>
        </div>

        <h2 className="text-orange-300 text-3xl font-bold mb-6">Drill 2: Hooklying Belly Breathing</h2>

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
<li>Place one hand on your chest and the other on your belly.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Instructions:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Inhale gently through your nose, allowing the belly to rise without moving the chest.</li>
<li>Exhale softly through your mouth or nose, allowing the belly to fall naturally.</li>
<li>Focus on minimizing upper chest movement.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Sets / Reps / Breath / Rest:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Sets: 2</li>
            <li>Reps: 5–8 breath cycles per set</li>
            <li>Breath: Inhale 3–4 seconds, exhale 4–6 seconds</li>
            <li>Rest: Between sets or as needed</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Feel:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Belly rising under your hand with each inhale</li>
<li>Sense of relaxation and minimal chest movement</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Avoid:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Lifting the chest or shrugging shoulders</li>
<li>Forcing or over-controlling the breath</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Red Flags:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Lightheadedness or shortness of breath</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Regression:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Prop knees up with a pillow if the lower back feels strained.</li>
          </ul>
        </section>
      </main>
    </>
  );
}}
