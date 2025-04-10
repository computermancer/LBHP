import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week1Day3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week1/day2" 
        currentWeek="/week1" 
        nextDay="/week1/day4" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 1 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Breath Control and Rhythmic Movement</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week1/day3/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Breath Reset in Side-Lying
              </Link>
              <p className="text-lg text-white mt-2">Promote ribcage and diaphragm reset through focused breath.</p>
            </div>

            <div>
              <Link href="/week1/day3/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Rhythmic Reach & Roll
              </Link>
              <p className="text-lg text-white mt-2">Enhance rotational control and coordination.</p>
            </div>

            <div>
              <Link href="/week1/day3/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Supported Breath Patterning
              </Link>
              <p className="text-lg text-white mt-2">Reinforce steady breath control and rib awareness.</p>
            </div>

            <div>
              <Link href="/week1/day3/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Relaxed Spine Rocking
              </Link>
              <p className="text-lg text-white mt-2">Encourage fluid motion through the pelvis and spine.</p>
            </div>

            <div>
              <Link href="/week1/day3/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Gentle Bilateral Rocking
              </Link>
              <p className="text-lg text-white mt-2">Improve pelvic mobility and relaxation.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
