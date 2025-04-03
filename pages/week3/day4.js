import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day4() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 3 - Day 4</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Hip and Ribcage Stability</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week3/day4/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Supine Hip Shifts with Rib Control
              </Link>
              <p className="text-lg text-white mt-2">Develop control of pelvic shifts while maintaining rib stability.</p>
            </div>

            <div>
              <Link href="/week3/day4/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Seated Thoracic Flexion and Extension
              </Link>
              <p className="text-lg text-white mt-2">Improve thoracic spine mobility and postural control.</p>
            </div>

            <div>
              <Link href="/week3/day4/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Quadruped Arm and Leg Reach with Control
              </Link>
              <p className="text-lg text-white mt-2">Build core and shoulder stability while maintaining neutral spine.</p>
            </div>

            <div>
              <Link href="/week3/day4/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Wall Hamstring Press with Hip Awareness
              </Link>
              <p className="text-lg text-white mt-2">Reinforce hamstring activation and pelvis control.</p>
            </div>

            <div>
              <Link href="/week3/day4/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Supported Side-Lying Hip Abduction
              </Link>
              <p className="text-lg text-white mb-4">Develop lateral hip strength and stability.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
