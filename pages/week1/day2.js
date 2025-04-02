import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day2() {
  return (
    <>
      <Nav />
      <main className="p-8 text-gray-200 min-h-screen font-sans">
        <h1 className="text-orange-300 text-3xl mb-6 font-bold">Week 1 - Day 2 </h1>

        <div className="space-y-6">
          <div>
            <Link href="/week1/day2/drill1" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 1: Side-Lying Rib Expansion
            </Link>
            <p className="text-lg text-white mb-4">Promote ribcage expansion and lateral breath control.</p>
          </div>

          <div>
            <Link href="/week1/day2/drill2" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 2: Seated Thoracic Rotation
            </Link>
            <p className="text-lg text-white mb-4">Improve thoracic rotation and breathing control.</p>
          </div>

          <div>
            <Link href="/week1/day2/drill3" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 3: Standing Hip Hinge with Wall Reach
            </Link>
            <p className="text-lg text-white mb-4">Refine hip hinge pattern and core stability.</p>
          </div>

          <div>
            <Link href="/week1/day2/drill4" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 4: Quadruped Rock Back with Neutral Spine
            </Link>
            <p className="text-lg text-white mb-4">Enhance hip mobility and lumbar control.</p>
          </div>

          <div>
            <Link href="/week1/day2/drill5" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 5: Wall Supported Squat Hold
            </Link>
            <p className="text-lg text-white mb-4">Develop lower body endurance and control.</p>
          </div>
        </div>
      </main>
    </>
  );
}
