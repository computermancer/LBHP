import Link from 'next/link';
import { FaGlobe, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import Icono from '../components/icono';
import DropdownCard from '../components/DropdownCard';
import SimpleCard from '../components/SimpleCard';
import LanguageCard from '../components/LanguageCard';
import HomePageLayout from '../components/HomePageLayout';

export default function Home() {
  return (
    <HomePageLayout title="Low Back & Hips Program" subtitle="A Gentle Reset Guide">
                  <div className="max-w-[500px] mx-auto">
                  <div className="mt-2">

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
      </div>
    </HomePageLayout>
  );
}
