import Nav from '../../../components/Nav';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SupineMarchingwithRibControl() {{
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
            Week 1 - Day 5
          </button>
        </div>

        <h2 className="text-orange-300 text-3xl font-bold mb-6">Drill 4: Supine Marching with Rib Control</h2>

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
<li>Arms resting by your sides or palms on your lower ribs.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Instructions:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Exhale and lift one knee toward your chest.</li>
<li>Maintain rib and pelvis control throughout.</li>
<li>Lower the leg back to the floor with control.</li>
<li>Alternate sides.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Sets / Reps / Breath / Rest:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Sets: 2–3</li>
            <li>Reps: 8–10 slow reps per side</li>
            <li>Breath: Exhale to lift, inhale to lower</li>
            <li>Rest: As needed</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Feel:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Core engagement and rib stability</li>
<li>Smooth, controlled leg movement</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Avoid:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Arching the low back</li>
<li>Losing control of pelvis and ribs</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Red Flags:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Low back pain or discomfort</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Regression:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            <li>Perform the drill with feet closer to the floor for reduced intensity.</li>
          </ul>
        </section>
      </main>
    </>
  );
}}
