import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week1Day3() {
  return (
    <DayLayout
      title="Week 1 - Day 3"
      subtitle="Breath Control and Rhythmic Movement"
      prevDay="/week1/day2"
      currentWeek="/week1"
      nextDay="/week1/day4"
    >
      <div className="space-y-8">
        <div>
          <Link href="/week1/day3/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 1: Breath Reset in Side-Lying
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Promote ribcage and diaphragm reset through focused breath.
          </p>
        </div>

        <div>
          <Link href="/week1/day3/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 2: Rhythmic Reach & Roll
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Enhance rotational control and coordination.
          </p>
        </div>

        <div>
          <Link href="/week1/day3/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 3: Supported Breath Patterning
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Reinforce steady breath control and rib awareness.
          </p>
        </div>

        <div>
          <Link href="/week1/day3/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 4: Relaxed Spine Rocking
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Encourage fluid motion through the pelvis and spine.
          </p>
        </div>

        <div>
          <Link href="/week1/day3/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 5: Gentle Bilateral Rocking
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Improve pelvic mobility and relaxation.
          </p>
        </div>
      </div>
    </DayLayout>
  );
}
