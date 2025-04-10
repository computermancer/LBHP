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
      <div className="space-y-8">
        <div>
          <Link href="/week2/day5/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 1: Crocodile Breathing with Rib Expansion
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Reinforce full diaphragmatic breath expansion.
          </p>
        </div>

        <div>
          <Link href="/week2/day5/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 2: Cat-Cow with Rotational Focus
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Improve spinal flexion/extension and incorporate rotation.
          </p>
        </div>

        <div>
          <Link href="/week2/day5/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 3: Seated Spine Twist with Arm Reach
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Increase rotational control and scapular mobility.
          </p>
        </div>

        <div>
          <Link href="/week2/day5/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 4: Supine Marching with Pelvic Control
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Strengthen rib-pelvis coordination and core control.
          </p>
        </div>

        <div>
          <Link href="/week2/day5/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 5: Seated Breath with Hip Shifts
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Increase awareness of pelvic shifts while maintaining breath control.
          </p>
        </div>
      </div>
    </DayLayout>
  );
}
