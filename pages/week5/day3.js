import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week5Day3() {
  return (
    <DayLayout
      title="Week 5 - Day 3"
      subtitle="Posterior Chain and Hip Control"
      prevDay="/week5/day2"
      currentWeek="/week5"
      nextDay="/week5/day4"
    >
      <div className="space-y-8">
        <div>
          <Link href="/week5/day3/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 1: Staggered Stance RDL with Hip Awareness
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Improve posterior chain strength and single-leg control.
          </p>
        </div>

        <div>
          <Link href="/week5/day3/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 2: Forward Lunges with Rib Control
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Develop strength and stability in forward lunge patterns.
          </p>
        </div>

        <div>
          <Link href="/week5/day3/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 3: Wall Hamstring Press with Rib Stability
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Engage hamstrings and reinforce core control.
          </p>
        </div>

        <div>
          <Link href="/week5/day3/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 4: Bilateral Glute Bridge with Rib and Pelvic Control
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Reinforce hip extension and core stability.
          </p>
        </div>

        <div>
          <Link href="/week5/day3/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 5: Supine Spine Twist with Breath
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Improve thoracic rotation with controlled breath.
          </p>
        </div>
      </div>
    </DayLayout>
  );
}
