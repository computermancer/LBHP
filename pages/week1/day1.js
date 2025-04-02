import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day1() {
  return (
    <>
      <Nav />
      <main className="p-4 sm:p-8 text-gray-200 min-h-screen font-sans">
        <h1 className="text-orange-300 text-3xl mb-6 font-bold">Week 1 - Day 1</h1>

        <div className="space-y-4">
          <div>
            <Link href="/week1/day1/drill1" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
              Drill 1: Posterior Pelvic Tilt on Wall
            </Link>
            <p className="text-lg text-white mt-2">Develop awareness of pelvic tilt and lumbar control.</p>
          </div>

          <div>
            <Link href="/week1/day1/drill2" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
              Drill 2: Hooklying Belly Breathing
            </Link>
            <p className="text-lg text-white mt-2">Improve breath control and diaphragmatic function.</p>
          </div>

          <div>
            <Link href="/week1/day1/drill3" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
              Drill 3: Seated Pelvic Rocking
            </Link>
            <p className="text-lg text-white mt-2">Increase pelvic mobility and coordination.</p>
          </div>

          <div>
            <Link href="/week1/day1/drill4" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
              Drill 4: Supine 90-90 Reach
            </Link>
            <p className="text-lg text-white mt-2">Enhance core stability and maintain rib-pelvis alignment.</p>
          </div>

          <div>
            <Link href="/week1/day1/drill5" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 5: Wall Hamstring Press
            </Link>
            <p className="text-lg text-white mb-4">Activate hamstrings to stabilize pelvis and core.</p>
          </div>
        </div>
      </main>
    </>
  );
}
