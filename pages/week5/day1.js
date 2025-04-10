import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week5Day1() {
  return (
    <DayLayout
      title="Week 5 - Day 1"
      subtitle="Lower Body Control and Strength"
      prevDay="/week4/day5"
      currentWeek="/week5"
      nextDay="/week5/day2"
    >
      <div className="space-y-8">
        <div>
          <Link href="/week5/day1/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 1: Bodyweight Squats with Rib Control
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Reinforce squat mechanics with core stability.
          </p>
        </div>

        <div>
          <Link href="/week5/day1/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 2: Horse Stance Hold (Parallel to Floor)
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Develop isometric strength and endurance in the lower body.
          </p>
        </div>

        <div>
          <Link href="/week5/day1/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 3: Kickstand RDL with Hip Control
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Enhance posterior chain and hip stability.
          </p>
        </div>

        <div>
          <Link href="/week5/day1/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 4: Wall Supported Split Squat Hold
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Strengthen glutes, quads, and core in a split stance.
          </p>
        </div>

        <div>
          <Link href="/week5/day1/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 5: Supine Marching with Core Control
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Reinforce pelvic stability during dynamic movement.
          </p>
        </div>
      </div>
    </DayLayout>
  );
}
