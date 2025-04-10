import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week3Day4() {
  return (
    <DayLayout
      title="Week 3 - Day 4"
      subtitle="Hip and Ribcage Stability"
      prevDay="/week3/day3"
      currentWeek="/week3"
      nextDay="/week3/day5"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <Link href="/week3/day4/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 1: Supine Hip Shifts with Rib Control
            </Link>
            <p className="text-lg text-white mt-2">Develop control of pelvic shifts while maintaining rib stability.</p>
          </div>

          <div>
            <Link href="/week3/day4/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 2: Seated Thoracic Flexion and Extension
            </Link>
            <p className="text-lg text-white mt-2">Improve thoracic spine mobility and postural control.</p>
          </div>

          <div>
            <Link href="/week3/day4/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 3: Quadruped Arm and Leg Reach with Control
            </Link>
            <p className="text-lg text-white mt-2">Build core and shoulder stability while maintaining neutral spine.</p>
          </div>

          <div>
            <Link href="/week3/day4/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 4: Wall Hamstring Press with Hip Awareness
            </Link>
            <p className="text-lg text-white mt-2">Reinforce hamstring activation and pelvis control.</p>
          </div>

          <div>
            <Link href="/week3/day4/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 5: Supported Side-Lying Hip Abduction
            </Link>
            <p className="text-lg text-white mt-2">Enhance hip abduction control and stability.</p>
          </div>
        </div>
      </div>
    </DayLayout>
  );
}
