import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day1() {
  return (
    <>
      <Nav />
      <main className="p-8 text-gray-200 min-h-screen font-sans">
        <h1 className="text-orange-300 text-3xl font-bold mb-6">Week 4 - Day 1</h1>

        <div className="space-y-6">
          
          <div>
            <Link href="/week4/day1/drill1" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 1: Supine Rib Shift with Breath Control
            </Link>
            <p className="text-lg text-white mb-4">Develop lateral rib control while maintaining pelvis stability.</p>
          </div>
        
          <div>
            <Link href="/week4/day1/drill2" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 2: Seated Hip Shifts with Breath Awareness
            </Link>
            <p className="text-lg text-white mb-4">Reinforce pelvic control and hip awareness in seated positions.</p>
          </div>
        
          <div>
            <Link href="/week4/day1/drill3" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 3: Hooklying Rib Expansion with Marching
            </Link>
            <p className="text-lg text-white mb-4">Build core and rib stability while adding dynamic movement.</p>
          </div>
        
          <div>
            <Link href="/week4/day1/drill4" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 4: Wall Supported Hinge with Arm Reach
            </Link>
            <p className="text-lg text-white mb-4">Strengthen posterior chain while maintaining ribcage control.</p>
          </div>
        
          <div>
            <Link href="/week4/day1/drill5" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 5: Quadruped Rock Back with Reach Focus
            </Link>
            <p className="text-lg text-white mb-4">Improve pelvic mobility with controlled rib and breath awareness.</p>
          </div>
        
        </div>
      </main>
    </>
  );
}
