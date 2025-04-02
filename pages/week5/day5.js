import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day5() {
  return (
    <>
      <Nav />
      <main className="p-8 text-gray-200 min-h-screen font-sans">
        <h1 className="text-orange-300 text-3xl font-bold mb-6">Week 5 - Day 5</h1>

        <div className="space-y-6">
          
          <div>
            <Link href="/week5/day5/drill1" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 1: Horse Stance with Rib Control
            </Link>
            <p className="text-lg text-white mb-4">Reinforce isometric lower body endurance.</p>
          </div>
        
          <div>
            <Link href="/week5/day5/drill2" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 2: Calf Raises with Rib and Pelvic Control
            </Link>
            <p className="text-lg text-white mb-4">Strengthen calves while maintaining neutral alignment.</p>
          </div>
        
          <div>
            <Link href="/week5/day5/drill3" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 3: Tib Raises with Breath Awareness
            </Link>
            <p className="text-lg text-white mb-4">Develop anterior shin strength and balance.</p>
          </div>
        
          <div>
            <Link href="/week5/day5/drill4" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 4: Hooklying Rib Expansion with Marching
            </Link>
            <p className="text-lg text-white mb-4">Reinforce core and breath control with marching.</p>
          </div>
        
          <div>
            <Link href="/week5/day5/drill5" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 5: Supine Pelvic Rock with Breath Control
            </Link>
            <p className="text-lg text-white mb-4">Enhance pelvic mobility and breath-guided awareness.</p>
          </div>
        
        </div>
      </main>
    </>
  );
}
