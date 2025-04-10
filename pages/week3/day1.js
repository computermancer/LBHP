import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week3Day1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week2/day5" 
        currentWeek="/week3" 
        nextDay="/week3/day2" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 3 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Pelvic Control and Breath Integration</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week3/day1/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Hooklying Breath with Pelvic Awareness
              </Link>
              <p className="text-lg text-white mt-2">Enhance breath control and establish awareness of pelvic movement.</p>
            </div>

            <div>
              <Link href="/week3/day1/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Seated Hip Shift with Rib Stability
              </Link>
              <p className="text-lg text-white mt-2">Develop control of hip shifting with minimal ribcage movement.</p>
            </div>

            <div>
              <Link href="/week3/day1/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Supine Diaphragm Reset with Reach
              </Link>
              <p className="text-lg text-white mt-2">Reinforce ribcage control during breath cycles.</p>
            </div>

            <div>
              <Link href="/week3/day1/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Quadruped Rock Back with Breath Focus
              </Link>
              <p className="text-lg text-white mt-2">Improve pelvic mobility and maintain core stability.</p>
            </div>

            <div>
              <Link href="/week3/day1/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Wall Supported Hinge with Arm Reach
              </Link>
              <p className="text-lg text-white mt-2">Build posterior chain activation while maintaining rib control.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
