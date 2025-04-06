import Nav from '../components/Nav';
import Link from 'next/link';

export default function Week3() {
  return (
    <>
      <Nav />
      <main className="px-8 text-white min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 3</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Hip Mobility and Core Integration</h2>
          
          <div className="flex gap-1 mb-8">
            <Link href="/week3/day1" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 1</Link>
            <Link href="/week3/day2" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 2</Link>
            <Link href="/week3/day3" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 3</Link>
            <Link href="/week3/day4" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 4</Link>
            <Link href="/week3/day5" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 5</Link>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Purpose of This Week</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Enhance hip mobility and stability.</li>
              <li>Strengthen core integration with movement.</li>
              <li>Develop more complex movement patterns.</li>
              <li>Build endurance for sustained positions.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Goals for Week 3</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Improve hip range of motion and control.</li>
              <li>Strengthen core stability during movement.</li>
              <li>Master more complex movement sequences.</li>
              <li>Increase endurance for held positions.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Tips for Success</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Focus on smooth transitions between movements.</li>
              <li>Maintain proper form throughout exercises.</li>
              <li>Gradually increase duration of held positions.</li>
              <li>Listen to your body and rest when needed.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
