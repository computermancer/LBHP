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
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <Link href="/week2/day1/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 1: Supine Rib Expansion with Breath
            </Link>
            <p className="text-lg text-white mt-2">Increase ribcage awareness and diaphragmatic control.</p>
          </div>

          <div>
            <Link href="/week2/day1/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 2: Hooklying Hip Shifts
            </Link>
            <p className="text-lg text-white mt-2">Build control and awareness of hip shifting patterns.</p>
          </div>

          <div>
            <Link href="/week2/day1/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 3: Side-Lying Hip IR with Breath
            </Link>
            <p className="text-lg text-white mt-2">Improve internal hip rotation and breath coordination.</p>
          </div>

          <div>
            <Link href="/week2/day1/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 4: Supine 90-90 Leg Lowering
            </Link>
            <p className="text-lg text-white mt-2">Reinforce core stability and rib-pelvis alignment.</p>
          </div>

          <div>
            <Link href="/week2/day1/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 5: Wall Supported Heel Press
            </Link>
            <p className="text-lg text-white mt-2">Enhance hamstring engagement with pelvic control.</p>
          </div>
        </div>
      </div>
    </DayLayout>
  );
}
