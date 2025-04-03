import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day5() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 3 - Day 5</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Breath, Mobility, and Relaxation</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week3/day5/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Crocodile Breathing with Rib Expansion
              </Link>
              <p className="text-lg text-white mt-2">Reinforce full-body breath expansion.</p>
            </div>

            <div>
              <Link href="/week3/day5/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Supine Pelvic Rock with Breath Focus
              </Link>
              <p className="text-lg text-white mt-2">Develop gentle pelvic motion with breath-guided movement.</p>
            </div>

            <div>
              <Link href="/week3/day5/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Seated Spine Twist with Arm Reach
              </Link>
              <p className="text-lg text-white mt-2">Improve thoracic rotation with coordinated breath and movement.</p>
            </div>

            <div>
              <Link href="/week3/day5/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Wall Supported Marching with Rib Control
              </Link>
              <p className="text-lg text-white mt-2">Build ribcage control and core stability.</p>
            </div>

            <div>
              <Link href="/week3/day5/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Side-Lying Hip IR and Breathing
              </Link>
              <p className="text-lg text-white mb-4">Enhance internal hip rotation and improve breath coordination.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
