import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week4Day1() {
  return (
    <DayLayout
      title="Week 4 - Day 1"
      subtitle="Rib and Pelvic Stability in Motion"
      prevDay="/week3/day5"
      currentWeek="/week4"
      nextDay="/week4/day2"
    >
      <div className="space-y-8">
        <div>
          <Link href="/week4/day1/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 1: Supine Rib Shift with Breath Control
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Develop lateral rib control while maintaining pelvis stability.
          </p>
        </div>

        <div>
          <Link href="/week4/day1/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 2: Seated Hip Shifts with Breath Awareness
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Reinforce pelvic control and hip awareness in seated positions.
          </p>
        </div>

        <div>
          <Link href="/week4/day1/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 3: Hooklying Rib Expansion with Marching
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Build core and rib stability while adding dynamic movement.
          </p>
        </div>

        <div>
          <Link href="/week4/day1/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 4: Wall Supported Hinge with Arm Reach
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Strengthen posterior chain while maintaining ribcage control and focus on controlled arm reach.
          </p>
        </div>

        <div>
          <Link href="/week4/day1/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 5: Quadruped Rock Back with Reach Focus
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Improve pelvic mobility with controlled rib and breath awareness.
          </p>
        </div>
      </div>
    </DayLayout>
  );
}
