import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week2Day2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week2/day1" 
        currentWeek="/week2" 
        nextDay="/week2/day3" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 2 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Thoracic Rotation and Posterior Chain Activation</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week2/day2/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Quadruped Reach with Rib Control
              </Link>
              <p className="text-lg text-white mt-2">Develop thoracic rotation with stable ribcage control.</p>
            </div>

            <div>
              <Link href="/week2/day2/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Seated Hip Hinge with Breath
              </Link>
              <p className="text-lg text-white mt-2">Improve hinge pattern and maintain core control.</p>
            </div>

            <div>
              <Link href="/week2/day2/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Standing Posterior Weight Shift
              </Link>
              <p className="text-lg text-white mt-2">Develop posterior weight shift for balanced hip control.</p>
            </div>

            <div>
              <Link href="/week2/day2/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Wall Hamstring Marching
              </Link>
              <p className="text-lg text-white mt-2">Reinforce posterior chain activation and pelvic control.</p>
            </div>

            <div>
              <Link href="/week2/day2/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Prone Hip IR and Extension Drill
              </Link>
              <p className="text-lg text-white mt-2">Build awareness of hip rotation and extension.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
