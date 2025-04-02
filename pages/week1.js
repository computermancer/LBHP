import Nav from '../components/Nav';
import Link from 'next/link';

export default function Week1() {
  return (
    <>
      <Nav />
      <main className="p-4 sm:p-8 text-gray-200 min-h-screen font-sans">
        <h1 className="text-orange-300 text-3xl font-bold mb-6">Week 1: Awareness & Activation</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          <Link href="/week1/day1" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
            Day 1
          </Link>
          <Link href="/week1/day2" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
            Day 2
          </Link>
          <Link href="/week1/day3" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
            Day 3
          </Link>
          <Link href="/week1/day4" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
            Day 4
          </Link>
          <Link href="/week1/day5" className="block w-full sm:w-[500px] bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
            Day 5
          </Link>
        </div>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Purpose of This Week</h2>
          <ul className="list-disc pl-5 text-lg">
            <li>Introduce awareness of the pelvis, ribs, and diaphragm.</li>
            <li>Develop foundational control over lumbar flexion and extension.</li>
            <li>Increase interoceptive awareness and enhance breath control.</li>
            <li>Begin building confidence in pelvic and ribcage positioning.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Goals for Week 1</h2>
          <ul className="list-disc pl-5 text-lg">
            <li>Develop awareness of posterior and anterior pelvic tilt.</li>
            <li>Control breath patterns while maintaining neutral pelvis and ribs.</li>
            <li>Improve sensory feedback through slow, controlled movements.</li>
            <li>Establish a foundation for safe, pain-free squatting and hinging.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Tips for Success</h2>
          <ul className="list-disc pl-5 text-lg">
            <li>Move slowly and deliberately—quality over quantity.</li>
            <li>Focus on breath awareness and control.</li>
            <li>Take breaks if you feel fatigued or lose focus.</li>
            <li>Pay attention to how your body responds to different movements.</li>
          </ul>
        </section>
      </main>
    </>
  );
}
