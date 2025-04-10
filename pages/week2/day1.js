import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week2Day1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week1/day5" 
        currentWeek="/week2" 
        nextDay="/week2/day2" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 2 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Rib Expansion and Hip Control</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week2/day1/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Supine Rib Expansion with Breath
              </Link>
              <p className="text-lg text-white mt-2">Increase ribcage awareness and diaphragmatic control.</p>
            </div>

            <div>
              <Link href="/week2/day1/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Hooklying Hip Shifts
              </Link>
              <p className="text-lg text-white mt-2">Build control and awareness of hip shifting patterns.</p>
            </div>

            <div>
              <Link href="/week2/day1/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Side-Lying Hip IR with Breath
              </Link>
              <p className="text-lg text-white mt-2">Improve internal hip rotation and breath coordination.</p>
            </div>

            <div>
              <Link href="/week2/day1/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Supine 90-90 Leg Lowering
              </Link>
              <p className="text-lg text-white mt-2">Reinforce core stability and rib-pelvis alignment.</p>
            </div>

            <div>
              <Link href="/week2/day1/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Wall Supported Heel Press
              </Link>
              <p className="text-lg text-white mt-2">Activate hamstrings to stabilize pelvis and reinforce control.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
