import Nav from '../../../components/Nav';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SeatedPelvicRocking() {{
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav />
      <main className="p-8 text-white min-h-screen font-sans">
        
        <div className="mb-4">
          <button
            onClick={() => router.back()}
            className="block w-full sm:w-[700px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-3xl font-bold py-2 px-4 rounded text-left"
          >
            Week 1 - Day 1
          </button>
        </div>

        <h2 className="text-orange-300 text-3xl font-bold mb-6">Drill 3: Seated Pelvic Rocking</h2>

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
            <li>Sit on a firm chair, feet flat, hands resting on thighs.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Instructions:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Slowly tilt the pelvis forward (arching low back) and backward (flattening low back).</li>
<li>Let the breath guide the rhythm of your movement.</li>
<li>Keep upper body still and relaxed.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Sets / Reps / Breath / Rest:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Sets: 2–3</li>
            <li>Reps: 8–12 controlled reps</li>
            <li>Breath: Inhale as you tilt forward, exhale as you tilt backward</li>
            <li>Rest: As needed</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Feel:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Gentle motion through the pelvis and low back</li>
<li>Ease and rhythm with breath</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Avoid:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Tensing shoulders or upper back</li>
<li>Over-arching or collapsing posture</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Red Flags:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Pain during any part of the movement</li>
<li>Inability to isolate pelvic motion</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Regression:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Place hands on hips for feedback if you're unsure where the motion is coming from.</li>
          </ul>
        </section>
      </main>
    </>
  );
}}
