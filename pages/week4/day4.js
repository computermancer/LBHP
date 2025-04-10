import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week4Day4() {
  return (
    <DayLayout
      title="Week 4 - Day 4"
      subtitle="Hip and Rib Control under Load"
      prevDay="/week4/day3"
      currentWeek="/week4"
      nextDay="/week4/day5"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <Link href="/week4/day4/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 1: Supine Hip Shifts with Rib Awareness
            </Link>
            <p className="text-lg text-white mt-2">Develop lateral hip mobility while maintaining rib stability.</p>
          </div>

          <div>
            <Link href="/week4/day4/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 2: Quadruped Arm and Leg Reach with Control
            </Link>
            <p className="text-lg text-white mt-2">Improve balance and stability with controlled movement.</p>
          </div>

          <div>
            <Link href="/week4/day4/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 3: Wall Hamstring Press with Breath Focus
            </Link>
            <p className="text-lg text-white mt-2">Reinforce hamstring engagement and core control.</p>
          </div>

          <div>
            <Link href="/week4/day4/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 4: Supported Side-Lying Hip Abduction
            </Link>
            <p className="text-lg text-white mt-2">Develop lateral hip strength and stability.</p>
          </div>

          <div>
            <Link href="/week4/day4/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 5: Seated Spine Twist with Arm Reach
            </Link>
            <p className="text-lg text-white mt-2">Enhance thoracic rotation and shoulder mobility.</p>
          </div>
        </div>
      </div>
    </DayLayout>
  );
}
