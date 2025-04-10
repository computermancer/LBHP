import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week3Day1() {
  return (
    <DayLayout
      title="Week 3 - Day 1"
      subtitle="Pelvic Control and Breath Integration"
      prevDay="/week2/day5"
      currentWeek="/week3"
      nextDay="/week3/day2"
    >
      <div className="space-y-8">
        <div>
          <Link href="/week3/day1/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 1: Hooklying Breath with Pelvic Awareness
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Enhance breath control and establish awareness of pelvic movement.
          </p>
        </div>

        <div>
          <Link href="/week3/day1/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 2: Seated Hip Shift with Rib Stability
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Develop control of hip shifting with minimal ribcage movement.
          </p>
        </div>

        <div>
          <Link href="/week3/day1/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 3: Supine Diaphragm Reset with Reach
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Reinforce ribcage control during breath cycles.
          </p>
        </div>

        <div>
          <Link href="/week3/day1/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 4: Quadruped Rock Back with Breath Focus
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Improve pelvic mobility and maintain core stability.
          </p>
        </div>

        <div>
          <Link href="/week3/day1/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 5: Wall Supported Hinge with Arm Reach
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Build posterior chain activation while maintaining rib control.
          </p>
        </div>
      </div>
    </DayLayout>
  );
}
