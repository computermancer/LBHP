import Nav from '../components/Nav';
import Link from 'next/link';

export default function Week5() {
  return (
    <>
      <Nav />
      <main className="px-8 text-white min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Week 5</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Final Integration and Assessment</h2>
          
          <div className="flex gap-1 mb-8">
            <Link href="/week5/day1" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 1</Link>
            <Link href="/week5/day2" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 2</Link>
            <Link href="/week5/day3" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 3</Link>
            <Link href="/week5/day4" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 4</Link>
            <Link href="/week5/day5" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Day 5</Link>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Purpose of This Week</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Combine all previous skills into more complex movement patterns.</li>
              <li>Challenge stability and control in dynamic positions.</li>
              <li>Prepare for progression to more advanced training methods.</li>
              <li>Reinforce proper movement mechanics under increased load and complexity.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Goals for Week 5</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Master integration of breath, core control, and movement patterns.</li>
              <li>Develop confidence in advanced movement sequences.</li>
              <li>Enhance overall movement quality and efficiency.</li>
              <li>Build a solid foundation for future training progression.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Tips for Success</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Focus on maintaining proper form throughout complex movements.</li>
              <li>Use the breath to manage intensity and maintain control.</li>
              <li>Pay attention to movement transitions and stability.</li>
              <li>Stay mindful of fatigue and adjust intensity as needed.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
