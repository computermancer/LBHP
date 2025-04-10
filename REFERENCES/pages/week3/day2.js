import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day2() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 3 - Day 2</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Rib and Hip Coordination</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week3/day2/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Seated Rib Expansion with Breath Control
              </Link>
              <p className="text-lg text-white mt-2">Promote ribcage mobility and lateral breath expansion.</p>
            </div>

            <div>
              <Link href="/week3/day2/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Supine Marching with Core Control
              </Link>
              <p className="text-lg text-white mt-2">Reinforce pelvic stability while moving the legs.</p>
            </div>

            <div>
              <Link href="/week3/day2/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Seated Thoracic Rotation with Arm Reach
              </Link>
              <p className="text-lg text-white mt-2">Develop rotational control and mobility.</p>
            </div>

            <div>
              <Link href="/week3/day2/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Wall Hamstring March with Rib Control
              </Link>
              <p className="text-lg text-white mt-2">Activate the posterior chain while maintaining rib stability.</p>
            </div>

            <div>
              <Link href="/week3/day2/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Prone Hip IR and Extension Drill
              </Link>
              <p className="text-lg text-white mb-4">Build awareness of hip rotation and hip extension.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
