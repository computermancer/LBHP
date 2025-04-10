import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week3Day3() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week3/day2" 
        currentWeek="/week3" 
        nextDay="/week3/day4" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 3 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Spinal Mobility and Core Control</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week3/day3/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Cat-Cow with Breath Awareness
              </Link>
              <p className="text-lg text-white mt-2">Develop spinal flexion and extension control.</p>
            </div>

            <div>
              <Link href="/week3/day3/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Seated Posterior Pelvic Rocking
              </Link>
              <p className="text-lg text-white mt-2">Enhance pelvic control and improve awareness of movement.</p>
            </div>

            <div>
              <Link href="/week3/day3/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Supine 90-90 Rib Shift with Breath
              </Link>
              <p className="text-lg text-white mt-2">Build core stability and enhance breath-guided movement.</p>
            </div>

            <div>
              <Link href="/week3/day3/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Wall Supported Squat Hold with Reach
              </Link>
              <p className="text-lg text-white mt-2">Increase confidence in squat position with upper body movement.</p>
            </div>

            <div>
              <Link href="/week3/day3/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Supine Spine Twist with Breath
              </Link>
              <p className="text-lg text-white mt-2">Improve thoracic rotation with breath control.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
