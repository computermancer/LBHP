import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Day1() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 2 - Day 1</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Rib Expansion and Hip Control</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week2/day1/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Drill 1: Supine Rib Expansion with Breath
              </Link>
              <p className="text-lg text-white mt-2">Increase ribcage awareness and diaphragmatic control.</p>
            </div>

            <div>
              <Link href="/week2/day1/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Drill 2: Hooklying Hip Shifts
              </Link>
              <p className="text-lg text-white mt-2">Build control and awareness of hip shifting patterns.</p>
            </div>

            <div>
              <Link href="/week2/day1/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Drill 3: Side-Lying Hip IR with Breath
              </Link>
              <p className="text-lg text-white mt-2">Improve internal hip rotation and breath coordination.</p>
            </div>

            <div>
              <Link href="/week2/day1/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Drill 4: Supine 90-90 Leg Lowering
              </Link>
              <p className="text-lg text-white mt-2">Reinforce core stability and rib-pelvis alignment.</p>
            </div>

            <div>
              <Link href="/week2/day1/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Drill 5: Wall Supported Heel Press
              </Link>
              <p className="text-lg text-white mt-2">Activate hamstrings to stabilize pelvis and reinforce control.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
