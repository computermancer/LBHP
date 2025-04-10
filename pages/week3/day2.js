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
      <div className="space-y-8">
        <div>
          <Link href="/week3/day2/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 1: Seated Rib Expansion with Breath Control
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Promote ribcage mobility and lateral breath expansion.
          </p>
        </div>

        <div>
          <Link href="/week3/day2/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 2: Supine Marching with Core Control
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Reinforce pelvic stability while moving the legs.
          </p>
        </div>

        <div>
          <Link href="/week3/day2/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 3: Seated Thoracic Rotation with Arm Reach
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Develop rotational control and mobility.
          </p>
        </div>

        <div>
          <Link href="/week3/day2/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 4: Wall Hamstring March with Rib Control
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Activate the posterior chain while maintaining rib stability.
          </p>
        </div>

        <div>
          <Link href="/week3/day2/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 5: Prone Hip IR and Extension Drill
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Build awareness of hip rotation and hip extension.
          </p>
        </div>
      </div>
    </DayLayout>
  );
}
