import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week1Day1() {
  return (
    <DayLayout
      title="Week 1 - Day 1"
      subtitle="Groundwork and Awareness"
      prevDay={null}
      currentWeek="/week1"
      nextDay="/week1/day2"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <Link href="/week1/day1/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 1: Posterior Pelvic Tilt on Wall
            </Link>
            <p className="text-lg text-white mt-2">Develop awareness of pelvic tilt and lumbar control.</p>
          </div>

          <div>
            <Link href="/week1/day1/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 2: Hooklying Belly Breathing
            </Link>
            <p className="text-lg text-white mt-2">Improve breath control and diaphragmatic function.</p>
          </div>

          <div>
            <Link href="/week1/day1/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 3: Seated Pelvic Rocking
            </Link>
            <p className="text-lg text-white mt-2">Increase pelvic mobility and coordination.</p>
          </div>

          <div>
            <Link href="/week1/day1/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 4: Supine 90-90 Reach
            </Link>
            <p className="text-lg text-white mt-2">Enhance core stability and maintain rib-pelvis alignment.</p>
          </div>

          <div>
            <Link href="/week1/day1/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 5: Wall Hamstring Press
            </Link>
            <p className="text-lg text-white mt-2">Activate hamstrings to stabilize pelvis and core.</p>
          </div>
        </div>
      </div>
    </DayLayout>
  );
}
