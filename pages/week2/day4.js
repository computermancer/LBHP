import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day4() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 2 - Day 4</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Integration and Progression</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week2/day4/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Side-Lying Rib Expansion
              </Link>
              <p className="text-lg text-white mt-2">Promote ribcage expansion and lateral breath control.</p>
            </div>

            <div>
              <Link href="/week2/day4/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Seated Thoracic Rotation
              </Link>
              <p className="text-lg text-white mt-2">Improve thoracic rotation and breathing control.</p>
            </div>

            <div>
              <Link href="/week2/day4/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Standing Hip Hinge with Wall Reach
              </Link>
              <p className="text-lg text-white mt-2">Refine hip hinge pattern and core stability.</p>
            </div>

            <div>
              <Link href="/week2/day4/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Quadruped Rock Back with Neutral Spine
              </Link>
              <p className="text-lg text-white mt-2">Enhance hip mobility and lumbar control.</p>
            </div>

            <div>
              <Link href="/week2/day4/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Wall Supported Squat Hold
              </Link>
              <p className="text-lg text-white mb-4">Develop lower body endurance and control.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
