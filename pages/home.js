import Nav from '../components/Nav';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Low Back & Hips Program</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">A Gentle Reset Guide</h2>
          
          <div className="space-y-4">
            <Link href="/aboutLBHP" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                About LBHP
              </button>
            </Link>


            <Link href="/howtouse" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                How to Use LBHP
              </button>
            </Link>




            <Link href="/workinprogress" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Work in Progress
              </button>
            </Link>


            <Link href="/contents" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Contents Overview
              </button>
            </Link>

            <Link href="/glossary" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Glossary
              </button>
            </Link>

            <Link href="/download" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Download PDF's
              </button>
            </Link>

            <Link href="/" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Language Selection
              </button>
            </Link>

            <Link href="/feedback" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Contact and Feedback
              </button>
            </Link>

            <Link href="/mateobravo" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Mateo Bravo
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
