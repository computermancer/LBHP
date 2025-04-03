import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day2() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 4 - Day 2</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Core and Pelvic Stability in Action</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week4/day2/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Seated Thoracic Flexion and Extension
              </Link>
              <p className="text-lg text-white mt-2">Improve thoracic mobility while maintaining pelvis control.</p>
            </div>

            <div>
              <Link href="/week4/day2/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Supine 90-90 Leg Lowering with Breath
              </Link>
              <p className="text-lg text-white mt-2">Reinforce core control while lowering the legs with stability.</p>
            </div>

            <div>
              <Link href="/week4/day2/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Seated Spine Rotation with Arm Reach
              </Link>
              <p className="text-lg text-white mt-2">Develop rotational control and thoracic mobility.</p>
            </div>

            <div>
              <Link href="/week4/day2/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Wall Hamstring March with Rib Stability
              </Link>
              <p className="text-lg text-white mt-2">Build posterior chain control while maintaining rib control.</p>
            </div>

            <div>
              <Link href="/week4/day2/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Prone Hip IR and Extension with Control
              </Link>
              <p className="text-lg text-white mb-4">Develop awareness of hip rotation and hip extension.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
