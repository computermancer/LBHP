import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week2Day3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week2/day2" 
        currentWeek="/week2" 
        nextDay="/week2/day4" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 2 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Pelvic Control and Hip Stability</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week2/day3/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Hooklying Pelvic Clocks
              </Link>
              <p className="text-lg text-white mt-2">Develop subtle awareness and control of pelvic tilt.</p>
            </div>

            <div>
              <Link href="/week2/day3/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Supine Diaphragm Reset with Reach
              </Link>
              <p className="text-lg text-white mt-2">Refine breath control with active upper body reach.</p>
            </div>

            <div>
              <Link href="/week2/day3/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Seated Spine Rotation with Breath
              </Link>
              <p className="text-lg text-white mt-2">Increase thoracic rotation with breath control.</p>
            </div>

            <div>
              <Link href="/week2/day3/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Supported Side-Lying Hip Abduction
              </Link>
              <p className="text-lg text-white mt-2">Improve lateral hip strength and pelvic stability.</p>
            </div>

            <div>
              <Link href="/week2/day3/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Wall Supported Deep Squat Hold
              </Link>
              <p className="text-lg text-white mt-2">Build confidence in deep squat position while maintaining control.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
