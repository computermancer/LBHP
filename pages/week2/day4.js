import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week2Day4() {
  return (
    <DayLayout
      title="Week 2 - Day 4"
      subtitle="Rib Shift and Thoracic Mobility"
      prevDay="/week2/day3"
      currentWeek="/week2"
      nextDay="/week2/day5"
    >
      <div className="space-y-8">
        <div>
          <Link href="/week2/day4/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 1: Supine Rib Shift with Breath
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Enhance ribcage awareness and asymmetrical breath control.
          </p>
        </div>

        <div>
          <Link href="/week2/day4/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 2: Seated Posterior Pelvic Rocking
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Maintain pelvic awareness and improve pelvic rhythm.
          </p>
        </div>

        <div>
          <Link href="/week2/day4/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 3: Seated Thoracic Flexion/Extension
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Develop awareness of spinal flexion and extension.
          </p>
        </div>

        <div>
          <Link href="/week2/day4/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 4: Supine Hip Shifts with Rib Stability
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Build core and hip stability through shifting patterns.
          </p>
        </div>

        <div>
          <Link href="/week2/day4/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[85px]">
            Drill 5: Seated Breath with Pelvic Awareness
            <br />
          </Link>
          <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[40px]">
            Reinforce breath and pelvic positioning control.
          </p>
        </div>
      </div>
    </DayLayout>
  );
}
