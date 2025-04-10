import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week2Day3() {
  return (
    <DayLayout
      title="Week 2 - Day 3"
      subtitle="Pelvic Control and Hip Stability"
      prevDay="/week2/day2"
      currentWeek="/week2"
      nextDay="/week2/day4"
    >
      <div className="space-y-8">
        <div>
          <Link href="/week2/day3/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 1: Hooklying Pelvic Clocks
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Develop subtle awareness and control of pelvic tilt.
          </p>
        </div>

        <div>
          <Link href="/week2/day3/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 2: Supine Diaphragm Reset with Reach
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Refine breath control with active upper body reach.
          </p>
        </div>

        <div>
          <Link href="/week2/day3/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 3: Seated Spine Rotation with Breath
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Increase thoracic rotation with breath control.
          </p>
        </div>

        <div>
          <Link href="/week2/day3/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 4: Supported Side-Lying Hip Abduction
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Improve lateral hip strength and pelvic stability.
          </p>
        </div>

        <div>
          <Link href="/week2/day3/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 5: Wall Supported Deep Squat Hold
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Build confidence in deep squat position while maintaining control.
          </p>
        </div>
      </div>
    </DayLayout>
  );
}
