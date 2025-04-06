import Nav from '../components/Nav';
import Link from 'next/link';

export default function Week2() {
  return (
    <>
      <Nav />
      <main className="px-8 text-white min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 2</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Rib Expansion and Hip Control</h2>
          
          <div className="flex gap-1 mb-8">
            <Link href="/week2/day1" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 1</Link>
            <Link href="/week2/day2" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 2</Link>
            <Link href="/week2/day3" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 3</Link>
            <Link href="/week2/day4" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 4</Link>
            <Link href="/week2/day5" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 5</Link>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Purpose of This Week</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Expand ribcage awareness and control.</li>
              <li>Develop hip mobility and stability.</li>
              <li>Integrate breath with movement patterns.</li>
              <li>Build foundation for dynamic movements.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Goals for Week 2</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Improve ribcage expansion and control.</li>
              <li>Enhance hip mobility and stability.</li>
              <li>Develop coordinated breath-movement patterns.</li>
              <li>Build confidence in basic movement patterns.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Tips for Success</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Focus on quality of movement over quantity.</li>
              <li>Pay attention to breath patterns during exercises.</li>
              <li>Take breaks when needed to maintain form.</li>
              <li>Notice how your body responds to different movements.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
