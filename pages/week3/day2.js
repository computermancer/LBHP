import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day2() {
  return (
    <>
      <Nav />
      <main className="p-8 text-gray-200 min-h-screen font-sans">
        <h1 className="text-orange-300 text-3xl font-bold mb-6">Week 3 - Day 2</h1>

        <div className="space-y-6">
          
          <div>
            <Link href="/week3/day2/drill1" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 1: Quadruped Reach with Rib Control
            </Link>
            <p className="text-lg text-white mb-4">Enhance rib control and core stability.</p>
          </div>
        
          <div>
            <Link href="/week3/day2/drill2" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 2: Seated Hip Hinge with Breath
            </Link>
            <p className="text-lg text-white mb-4">Promote hip hinge mechanics with breath control.</p>
          </div>
        
          <div>
            <Link href="/week3/day2/drill3" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 3: Standing Posterior Weight Shift
            </Link>
            <p className="text-lg text-white mb-4">Improve posterior chain awareness and balance.</p>
          </div>
        
          <div>
            <Link href="/week3/day2/drill4" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 4: Wall Hamstring Marching
            </Link>
            <p className="text-lg text-white mb-4">Activate hamstrings with controlled marching.</p>
          </div>
        
          <div>
            <Link href="/week3/day2/drill5" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 5: Prone Hip IR and Extension Drill
            </Link>
            <p className="text-lg text-white mb-4">Improve hip mobility and pelvic stability.</p>
          </div>
        
        </div>
      </main>
    </>
  );
}
