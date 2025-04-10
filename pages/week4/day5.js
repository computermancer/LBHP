import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week4Day5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week4/day4" 
        currentWeek="/week4" 
        nextDay="/week5/day1" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 4 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Breath, Mobility, and Relaxation</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week4/day5/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Crocodile Breathing with Rib Expansion
              </Link>
              <p className="text-lg text-white mt-2">Reinforce full-body breath expansion.</p>
            </div>

            <div>
              <Link href="/week4/day5/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Supine Pelvic Rock with Breath Focus
              </Link>
              <p className="text-lg text-white mt-2">Develop gentle pelvic motion with breath-guided movement.</p>
            </div>

            <div>
              <Link href="/week4/day5/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Seated Posterior Pelvic Awareness
              </Link>
              <p className="text-lg text-white mt-2">Enhance control of pelvis positioning in seated positions.</p>
            </div>

            <div>
              <Link href="/week4/day5/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Wall Supported Marching with Rib Stability
              </Link>
              <p className="text-lg text-white mt-2">Reinforce core and rib control during dynamic movements.</p>
            </div>

            <div>
              <Link href="/week4/day5/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Side-Lying Hip IR and Breathing
              </Link>
              <p className="text-lg text-white mt-2">Improve hip mobility and breath control.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
