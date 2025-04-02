import Nav from '../components/Nav';
import Link from 'next/link';

export default function Week2() {
  return (
    <>
      <Nav />
      <main className="px-8 text-white min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 2</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-8">Rib Control & Hip Integration</h2>
          
          <div className="flex gap-1">
            <Link href="/week2/day1" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-base py-1.5 px-2 rounded text-center">Day 1</Link>
            <Link href="/week2/day2" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-base py-1.5 px-2 rounded text-center">Day 2</Link>
            <Link href="/week2/day3" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-base py-1.5 px-2 rounded text-center">Day 3</Link>
            <Link href="/week2/day4" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-base py-1.5 px-2 rounded text-center">Day 4</Link>
            <Link href="/week2/day5" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-base py-1.5 px-2 rounded text-center">Day 5</Link>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Purpose of This Week</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Increase pelvic and ribcage control through dynamic positions.</li>
              <li>Introduce basic rotational movements and refine rib-pelvis connection.</li>
              <li>Develop comfort with hip hinging and improve thoracic extension.</li>
              <li>Reinforce breath control and interoceptive feedback.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Goals for Week 2</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Refine awareness of pelvic and thoracic alignment during movement.</li>
              <li>Improve rotational control through the thoracic spine.</li>
              <li>Enhance stability and control in transitional positions.</li>
              <li>Develop better coordination between breath and movement.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Tips for Success</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Focus on maintaining neutral pelvis and rib alignment during movement.</li>
              <li>Move deliberately and avoid rushing through drills.</li>
              <li>Pay attention to any asymmetries between sides.</li>
              <li>Prioritize breath control and coordinated timing.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
