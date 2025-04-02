import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day1() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-3xl mb-2 font-bold">Week 3 - Day 1</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-6">Pelvic Control and Breath Integration</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week3/day1/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Supine Diaphragm Reset
              </Link>
              <p className="text-lg text-white mt-2">Reset breathing pattern and ribcage position.</p>
            </div>

            <div>
              <Link href="/week3/day1/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Standing Pelvic Tilt
              </Link>
              <p className="text-lg text-white mt-2">Develop standing pelvic control and awareness.</p>
            </div>

            <div>
              <Link href="/week3/day1/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Seated Hip Shift with Breath
              </Link>
              <p className="text-lg text-white mt-2">Enhance hip mobility with breath coordination.</p>
            </div>

            <div>
              <Link href="/week3/day1/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Wall Supported Hinge
              </Link>
              <p className="text-lg text-white mt-2">Refine hip hinge pattern with wall support.</p>
            </div>

            <div>
              <Link href="/week3/day1/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Supine Marching with Core Control
              </Link>
              <p className="text-lg text-white mb-4">Build core stability during dynamic movement.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
