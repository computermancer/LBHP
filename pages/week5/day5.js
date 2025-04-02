import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day5() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-3xl mb-2 font-bold">Week 5 - Day 5</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-6">Final Integration and Assessment</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week5/day5/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Hooklying Breath with Pelvic Awareness
              </Link>
              <p className="text-lg text-white mt-2">Reset breathing pattern and pelvic position.</p>
            </div>

            <div>
              <Link href="/week5/day5/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Seated Thoracic Rotation with Breath
              </Link>
              <p className="text-lg text-white mt-2">Enhance thoracic mobility and breath control.</p>
            </div>

            <div>
              <Link href="/week5/day5/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Standing Hip Hinge with Wall Support
              </Link>
              <p className="text-lg text-white mt-2">Refine hip hinge pattern and core stability.</p>
            </div>

            <div>
              <Link href="/week5/day5/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Quadruped Rock Back with Neutral Spine
              </Link>
              <p className="text-lg text-white mt-2">Enhance hip mobility and lumbar control.</p>
            </div>

            <div>
              <Link href="/week5/day5/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Wall Supported Squat Hold
              </Link>
              <p className="text-lg text-white mb-4">Build lower body endurance and control.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
