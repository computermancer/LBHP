import DayLayout from '../../components/DayLayout';
import Link from 'next/link';

export default function Week1Day5() {
  return (
    <DayLayout
      title="Week 1 - Day 5"
      subtitle="Breath, Spinal Flexion, and Core Control"
      prevDay="/week1/day4"
      currentWeek="/week1"
      nextDay="/week2/day1"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <Link href="/week1/day5/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 1: Diaphragmatic Breathing in Crocodile Position
            </Link>
            <p className="text-lg text-white mt-2">Encourage full 3D breath expansion.</p>
          </div>

          <div>
            <Link href="/week1/day5/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 2: Cat-Cow with Breath Focus
            </Link>
            <p className="text-lg text-white mt-2">Develop spinal flexion and extension awareness.</p>
          </div>

          <div>
            <Link href="/week1/day5/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 3: Seated Spine Twist with Breath
            </Link>
            <p className="text-lg text-white mt-2">Improve thoracic rotation with controlled breathing.</p>
          </div>

          <div>
            <Link href="/week1/day5/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 4: Supine Marching with Rib Control
            </Link>
            <p className="text-lg text-white mt-2">Reinforce pelvic and rib stability with leg movement.</p>
          </div>

          <div>
            <Link href="/week1/day5/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
              Drill 5: Seated Breath and Pelvic Awareness
            </Link>
            <p className="text-lg text-white mt-2">Increase awareness of breath and pelvic positioning.</p>
          </div>
        </div>
      </div>
    </DayLayout>
  );
}
