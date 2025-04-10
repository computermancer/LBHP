import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week4Day1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week3/day5" 
        currentWeek="/week4" 
        nextDay="/week4/day2" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 4 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Rib and Pelvic Stability in Motion</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week4/day1/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Supine Rib Shift with Breath Control
              </Link>
              <p className="text-lg text-white mt-2">Develop lateral rib control while maintaining pelvis stability.</p>
            </div>

            <div>
              <Link href="/week4/day1/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Seated Hip Shifts with Breath Awareness
              </Link>
              <p className="text-lg text-white mt-2">Reinforce pelvic control and hip awareness in seated positions.</p>
            </div>

            <div>
              <Link href="/week4/day1/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Hooklying Rib Expansion with Marching
              </Link>
              <p className="text-lg text-white mt-2">Build core and rib stability while adding dynamic movement.</p>
            </div>

            <div>
              <Link href="/week4/day1/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Wall Supported Hinge with Arm Reach
              </Link>
              <p className="text-lg text-white mt-2">Strengthen posterior chain while maintaining ribcage control.</p>
            </div>

            <div>
              <Link href="/week4/day1/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Quadruped Rock Back with Reach Focus
              </Link>
              <p className="text-lg text-white mt-2">Improve pelvic mobility with controlled rib and breath awareness.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
