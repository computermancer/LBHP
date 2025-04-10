import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week2Day5() {
  return (
    <DayLayout
      title="Week 2 - Day 5"
      subtitle="Breath, Rotation, and Pelvic Coordination"
      prevDay="/week2/day4"
      currentWeek="/week2"
      nextDay="/week3/day1"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <Link href="/week2/day5/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 1: Crocodile Breathing with Rib Expansion
            </Link>
            <p className="text-lg text-white mt-2">Reinforce full diaphragmatic breath expansion.</p>
          </div>

          <div>
            <Link href="/week2/day5/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 2: Cat-Cow with Rotational Focus
            </Link>
            <p className="text-lg text-white mt-2">Improve spinal flexion/extension and incorporate rotation.</p>
          </div>

          <div>
            <Link href="/week2/day5/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 3: Seated Spine Twist with Arm Reach
            </Link>
            <p className="text-lg text-white mt-2">Increase rotational control and scapular mobility.</p>
          </div>

          <div>
            <Link href="/week2/day5/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 4: Supine Marching with Pelvic Control
            </Link>
            <p className="text-lg text-white mt-2">Strengthen rib-pelvis coordination and core control.</p>
          </div>

          <div>
            <Link href="/week2/day5/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 5: Seated Breath with Hip Shifts
            </Link>
            <p className="text-lg text-white mt-2">Enhance breath control and pelvic stability.</p>
          </div>
        </div>
      </div>
    </DayLayout>
  );
}
