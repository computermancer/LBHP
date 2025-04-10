import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day4() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 4 - Day 4</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Hip and Rib Control under Load</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week4/day4/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Supine Hip Shifts with Rib Awareness
              </Link>
              <p className="text-lg text-white mt-2">Develop lateral hip mobility while maintaining rib stability.</p>
            </div>

            <div>
              <Link href="/week4/day4/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Quadruped Arm and Leg Reach with Control
              </Link>
              <p className="text-lg text-white mt-2">Improve balance and stability with controlled movement.</p>
            </div>

            <div>
              <Link href="/week4/day4/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Wall Hamstring Press with Breath Focus
              </Link>
              <p className="text-lg text-white mt-2">Reinforce hamstring engagement and core control.</p>
            </div>

            <div>
              <Link href="/week4/day4/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Supported Side-Lying Hip Abduction
              </Link>
              <p className="text-lg text-white mt-2">Develop lateral hip strength and stability.</p>
            </div>

            <div>
              <Link href="/week4/day4/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Seated Spine Twist with Arm Reach
              </Link>
              <p className="text-lg text-white mb-4">Build thoracic rotation and control.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
