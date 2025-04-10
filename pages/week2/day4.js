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
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <Link href="/week2/day4/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 1: Supine Rib Shift with Breath
            </Link>
            <p className="text-lg text-white mt-2">Enhance ribcage awareness and asymmetrical breath control.</p>
          </div>

          <div>
            <Link href="/week2/day4/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 2: Seated Posterior Pelvic Rocking
            </Link>
            <p className="text-lg text-white mt-2">Maintain pelvic awareness and improve pelvic rhythm.</p>
          </div>

          <div>
            <Link href="/week2/day4/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 3: Seated Thoracic Flexion/Extension
            </Link>
            <p className="text-lg text-white mt-2">Develop awareness of spinal flexion and extension.</p>
          </div>

          <div>
            <Link href="/week2/day4/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 4: Supine Hip Shifts with Rib Stability
            </Link>
            <p className="text-lg text-white mt-2">Build core and hip stability through shifting patterns.</p>
          </div>

          <div>
            <Link href="/week2/day4/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 5: Seated Breath with Pelvic Awareness
            </Link>
            <p className="text-lg text-white mt-2">Enhance breath control and pelvic stability.</p>
          </div>
        </div>
      </div>
    </DayLayout>
  );
}
