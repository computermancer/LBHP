import Nav from '../components/Nav';
import Link from 'next/link';

export default function Week5() {
  return (
    <>
      <Nav />
      <main className="p-8 text-white min-h-screen font-sans">
        <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 5</h1>
        <h2 className="text-orange-300 text-xl font-semibold mb-8">Strength & Control Progression</h2>
        
        <div className="flex gap-1 max-w-[500px]">
          <Link href="/week5/day1" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-base py-1.5 px-2 rounded text-center">Day 1</Link>
          <Link href="/week5/day2" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-base py-1.5 px-2 rounded text-center">Day 2</Link>
          <Link href="/week5/day3" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-base py-1.5 px-2 rounded text-center">Day 3</Link>
          <Link href="/week5/day4" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-base py-1.5 px-2 rounded text-center">Day 4</Link>
          <Link href="/week5/day5" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-base py-1.5 px-2 rounded text-center">Day 5</Link>
        </div>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Purpose of This Week</h2>
          <ul className="list-disc pl-5 text-lg"><li>Integrate foundational strength work using bodyweight movements.</li>
<li>Reinforce balance, control, and pelvic/rib stability during more challenging positions.</li>
<li>Prepare the body to tolerate future load progression.</li>

          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Goals for Week 5</h2>
          <ul className="list-disc pl-5 text-lg"><li>Develop strength and endurance in lower body stances and lunges.</li>
<li>Build posterior chain strength through glute bridge variations.</li>
<li>Introduce progressive upper body pushing variations.</li>
<li>Improve single-leg balance and control through staggered stance and lunges.</li>
<li>Reinforce rib and pelvic stability during more complex movements.</li>

          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Tips for Success</h2>
          <ul className="list-disc pl-5 text-lg"><li>Focus on controlled movement over speed.</li>
<li>Maintain breath control and core stability throughout.</li>
<li>Progress gradually—listen to your body.</li>
<li>Emphasize quality of movement as intensity increases.</li>

          </ul>
        </section>
      </main>
    </>
  );
}
