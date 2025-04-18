import Link from 'next/link';
import { FaGlobe, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import Icono from '../components/icono';
import DropdownCard from '../components/DropdownCard';
import SimpleCard from '../components/SimpleCard';
import LanguageCard from '../components/LanguageCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-4 pb-2">
        <div className="max-w-[500px] mx-auto">
          <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3 mb-4">
            <h1 className="text-orange-300 text-4xl font-bold mb-1">Low Back & Hips Program</h1>
            <h2 className="text-orange-300 text-2xl font-bold mb-0 leading-relaxed" style={{ lineHeight: '1.5em', height: '1.35em' }}>A Gentle Reset Guide</h2>
          </div>
          <div className="h-2"></div>
          <div className="space-y-6">
            {/* Language Card */}
            <LanguageCard />

            {/* Information Card */}
            <DropdownCard
              title="Information"
              items={[
                { href: "/aboutLBHP", text: "About LBHP" },
                { href: "/howtouse", text: "How to Use LBHP" },
                { href: "/workinprogress", text: "Work in Progress" },
                { href: "/mateobravo", text: "Mateo Bravo" }
              ]}
            />

            {/* Resources Card */}
            <DropdownCard
              title="Resources"
              items={[
                { href: "/contents", text: "Content Summary" },
                { href: "/glossary", text: "Glossary" },
                { href: "/download", text: "Download PDF's" },
                { href: "/feedback", text: "Contact and Feedback" }
              ]}
            />

            {/* Social Media Card */}
            <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-4">
              <Icono />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
