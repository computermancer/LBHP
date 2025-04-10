import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week1Day4() {
  return (
    <DayLayout
      title="Week 1 - Day 4"
      subtitle="Pelvic and Rib Control"
      prevDay="/week1/day3"
      currentWeek="/week1"
      nextDay="/week1/day5"
    >
      <div className="space-y-8">
        <div>
          <Link href="/week1/day4/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 1: Supine Diaphragm Reset
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Establish deeper diaphragmatic control and relaxation.
          </p>
        </div>

        <div>
          <Link href="/week1/day4/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 2: Seated Posterior Pelvic Rocking
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Improve awareness of pelvic positioning.
          </p>
        </div>

        <div>
          <Link href="/week1/day4/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 3: Seated Thoracic Extension
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Strengthen thoracic extension and rib positioning.
          </p>
        </div>

        <div>
          <Link href="/week1/day4/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 4: Supine Hip Shift with Breath
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Build control of pelvic shifts and core integration.
          </p>
        </div>

        <div>
          <Link href="/week1/day4/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 5: Seated Breath with Rib Control
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Maintain ribcage and pelvis control with steady breath.
          </p>
        </div>
      </div>
    </DayLayout>
  );
}
