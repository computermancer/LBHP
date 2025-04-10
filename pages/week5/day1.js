import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week5Day1() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week4/day5" 
        currentWeek="/week5" 
        nextDay="/week5/day2" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 5 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Lower Body Control and Strength</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week5/day1/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Bodyweight Squats with Rib Control
              </Link>
              <p className="text-lg text-white mt-2">Reinforce squat mechanics with core stability.</p>
            </div>

            <div>
              <Link href="/week5/day1/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Horse Stance Hold (Parallel to Floor)
              </Link>
              <p className="text-lg text-white mt-2">Develop isometric strength and endurance in the lower body.</p>
            </div>

            <div>
              <Link href="/week5/day1/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Kickstand RDL with Hip Control
              </Link>
              <p className="text-lg text-white mt-2">Enhance posterior chain and hip stability.</p>
            </div>

            <div>
              <Link href="/week5/day1/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Wall Supported Split Squat Hold
              </Link>
              <p className="text-lg text-white mt-2">Strengthen glutes, quads, and core in a split stance.</p>
            </div>

            <div>
              <Link href="/week5/day1/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Supine Marching with Core Control
              </Link>
              <p className="text-lg text-white mt-2">Reinforce pelvic stability during dynamic movement.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
