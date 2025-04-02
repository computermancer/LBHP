import Nav from '../../components/Nav';
import Link from 'next/link';

export default function Day5() {
  return (
    <>
      <Nav />
      <main className="p-8 text-gray-200 min-h-screen font-sans">
        <h1 className="text-orange-300 text-3xl font-bold mb-6">Week 4 - Day 5</h1>

        <div className="space-y-6">
          
          <div>
            <Link href="/week4/day5/drill1" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 1: Supine Diaphragm Reset
            </Link>
            <p className="text-lg text-white mb-4">Reset breathing pattern and ribcage position.</p>
          </div>
        
          <div>
            <Link href="/week4/day5/drill2" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 2: Standing Pelvic Tilt
            </Link>
            <p className="text-lg text-white mb-4">Develop standing pelvic control and awareness.</p>
          </div>
        
          <div>
            <Link href="/week4/day5/drill3" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 3: Seated Hip Shift with Breath
            </Link>
            <p className="text-lg text-white mb-4">Enhance hip mobility with breath coordination.</p>
          </div>
        
          <div>
            <Link href="/week4/day5/drill4" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 4: Wall Supported Hinge
            </Link>
            <p className="text-lg text-white mb-4">Refine hip hinge pattern with wall support.</p>
          </div>
        
          <div>
            <Link href="/week4/day5/drill5" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
              Drill 5: Supine Marching with Core Control
            </Link>
            <p className="text-lg text-white mb-4">Build core stability during dynamic movement.</p>
          </div>
        
        </div>
      </main>
    </>
  );
}
