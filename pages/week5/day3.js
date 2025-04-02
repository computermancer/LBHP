import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day3() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 5 - Day 3</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Advanced Movement Patterns</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week5/day3/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Quadruped Reach with Rib Control
              </Link>
              <p className="text-lg text-white mt-2">Enhance rib control and core stability.</p>
            </div>

            <div>
              <Link href="/week5/day3/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Seated Hip Hinge with Breath
              </Link>
              <p className="text-lg text-white mt-2">Promote hip hinge mechanics with breath control.</p>
            </div>

            <div>
              <Link href="/week5/day3/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Standing Posterior Weight Shift
              </Link>
              <p className="text-lg text-white mt-2">Improve posterior chain awareness and balance.</p>
            </div>

            <div>
              <Link href="/week5/day3/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Wall Hamstring Marching
              </Link>
              <p className="text-lg text-white mt-2">Activate hamstrings with controlled marching.</p>
            </div>

            <div>
              <Link href="/week5/day3/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Prone Hip IR and Extension Drill
              </Link>
              <p className="text-lg text-white mb-4">Improve hip mobility and pelvic stability.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
