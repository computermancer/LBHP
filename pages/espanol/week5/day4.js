import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Day4() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 5 - Day 4</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Upper Body and Core Control</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week5/day4/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Wall Pushups with Rib Stability
              </Link>
              <p className="text-lg text-white mt-2">Introduce upper body pressing while maintaining core control.</p>
            </div>

            <div>
              <Link href="/week5/day4/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Chair Pushups with Pelvic Stability
              </Link>
              <p className="text-lg text-white mt-2">Progress pressing with greater load while maintaining control.</p>
            </div>

            <div>
              <Link href="/week5/day4/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Floor Pushups with Rib and Pelvic Control
              </Link>
              <p className="text-lg text-white mt-2">Build upper body and core strength in a plank position.</p>
            </div>

            <div>
              <Link href="/week5/day4/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Seated Spine Rotation with Reach
              </Link>
              <p className="text-lg text-white mt-2">Develop thoracic rotation and scapular movement.</p>
            </div>

            <div>
              <Link href="/week5/day4/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Side-Lying Hip IR and Breathing
              </Link>
              <p className="text-lg text-white mb-4">Improve hip mobility and breath control.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
