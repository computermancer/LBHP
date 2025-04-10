import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week5Day4() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week5/day3" 
        currentWeek="/week5" 
        nextDay="/week5/day5" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 5 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Upper Body and Core Control</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week5/day4/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Wall Pushups with Rib Stability
              </Link>
              <p className="text-lg text-white mt-2">Introduce upper body pressing while maintaining core control.</p>
            </div>

            <div>
              <Link href="/week5/day4/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Chair Pushups with Pelvic Stability
              </Link>
              <p className="text-lg text-white mt-2">Progress pressing with greater load while maintaining control.</p>
            </div>

            <div>
              <Link href="/week5/day4/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Floor Pushups with Rib and Pelvic Control
              </Link>
              <p className="text-lg text-white mt-2">Build upper body and core strength in a plank position.</p>
            </div>

            <div>
              <Link href="/week5/day4/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Seated Spine Rotation with Reach
              </Link>
              <p className="text-lg text-white mt-2">Develop thoracic rotation and scapular movement.</p>
            </div>

            <div>
              <Link href="/week5/day4/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
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
