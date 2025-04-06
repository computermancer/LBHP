import Nav from '../components/Nav';
import Link from 'next/link';

export default function Week4() {
  return (
    <>
      <Nav />
      <main className="px-8 text-white min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 4</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Dynamic Movement and Control</h2>
          
          <div className="flex gap-1 mb-8">
            <Link href="/week4/day1" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 1</Link>
            <Link href="/week4/day2" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 2</Link>
            <Link href="/week4/day3" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 3</Link>
            <Link href="/week4/day4" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 4</Link>
            <Link href="/week4/day5" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 5</Link>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Purpose of This Week</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Introduce more dynamic movement patterns.</li>
              <li>Strengthen stability during transitions.</li>
              <li>Develop coordination between body segments.</li>
              <li>Build confidence in fluid movements.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Goals for Week 4</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Master dynamic movement sequences.</li>
              <li>Improve stability during transitions.</li>
              <li>Enhance coordination between body parts.</li>
              <li>Develop fluidity in movement patterns.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Tips for Success</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Focus on smooth transitions between movements.</li>
              <li>Maintain proper form throughout exercises.</li>
              <li>Start slowly and increase speed gradually.</li>
              <li>Listen to your body and rest when needed.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
