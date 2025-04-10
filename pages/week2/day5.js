import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week2Day5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week2/day4" 
        currentWeek="/week2" 
        nextDay="/week3/day1" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 2 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Breath, Rotation, and Pelvic Coordination</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week2/day5/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Crocodile Breathing with Rib Expansion
              </Link>
              <p className="text-lg text-white mt-2">Reinforce full diaphragmatic breath expansion.</p>
            </div>

            <div>
              <Link href="/week2/day5/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Cat-Cow with Rotational Focus
              </Link>
              <p className="text-lg text-white mt-2">Improve spinal flexion/extension and incorporate rotation.</p>
            </div>

            <div>
              <Link href="/week2/day5/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Seated Spine Twist with Arm Reach
              </Link>
              <p className="text-lg text-white mt-2">Increase rotational control and scapular mobility.</p>
            </div>

            <div>
              <Link href="/week2/day5/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Supine Marching with Pelvic Control
              </Link>
              <p className="text-lg text-white mt-2">Strengthen rib-pelvis coordination and core control.</p>
            </div>

            <div>
              <Link href="/week2/day5/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Seated Breath with Hip Shifts
              </Link>
              <p className="text-lg text-white mt-2">Increase awareness of pelvic shifts while maintaining breath control.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
