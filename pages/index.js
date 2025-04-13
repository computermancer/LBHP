import Link from 'next/link';
import LangNavBar from '../components/LangNavBar';

export default function Home() {
  const languages = [
    { code: 'home', name: 'English' },
    { code: 'espanol/inicio', name: 'Español' }
  ];
  const currentLanguage = 'English';

  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-4 pb-2">
        <div className="max-w-[500px] mx-auto">
          <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3 mb-3">
            <h1 className="text-orange-300 text-4xl font-bold mb-1">Low Back & Hips Program</h1>
            <h2 className="text-orange-300 text-2xl font-bold mb-0 leading-relaxed" style={{ lineHeight: '1.5em', height: '3em' }}>A Gentle Reset Guide</h2>
          </div>
          <div className="h-1"></div>
          <LangNavBar languages={languages} currentLanguage={currentLanguage} />
          <div className="h-6"></div>

          <div className="space-y-6">
            {/* First Card - About/How/Work */}
            <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
              <div className="space-y-4">
                <Link href="/aboutLBHP" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    About LBHP
                  </button>
                </Link>

                <Link href="/howtouse" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    How to Use LBHP
                  </button>
                </Link>

                <Link href="/workinprogress" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    Work in Progress
                  </button>
                </Link>
              </div>
            </div>

            {/* Second Card - Contents/Glossary/Download */}
            <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
              <div className="space-y-4">
                <Link href="/contents" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    Contents Overview
                  </button>
                </Link>

                <Link href="/glossary" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    Glossary
                  </button>
                </Link>

                <Link href="/download" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    Download PDF's
                  </button>
                </Link>
              </div>
            </div>

            {/* Third Card - Contact/Mateo */}
            <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
              <div className="space-y-4">
                <Link href="/feedback" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    Contact and Feedback
                  </button>
                </Link>

                <Link href="/mateobravo" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    Mateo Bravo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
