import Nav from '../components/Nav';
import Link from 'next/link';

export default function Week4() {
  return (
    <>
      <Nav />
      <main className="px-8 text-white min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 4</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-8">Rib & Pelvic Stability in Motion</h2>
          
          <div className="flex gap-1">
            <Link href="/week4/day1" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-base py-1.5 px-2 rounded text-center">Day 1</Link>
            <Link href="/week4/day2" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-base py-1.5 px-2 rounded text-center">Day 2</Link>
            <Link href="/week4/day3" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-base py-1.5 px-2 rounded text-center">Day 3</Link>
            <Link href="/week4/day4" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-base py-1.5 px-2 rounded text-center">Day 4</Link>
            <Link href="/week4/day5" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-base py-1.5 px-2 rounded text-center">Day 5</Link>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Purpose of This Week</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Integrate dynamic movement patterns with breath and rib control.</li>
              <li>Reinforce strength and stability during more complex movements.</li>
              <li>Develop confidence in advanced hinge and squat patterns.</li>
              <li>Prepare the body for more progressive loaded movements in future programs</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Goals for Week 4</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Improve movement efficiency by combining breath and core control.</li>
              <li>Enhance control of pelvic and ribcage positions during loaded movements.</li>
              <li>Develop strength in hinge, squat, and rotational patterns.</li>
              <li>Increase awareness of balance, stability, and control under dynamic conditions.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Tips for Success</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Maintain steady breathing while performing more complex movements.</li>
              <li>Focus on smooth, controlled transitions between positions.</li>
              <li>Use the breath to stabilize the ribcage and pelvis throughout each movement.</li>
              <li>Be mindful of fatigue—quality of movement is more important than quantity.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
