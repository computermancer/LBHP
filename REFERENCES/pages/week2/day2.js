import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day2() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 2 - Day 2</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Thoracic Rotation and Posterior Chain Activation</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week2/day2/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Drill 1: Quadruped Reach with Rib Control
              </Link>
              <p className="text-lg text-white mt-2">Develop thoracic rotation with stable ribcage control.</p>
            </div>

            <div>
              <Link href="/week2/day2/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Drill 2: Seated Hip Hinge with Breath
              </Link>
              <p className="text-lg text-white mt-2">Improve hinge pattern and maintain core control.</p>
            </div>

            <div>
              <Link href="/week2/day2/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Drill 3: Standing Posterior Weight Shift
              </Link>
              <p className="text-lg text-white mt-2">Develop posterior weight shift for balanced hip control.</p>
            </div>

            <div>
              <Link href="/week2/day2/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Drill 4: Wall Hamstring Marching
              </Link>
              <p className="text-lg text-white mt-2">Reinforce posterior chain activation and pelvic control.</p>
            </div>

            <div>
              <Link href="/week2/day2/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Drill 5: Prone Hip IR and Extension Drill
              </Link>
              <p className="text-lg text-white mt-2">Build awareness of hip rotation and extension.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
