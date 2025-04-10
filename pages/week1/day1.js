import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week1Day1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay={null} 
        currentWeek="/week1" 
        nextDay="/week1/day2" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 1 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Groundwork and Awareness</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week1/day1/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Posterior Pelvic Tilt on Wall
              </Link>
              <p className="text-lg text-white mt-2">Develop awareness of pelvic tilt and lumbar control.</p>
            </div>

            <div>
              <Link href="/week1/day1/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Hooklying Belly Breathing
              </Link>
              <p className="text-lg text-white mt-2">Improve breath control and diaphragmatic function.</p>
            </div>

            <div>
              <Link href="/week1/day1/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Seated Pelvic Rocking
              </Link>
              <p className="text-lg text-white mt-2">Increase pelvic mobility and coordination.</p>
            </div>

            <div>
              <Link href="/week1/day1/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Supine 90-90 Reach
              </Link>
              <p className="text-lg text-white mt-2">Enhance core stability and maintain rib-pelvis alignment.</p>
            </div>

            <div>
              <Link href="/week1/day1/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Wall Hamstring Press
              </Link>
              <p className="text-lg text-white mt-2">Activate hamstrings to stabilize pelvis and core.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
