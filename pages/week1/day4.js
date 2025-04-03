import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day4() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 1 - Day 4</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Pelvic and Rib Control</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week1/day4/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Supine Diaphragm Reset
              </Link>
              <p className="text-lg text-white mt-2">Establish deeper diaphragmatic control and relaxation.</p>
            </div>

            <div>
              <Link href="/week1/day4/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Seated Posterior Pelvic Rocking
              </Link>
              <p className="text-lg text-white mt-2">Improve awareness of pelvic positioning.</p>
            </div>

            <div>
              <Link href="/week1/day4/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Seated Thoracic Extension
              </Link>
              <p className="text-lg text-white mt-2">Strengthen thoracic extension and rib positioning.</p>
            </div>

            <div>
              <Link href="/week1/day4/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Supine Hip Shift with Breath
              </Link>
              <p className="text-lg text-white mt-2">Build control of pelvic shifts and core integration.</p>
            </div>

            <div>
              <Link href="/week1/day4/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Seated Breath with Rib Control
              </Link>
              <p className="text-lg text-white mb-4">Maintain ribcage and pelvis control with steady breath.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
