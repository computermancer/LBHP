import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week4Day2() {
  return (
    <DayLayout
      title="Week 4 - Day 2"
      subtitle="Core and Pelvic Stability in Action"
      prevDay="/week4/day1"
      currentWeek="/week4"
      nextDay="/week4/day3"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <Link href="/week4/day2/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 1: Seated Thoracic Flexion and Extension
            </Link>
            <p className="text-lg text-white mt-2">Improve thoracic mobility while maintaining pelvis control.</p>
          </div>

          <div>
            <Link href="/week4/day2/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 2: Supine 90-90 Leg Lowering with Breath
            </Link>
            <p className="text-lg text-white mt-2">Reinforce core control while lowering the legs with stability.</p>
          </div>

          <div>
            <Link href="/week4/day2/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 3: Seated Spine Rotation with Arm Reach
            </Link>
            <p className="text-lg text-white mt-2">Develop rotational control and thoracic mobility.</p>
          </div>

          <div>
            <Link href="/week4/day2/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 4: Wall Hamstring March with Rib Stability
            </Link>
            <p className="text-lg text-white mt-2">Build posterior chain control while maintaining rib control.</p>
          </div>

          <div>
            <Link href="/week4/day2/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 5: Prone Hip IR and Extension with Control
            </Link>
            <p className="text-lg text-white mt-2">Enhance hip control and posterior chain engagement.</p>
          </div>
        </div>
      </div>
    </DayLayout>
  );
}
