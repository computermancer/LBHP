import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week5Day4() {
  return (
    <DayLayout
      title="Week 5 - Day 4"
      subtitle="Upper Body and Core Control"
      prevDay="/week5/day3"
      currentWeek="/week5"
      nextDay="/week5/day5"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <Link href="/week5/day4/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 1: Wall Pushups with Rib Stability
            </Link>
            <p className="text-lg text-white mt-2">Introduce upper body pressing while maintaining core control.</p>
          </div>

          <div>
            <Link href="/week5/day4/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 2: Chair Pushups with Pelvic Stability
            </Link>
            <p className="text-lg text-white mt-2">Progress pressing with greater load while maintaining control.</p>
          </div>

          <div>
            <Link href="/week5/day4/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 3: Floor Pushups with Rib and Pelvic Control
            </Link>
            <p className="text-lg text-white mt-2">Build upper body and core strength in a plank position.</p>
          </div>

          <div>
            <Link href="/week5/day4/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 4: Seated Spine Rotation with Reach
            </Link>
            <p className="text-lg text-white mt-2">Develop thoracic rotation and scapular movement.</p>
          </div>

          <div>
            <Link href="/week5/day4/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 5: Side-Lying Hip IR and Breathing
            </Link>
            <p className="text-lg text-white mt-2">Improve hip mobility and breath control.</p>
          </div>
        </div>
      </div>
    </DayLayout>
  );
}
