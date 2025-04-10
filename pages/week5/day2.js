import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week5Day2() {
  return (
    <DayLayout
      title="Week 5 - Day 2"
      subtitle="Single Leg and Hip Control"
      prevDay="/week5/day1"
      currentWeek="/week5"
      nextDay="/week5/day3"
    >
      <div className="space-y-8">
        <div>
          <Link href="/week5/day2/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 1: Staggered Stance Squats with Rib Stability
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Develop single-leg loading and pelvic control.
          </p>
        </div>

        <div>
          <Link href="/week5/day2/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 2: Lateral Lunges with Breath Control
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Improve lateral hip control and rib stability.
          </p>
        </div>

        <div>
          <Link href="/week5/day2/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 3: Side-Lying Hip Abduction with Breath Focus
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Build lateral hip strength with breath control.
          </p>
        </div>

        <div>
          <Link href="/week5/day2/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 4: Single-Leg Glute Bridge with Rib Stability
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Develop posterior chain strength and hip control.
          </p>
        </div>

        <div>
          <Link href="/week5/day2/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 5: Supine Rib Shift with Core Engagement
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Develop core control with subtle rib shifting.
          </p>
        </div>
      </div>
    </DayLayout>
  );
}
