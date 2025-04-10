import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week1Day2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week1/day1" 
        currentWeek="/week1" 
        nextDay="/week1/day3" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 1 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Rib Expansion and Hip Hinge Focus</h2>
          
          <div className="space-y-8">
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
              <Link href="/week1/day2/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Wall Supported Squat Hold
              </Link>
              <p className="text-lg text-white mt-2">Build confidence in squat position with wall support.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
