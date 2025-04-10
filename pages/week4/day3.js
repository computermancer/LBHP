import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week4Day3() {
  return (
    <DayLayout
      title="Week 4 - Day 3"
      subtitle="Spinal Control and Hip Mobility"
      prevDay="/week4/day2"
      currentWeek="/week4"
      nextDay="/week4/day4"
    >
      <div className="space-y-8">
        <div>
          <Link href="/week4/day3/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 1: Cat-Cow with Rib Expansion
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Develop spinal flexion and extension with breath control.
          </p>
        </div>

        <div>
          <Link href="/week4/day3/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 2: Seated Posterior Pelvic Rocking
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Enhance awareness of pelvic motion in seated positions.
          </p>
        </div>

        <div>
          <Link href="/week4/day3/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 3: Supine 90-90 Rib Shift with Breath
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Build rib and pelvis coordination while breathing.
          </p>
        </div>

        <div>
          <Link href="/week4/day3/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 4: Wall Supported Deep Squat Hold with Reach
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Increase squat stability with rib and pelvis awareness.
          </p>
        </div>

        <div>
          <Link href="/week4/day3/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
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
