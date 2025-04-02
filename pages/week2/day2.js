import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day2() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-3xl mb-2 font-bold">Week 2 - Day 2</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-6">Hip Integration and Core Stability</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week2/day2/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Supine Rib Expansion with Breath
              </Link>
              <p className="text-lg text-white mt-2">Develop rib control and breath awareness.</p>
            </div>

            <div>
              <Link href="/week2/day2/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Hooklying Hip Shifts
              </Link>
              <p className="text-lg text-white mt-2">Improve pelvic mobility and control.</p>
            </div>

            <div>
              <Link href="/week2/day2/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Side-Lying Hip IR with Breath
              </Link>
              <p className="text-lg text-white mt-2">Enhance hip internal rotation and stability.</p>
            </div>

            <div>
              <Link href="/week2/day2/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Supine 90-90 Leg Lowering
              </Link>
              <p className="text-lg text-white mt-2">Develop core control and pelvic stability.</p>
            </div>

            <div>
              <Link href="/week2/day2/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Wall Supported Heel Press
              </Link>
              <p className="text-lg text-white mb-4">Activate hamstrings to stabilize the pelvis and core.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
