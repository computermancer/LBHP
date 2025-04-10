import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week3Day2() {
  return (
    <DayLayout
      title="Week 3 - Day 2"
      subtitle="Rib and Hip Coordination"
      prevDay="/week3/day1"
      currentWeek="/week3"
      nextDay="/week3/day3"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <Link href="/week3/day2/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 1: Seated Rib Expansion with Breath Control
            </Link>
            <p className="text-lg text-white mt-2">Promote ribcage mobility and lateral breath expansion.</p>
          </div>

          <div>
            <Link href="/week3/day2/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 2: Supine Marching with Core Control
            </Link>
            <p className="text-lg text-white mt-2">Reinforce pelvic stability while moving the legs.</p>
          </div>

          <div>
            <Link href="/week3/day2/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 3: Seated Thoracic Rotation with Arm Reach
            </Link>
            <p className="text-lg text-white mt-2">Develop rotational control and mobility.</p>
          </div>

          <div>
            <Link href="/week3/day2/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 4: Wall Hamstring March with Rib Control
            </Link>
            <p className="text-lg text-white mt-2">Activate the posterior chain while maintaining rib stability.</p>
          </div>

          <div>
            <Link href="/week3/day2/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 5: Prone Hip IR and Extension Drill
            </Link>
            <p className="text-lg text-white mt-2">Enhance hip control and posterior chain engagement.</p>
          </div>
        </div>
      </div>
    </DayLayout>
  );
}
