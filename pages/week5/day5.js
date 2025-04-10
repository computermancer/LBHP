import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week5Day5() {
  return (
    <DayLayout
      title="Week 5 - Day 5"
      subtitle="Mobility, Breath, and Control"
      prevDay="/week5/day4"
      currentWeek="/week5"
      nextDay="/week6/day1"
      disableNext={true}
    >
      <div className="space-y-8">
        <div>
          <Link href="/week5/day5/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 1: Horse Stance with Rib Control (Longer Hold)
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Reinforce isometric lower body endurance.
          </p>
        </div>

        <div>
          <Link href="/week5/day5/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 2: Calf Raises with Rib and Pelvic Control
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Strengthen calves while maintaining neutral alignment.
          </p>
        </div>

        <div>
          <Link href="/week5/day5/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 3: Tib Raises with Breath Awareness
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Develop anterior shin strength and balance.
          </p>
        </div>

        <div>
          <Link href="/week5/day5/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 4: Hooklying Rib Expansion with Marching
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Reinforce core and breath control with marching.
          </p>
        </div>

        <div>
          <Link href="/week5/day5/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 5: Supine Pelvic Rock with Breath Control
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Enhance pelvic mobility and breath-guided awareness.
          </p>
        </div>
      </div>
    </DayLayout>
  );
}
