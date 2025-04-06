import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Day4() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 2 - Day 4</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Rib Shift and Thoracic Mobility</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week2/day4/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Drill 1: Supine Rib Shift with Breath
              </Link>
              <p className="text-lg text-white mt-2">Enhance ribcage awareness and asymmetrical breath control.</p>
            </div>

            <div>
              <Link href="/week2/day4/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Drill 2: Seated Posterior Pelvic Rocking
              </Link>
              <p className="text-lg text-white mt-2">Maintain pelvic awareness and improve pelvic rhythm.</p>
            </div>

            <div>
              <Link href="/week2/day4/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Drill 3: Seated Thoracic Flexion/Extension
              </Link>
              <p className="text-lg text-white mt-2">Develop awareness of spinal flexion and extension.</p>
            </div>

            <div>
              <Link href="/week2/day4/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Drill 4: Supine Hip Shifts with Rib Stability
              </Link>
              <p className="text-lg text-white mt-2">Build core and hip stability through shifting patterns.</p>
            </div>

            <div>
              <Link href="/week2/day4/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Drill 5: Seated Breath with Pelvic Awareness
              </Link>
              <p className="text-lg text-white mt-2">Reinforce breath and pelvic positioning control.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
