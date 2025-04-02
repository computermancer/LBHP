import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day1() {
  return (
    <>
      <Nav />
      <main className="p-8 text-gray-200 min-h-screen font-sans">
        <h1 className="text-orange-300 text-3xl font-bold mb-6">Week 2 - Day 1</h1>

        <div className="space-y-6">
          <div>
            <Link href="/week2/day1/drill1" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 1: Supine Rib Expansion with Breath
            </Link>
            <p className="text-lg text-white mb-4">Develop rib control and breath awareness.</p>
          </div>

          <div>
            <Link href="/week2/day1/drill2" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 2: Hooklying Hip Shifts
            </Link>
            <p className="text-lg text-white mb-4">Improve pelvic mobility and control.</p>
          </div>

          <div>
            <Link href="/week2/day1/drill3" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 3: Side-Lying Hip IR with Breath
            </Link>
            <p className="text-lg text-white mb-4">Enhance hip internal rotation and stability.</p>
          </div>

          <div>
            <Link href="/week2/day1/drill4" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 4: Supine 90-90 Leg Lowering
            </Link>
            <p className="text-lg text-white mb-4">Develop core control and pelvic stability.</p>
          </div>

          <div>
            <Link href="/week2/day1/drill5" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 5: Wall Supported Heel Press
            </Link>
            <p className="text-lg text-white mb-4">Activate hamstrings to stabilize the pelvis and core.</p>
          </div>
        </div>
      </main>
    </>
  );
}
