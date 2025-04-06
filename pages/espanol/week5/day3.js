import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Day3() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 5 - Day 3</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Posterior Chain and Hip Control</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week5/day3/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Staggered Stance RDL with Hip Awareness
              </Link>
              <p className="text-lg text-white mt-2">Improve posterior chain strength and single-leg control.</p>
            </div>

            <div>
              <Link href="/week5/day3/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Forward Lunges with Rib Control
              </Link>
              <p className="text-lg text-white mt-2">Develop strength and stability in forward lunge patterns.</p>
            </div>

            <div>
              <Link href="/week5/day3/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Wall Hamstring Press with Rib Stability
              </Link>
              <p className="text-lg text-white mt-2">Engage hamstrings and reinforce core control.</p>
            </div>

            <div>
              <Link href="/week5/day3/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Bilateral Glute Bridge with Rib and Pelvic Control
              </Link>
              <p className="text-lg text-white mt-2">Reinforce hip extension and core stability.</p>
            </div>

            <div>
              <Link href="/week5/day3/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Supine Spine Twist with Breath
              </Link>
              <p className="text-lg text-white mb-4">Improve thoracic rotation with controlled breath.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
