import Nav from '../components/Nav';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="p-8 text-gray-200 min-h-screen font-sans">
        <h1 className="text-orange-300 text-3xl font-bold mb-8">Low Back & Hips Program</h1>
        
        <div className="flex space-x-4 mb-3">
          <Link href="/generalinfo">
            <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-6 w-[500px] text-left">
              About LBHP
            </button>
          </Link>
        </div>

        <div className="flex space-x-4 mb-3">
          <Link href="/workinprogress">
            <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-6 w-[500px] text-left">
              Work in Progress
            </button>
          </Link>
        </div>

        <div className="flex space-x-4 mb-3">
          <Link href="/howtouse">
            <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-6 w-[500px] text-left">
              How to Use LBHP
            </button>
          </Link>
        </div>

        <div className="flex space-x-4 mb-3">
          <Link href="/contents">
            <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-6 w-[500px] text-left">
              Contents Overview
            </button>
          </Link>
        </div>

        <div className="flex space-x-4 mb-3">
          <Link href="/glossary">
            <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-6 w-[500px] text-left">
              Glossary
            </button>
          </Link>
        </div>

        <div className="flex space-x-4 mb-3">
          <Link href="/download">
            <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-6 w-[500px] text-left">
              Download PDF's
            </button>
          </Link>
        </div>

        <div className="flex space-x-4 mb-3">
          <Link href="/feedback">
            <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-6 w-[500px] text-left">
              Contact and Feedback
            </button>
          </Link>
        </div>

        <div className="flex space-x-4 mb-3">
          <Link href="/mateobravo">
            <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-6 w-[500px] text-left">
              Mateo Bravo
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
