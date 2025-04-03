import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day2() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 1 - Day 2</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Rib Expansion and Hip Hinge Focus</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week1/day2/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Side-Lying Rib Expansion
              </Link>
              <p className="text-lg text-white mt-2">Improve lateral ribcage expansion and breathing mechanics.</p>
            </div>

            <div>
              <Link href="/week1/day2/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Seated Thoracic Rotation
              </Link>
              <p className="text-lg text-white mt-2">Increase thoracic mobility and rotational control.</p>
            </div>

            <div>
              <Link href="/week1/day2/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Standing Hip Hinge with Wall Reach
              </Link>
              <p className="text-lg text-white mt-2">Develop hip hinge awareness and control.</p>
            </div>

            <div>
              <Link href="/week1/day2/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Quadruped Rock Back with Neutral Spine
              </Link>
              <p className="text-lg text-white mt-2">Promote pelvic control with neutral spine.</p>
            </div>

            <div>
              <Link href="/week1/day2/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Wall Supported Squat Hold
              </Link>
              <p className="text-lg text-white mb-4">Build confidence in squat position with wall support.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
