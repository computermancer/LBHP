import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day1() {
  return (
    <>
      <Nav />
      <main className="p-8 text-gray-200 min-h-screen font-sans">
        <h1 className="text-orange-300 text-3xl font-bold mb-6">Week 3 - Day 1</h1>

        <div className="space-y-6">
          
          <div>
            <Link href="/week3/day1/drill1" className="block w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 1: Hooklying Breath with Pelvic Awareness
            </Link>
            <p className="text-lg text-white mb-4">Enhance breath control and establish awareness of pelvic movement.</p>
          </div>
        
          <div>
            <Link href="/week3/day1/drill2" className="block w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 2: Seated Hip Shift with Rib Stability
            </Link>
            <p className="text-lg text-white mb-4">Develop control of hip shifting with minimal ribcage movement.</p>
          </div>
        
          <div>
            <Link href="/week3/day1/drill3" className="block w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 3: Supine Diaphragm Reset with Reach
            </Link>
            <p className="text-lg text-white mb-4">Reinforce ribcage control during breath cycles.</p>
          </div>
        
          <div>
            <Link href="/week3/day1/drill4" className="block w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 4: Quadruped Rock Back with Breath Focus
            </Link>
            <p className="text-lg text-white mb-4">Improve pelvic mobility and maintain core stability.</p>
          </div>
        
          <div>
            <Link href="/week3/day1/drill5" className="block w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 5: Wall Supported Hinge with Arm Reach
            </Link>
            <p className="text-lg text-white mb-4">Build posterior chain activation while maintaining rib control.</p>
          </div>
        
        </div>
      </main>
    </>
  );
}
