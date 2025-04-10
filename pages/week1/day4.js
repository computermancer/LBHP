import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week1Day4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week1/day3" 
        currentWeek="/week1" 
        nextDay="/week1/day5" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 1 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Pelvic and Rib Control</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week1/day4/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Supine Diaphragm Reset
              </Link>
              <p className="text-lg text-white mt-2">Establish deeper diaphragmatic control and relaxation.</p>
            </div>

            <div>
              <Link href="/week1/day4/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Seated Posterior Pelvic Rocking
              </Link>
              <p className="text-lg text-white mt-2">Improve awareness of pelvic positioning.</p>
            </div>

            <div>
              <Link href="/week1/day4/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Seated Thoracic Extension
              </Link>
              <p className="text-lg text-white mt-2">Strengthen thoracic extension and rib positioning.</p>
            </div>

            <div>
              <Link href="/week1/day4/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Supine Hip Shift with Breath
              </Link>
              <p className="text-lg text-white mt-2">Build control of pelvic shifts and core integration.</p>
            </div>

            <div>
              <Link href="/week1/day4/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Seated Breath with Rib Control
              </Link>
              <p className="text-lg text-white mt-2">Maintain ribcage and pelvis control with steady breath.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
