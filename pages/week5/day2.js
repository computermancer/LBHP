import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day2() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 5 - Day 2</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Dynamic Movement and Control</h2>

          <div className="space-y-4">
            <div>
              <Link href="/week5/day2/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Hooklying Breath with Pelvic Awareness
              </Link>
              <p className="text-lg text-white mt-2">Enhance breath control and establish awareness of pelvic movement.</p>
            </div>

            <div>
              <Link href="/week5/day2/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Seated Hip Shift with Rib Stability
              </Link>
              <p className="text-lg text-white mt-2">Develop control of hip shifting with minimal ribcage movement.</p>
            </div>

            <div>
              <Link href="/week5/day2/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Supine Diaphragm Reset with Reach
              </Link>
              <p className="text-lg text-white mt-2">Reinforce ribcage control during breath cycles.</p>
            </div>

            <div>
              <Link href="/week5/day2/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Quadruped Rock Back with Breath Focus
              </Link>
              <p className="text-lg text-white mt-2">Improve pelvic mobility and maintain core stability.</p>
            </div>

            <div>
              <Link href="/week5/day2/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Drill 5: Wall Supported Hinge with Arm Reach
              </Link>
              <p className="text-lg text-white mb-4">Build posterior chain activation while maintaining rib control.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
