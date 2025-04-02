import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day3() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-3xl mb-2 font-bold">Week 1 - Day 3</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-6">Rib and Pelvic Integration</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week1/day3/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Side-Lying Rib Expansion
              </Link>
              <p className="text-lg text-white mt-2">Promote ribcage expansion and lateral breath control.</p>
            </div>

            <div>
              <Link href="/week1/day3/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Seated Thoracic Rotation
              </Link>
              <p className="text-lg text-white mt-2">Improve thoracic rotation and breathing control.</p>
            </div>

            <div>
              <Link href="/week1/day3/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Standing Hip Hinge with Wall Reach
              </Link>
              <p className="text-lg text-white mt-2">Refine hip hinge pattern and core stability.</p>
            </div>

            <div>
              <Link href="/week1/day3/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Quadruped Rock Back with Neutral Spine
              </Link>
              <p className="text-lg text-white mt-2">Enhance hip mobility and lumbar control.</p>
            </div>

            <div>
              <Link href="/week1/day3/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
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
