import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Day5() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 5 - Day 5</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Mobility, Breath, and Control</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week5/day5/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Horse Stance with Rib Control (Longer Hold)
              </Link>
              <p className="text-lg text-white mt-2">Reinforce isometric lower body endurance.</p>
            </div>

            <div>
              <Link href="/week5/day5/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Calf Raises with Rib and Pelvic Control
              </Link>
              <p className="text-lg text-white mt-2">Strengthen calves while maintaining neutral alignment.</p>
            </div>

            <div>
              <Link href="/week5/day5/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Tib Raises with Breath Awareness
              </Link>
              <p className="text-lg text-white mt-2">Develop anterior shin strength and balance.</p>
            </div>

            <div>
              <Link href="/week5/day5/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Hooklying Rib Expansion with Marching
              </Link>
              <p className="text-lg text-white mt-2">Reinforce core and breath control with marching.</p>
            </div>

            <div>
              <Link href="/week5/day5/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Supine Pelvic Rock with Breath Control
              </Link>
              <p className="text-lg text-white mb-4">Enhance pelvic mobility and breath-guided awareness.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
