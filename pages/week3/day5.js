import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week3Day5() {
  return (
    <DayLayout
      title="Week 3 - Day 5"
      subtitle="Breath, Mobility, and Relaxation"
      prevDay="/week3/day4"
      currentWeek="/week3"
      nextDay="/week4/day1"
    >
      <div className="space-y-8">
        <div>
          <Link href="/week3/day5/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 1: Crocodile Breathing with Rib Expansion
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Reinforce full-body breath expansion.
          </p>
        </div>

        <div>
          <Link href="/week3/day5/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 2: Supine Pelvic Rock with Breath Focus
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Develop gentle pelvic motion with breath-guided movement.
          </p>
        </div>

        <div>
          <Link href="/week3/day5/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 3: Seated Spine Twist with Arm Reach
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Improve thoracic rotation with coordinated breath and movement.
          </p>
        </div>

        <div>
          <Link href="/week3/day5/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 4: Wall Supported Marching with Rib Control
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Build ribcage control and core stability.
          </p>
        </div>

        <div>
          <Link href="/week3/day5/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 5: Side-Lying Hip IR and Breathing
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Enhance internal hip rotation and improve breath coordination.
          </p>
        </div>
      </div>
    </DayLayout>
  );
}
