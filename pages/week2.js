import Nav from '../components/Nav';
import Link from 'next/link';

export default function Week2() {
  return (
    <>
      <Nav />
      <main className="p-8 text-gray-200 min-h-screen font-sans">
        <h1 className="text-orange-300 text-3xl font-bold mb-6">Week 2: Strengthen & Stabilize</h1>

        <div className="space-y-4 mb-6">
          <Link href="/week2/day1" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
            Day 1
          </Link>
          <Link href="/week2/day2" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
            Day 2
          </Link>
          <Link href="/week2/day3" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
            Day 3
          </Link>
          <Link href="/week2/day4" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
            Day 4
          </Link>
          <Link href="/week2/day5" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
            Day 5
          </Link>
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
      </main>
    </>
  );
}
