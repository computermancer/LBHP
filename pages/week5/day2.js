import Nav from '../../components/Nav';
import DayNavBar from '../../components/DayNavBar';
import Link from 'next/link';

export default function Week5Day2() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <DayNavBar 
        prevDay="/week5/day1" 
        currentWeek="/week5" 
        nextDay="/week5/day3" 
      />
      <main className="px-8 text-gray-200 font-sans pt-6 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 5 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-6">Single Leg and Hip Control</h2>
          
          <div className="space-y-8">
            <div>
              <Link href="/week5/day2/drill1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 1: Staggered Stance Squats with Rib Stability
              </Link>
              <p className="text-lg text-white mt-2">Develop single-leg loading and pelvic control.</p>
            </div>

            <div>
              <Link href="/week5/day2/drill2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 2: Lateral Lunges with Breath Control
              </Link>
              <p className="text-lg text-white mt-2">Improve lateral hip control and rib stability.</p>
            </div>

            <div>
              <Link href="/week5/day2/drill3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 3: Side-Lying Hip Abduction with Breath Focus
              </Link>
              <p className="text-lg text-white mt-2">Build lateral hip strength with breath control.</p>
            </div>

            <div>
              <Link href="/week5/day2/drill4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 4: Single-Leg Glute Bridge with Rib Stability
              </Link>
              <p className="text-lg text-white mt-2">Develop posterior chain strength and hip control.</p>
            </div>

            <div>
              <Link href="/week5/day2/drill5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Drill 5: Supine Rib Shift with Core Engagement
              </Link>
              <p className="text-lg text-white mt-2">Develop core control with subtle rib shifting.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
