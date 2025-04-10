import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week5Day5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week5/day4" 
        currentWeek="/week5" 
        nextDay="/week6/day1" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 5 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Mobility, Breath, and Control</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week5/day5/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Horse Stance with Rib Control (Longer Hold)
              </Link>
              <p className="text-lg text-white mt-2">Reinforce isometric lower body endurance.</p>
            </div>

            <div>
              <Link href="/week5/day5/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Calf Raises with Rib and Pelvic Control
              </Link>
              <p className="text-lg text-white mt-2">Strengthen calves while maintaining neutral alignment.</p>
            </div>

            <div>
              <Link href="/week5/day5/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Tib Raises with Breath Awareness
              </Link>
              <p className="text-lg text-white mt-2">Develop anterior shin strength and balance.</p>
            </div>

            <div>
              <Link href="/week5/day5/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Hooklying Rib Expansion with Marching
              </Link>
              <p className="text-lg text-white mt-2">Reinforce core and breath control with marching.</p>
            </div>

            <div>
              <Link href="/week5/day5/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Supine Pelvic Rock with Breath Control
              </Link>
              <p className="text-lg text-white mt-2">Enhance pelvic mobility and breath-guided awareness.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
