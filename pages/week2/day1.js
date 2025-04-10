import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week2Day1() {
  return (
    <DayLayout
      title="Week 2 - Day 1"
      subtitle="Rib Expansion and Hip Control"
      prevDay="/week1/day5"
      currentWeek="/week2"
      nextDay="/week2/day2"
    >
      <div className="space-y-8">
        <div>
          <Link href="/week2/day1/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 1: Supine Rib Expansion with Breath
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Increase ribcage awareness and diaphragmatic control.
          </p>
        </div>

        <div>
          <Link href="/week2/day1/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 2: Hooklying Hip Shifts
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Build control and awareness of hip shifting patterns.
          </p>
        </div>

        <div>
          <Link href="/week2/day1/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 3: Side-Lying Hip IR with Breath
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Improve internal hip rotation and breath coordination.
          </p>
        </div>

        <div>
          <Link href="/week2/day1/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 4: Supine 90-90 Leg Lowering
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Reinforce core stability and rib-pelvis alignment.
          </p>
        </div>

        <div>
          <Link href="/week2/day1/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 5: Wall Supported Heel Press
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Activate hamstrings to stabilize pelvis and reinforce control.
          </p>
        </div>
      </div>
    </DayLayout>
  );
}
