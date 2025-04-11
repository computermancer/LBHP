import WeekLayout from '../components/WeekLayout';

export default function Home() {
  return (
    <WeekLayout
      title="About LBHP"
      subtitle="Understanding the Program"
    >
      <div className="space-y-6">
        <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">

          <p className="text-lg leading-relaxed mb-4">
            The Low Back and Hips Program (LBHP) is a guided, bodyweight-based program designed to help everyday people move better and restore confidence in their hips, pelvis, and lower back.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Whether you've been feeling stiff, dealing with recurring discomfort, or just know something's off in your movement, LBHP gives you a clear and supportive path forward. Each week, you'll explore exercises that improve control, mobility, and connection across your hips, spine, ribs, and breath.
          </p>

          <p className="text-lg leading-relaxed">
            This program is ideal for people who've been cleared post-rehab or who want to improve function, prevent issues, and build a deeper relationship with their body. If you're currently in acute pain or recovering from surgery, please speak to a licensed medical provider first.
          </p>
        </section>
      </div>
    </WeekLayout>
  );
}
