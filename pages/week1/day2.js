import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day2() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-3xl mb-6 font-bold">Week 1 - Day 2</h1>

          <div className="space-y-4">
            <div>
              <Link href="/week1/day2/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Wall Sit with Pelvic Tilt
              </Link>
              <p className="text-lg text-white mt-2">Strengthen lower body while maintaining pelvic control.</p>
            </div>

            <div>
              <Link href="/week1/day2/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Supine Diaphragmatic Breathing
              </Link>
              <p className="text-lg text-white mt-2">Enhance breath awareness and core stability.</p>
            </div>

            <div>
              <Link href="/week1/day2/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Standing Pelvic Tilt
              </Link>
              <p className="text-lg text-white mt-2">Develop standing pelvic control and awareness.</p>
            </div>

            <div>
              <Link href="/week1/day2/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Bird Dog Prep
              </Link>
              <p className="text-lg text-white mt-2">Build core stability and coordination.</p>
            </div>

            <div>
              <Link href="/week1/day2/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Wall Plank Hold
              </Link>
              <p className="text-lg text-white mb-4">Strengthen core and maintain neutral spine.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
