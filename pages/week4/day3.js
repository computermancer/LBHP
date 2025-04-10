import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week4Day3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week4/day2" 
        currentWeek="/week4" 
        nextDay="/week4/day4" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 4 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Spinal Control and Hip Mobility</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week4/day3/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Cat-Cow with Rib Expansion
              </Link>
              <p className="text-lg text-white mt-2">Develop spinal flexion and extension with breath control.</p>
            </div>

            <div>
              <Link href="/week4/day3/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Seated Posterior Pelvic Rocking
              </Link>
              <p className="text-lg text-white mt-2">Enhance awareness of pelvic motion in seated positions.</p>
            </div>

            <div>
              <Link href="/week4/day3/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Supine 90-90 Rib Shift with Breath
              </Link>
              <p className="text-lg text-white mt-2">Build rib and pelvis coordination while breathing.</p>
            </div>

            <div>
              <Link href="/week4/day3/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Wall Supported Deep Squat Hold with Reach
              </Link>
              <p className="text-lg text-white mt-2">Increase squat stability with rib and pelvis awareness.</p>
            </div>

            <div>
              <Link href="/week4/day3/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Supine Spine Twist with Breath
              </Link>
              <p className="text-lg text-white mt-2">Improve thoracic rotation with controlled breath.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
