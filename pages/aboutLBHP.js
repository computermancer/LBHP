import MainNavBar from '../components/MainNavBar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainNavBar />
      <main className="px-8 text-gray-200 font-sans">
      <div className="max-w-[500px] mx-auto py-20">
      <h1 className="text-orange-300 text-4xl font-bold mb-2">About LBHP</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Understanding the Program</h2>

          <section className="space-y-6">
            <p className="text-lg leading-relaxed">
              The Low Back and Hips Program (LBHP) is a guided, bodyweight-based program designed to help everyday people move better and restore confidence in their hips, pelvis, and lower back.
            </p>

            <p className="text-lg leading-relaxed">
            Whether you've been feeling stiff, dealing with recurring discomfort, or just know something's off in your movement, LBHP gives you a clear and supportive path forward. Each week, you'll explore exercises that improve control, mobility, and connection across your hips, spine, ribs, and breath.
            </p>

            <p className="text-lg leading-relaxed">
              This program is ideal for people who've been cleared post-rehab or who want to improve function, prevent issues, and build a deeper relationship with their body. If you're currently in acute pain or recovering from surgery, please speak to a licensed medical provider first. 
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
