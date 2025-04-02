import Nav from '../components/Nav';
import Link from 'next/link';

export default function Week3() {
  return (
    <>
      <Nav />
      <main className="px-8 text-white min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 3</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Dynamic Movement and Control</h2>
          
          <div className="flex gap-1 mb-8">
            <Link href="/week3/day1" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 1</Link>
            <Link href="/week3/day2" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 2</Link>
            <Link href="/week3/day3" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 3</Link>
            <Link href="/week3/day4" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 4</Link>
            <Link href="/week3/day5" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 5</Link>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Purpose of This Week</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Reinforce pelvic and ribcage coordination during more dynamic movements.</li>
              <li>Continue developing control in hip hinging and spinal mobility.</li>
              <li>Introduce further rotational patterns for thoracic mobility.</li>
              <li>Enhance breath awareness to support stability and control.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Goals for Week 3</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Build confidence in deeper hip movements and spinal flexion/extension.</li>
              <li>Improve rotational strength and mobility through thoracic and lumbar integration.</li>
              <li>Develop increased control of breath while performing dynamic movements.</li>
              <li>Refine awareness of posture and alignment in different positions.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Tips for Success</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Focus on maintaining a stable pelvis and ribcage through each movement.</li>
              <li>Move with control—prioritize quality over quantity.</li>
              <li>Continue using breath as a guide to enhance movement efficiency.</li>
              <li>Monitor any asymmetries between sides and adjust as needed.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
