import Nav from '../components/Nav';

export default function HowToUse() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">How to Use LBHP</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Program Guide</h2>
          
          <div className="space-y-6">
            <section>
            
              <p className="text-lg leading-relaxed mb-4">
                This program is built on a flexible foundation that honors where each user is starting from. It is designed to serve a wide range of individuals—from those recovering strength and control after discomfort to those looking to rebuild deeper awareness and connection to their hips, spine, and breath.
              </p>
              <p className="text-lg leading-relaxed">
                There is a suggested path, but you are not bound to it. Instead, the framework encourages curiosity, exploration, and adaptability. You're not just following a routine—you're developing a relationship with your body.
              </p>
            </section>

            <section>
              <h3 className="text-orange-300 text-xl font-semibold mb-4">User-Led Exploration & Progression</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>Follow the recommended daily structure or mix and match based on how your body feels that day.</li>
                <li>Skip drills that feel inaccessible or unnecessary, and revisit ones that feel particularly valuable.</li>
                <li>There is no expectation to complete all drills every day—a few intentional reps can go a long way.</li>
                <li>Use drills as tool to achieve nervous system calming, relaxing muscles that may feel overly-engaged, restrictive, or generally tight.</li>
                <li>More advanced movers can use the drills to improve fine motor control, deep stabilizer strength, and intersegmental awareness.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-orange-300 text-xl font-semibold mb-4">Structure Meets Freedom</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>Shift the order of drills</li>
                <li>Combine drills from different days</li>
                <li>Extend a favorite day into multiple sessions</li>
                <li>Repeat a week if you feel it's still serving you</li>
              </ul>
            </section>

            <section>
              <h3 className="text-orange-300 text-xl font-semibold mb-4">Drill Design for Self-Guided Learning</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li><span className="font-semibold">Setup</span> – so you know how to position yourself</li>
                <li><span className="font-semibold">Instructions</span> – step-by-step guidance including reps, breath cycles, and rest</li>
                <li><span className="font-semibold">What to Feel</span> – to help you notice if you're doing it well</li>
                <li><span className="font-semibold">What to Avoid</span> – to keep you safe and aligned</li>
                <li><span className="font-semibold">Red Flags</span> – to alert you to potential problems or the need for modification</li>
                <li><span className="font-semibold">Regression (Alternative)</span> – when applicable, for a simpler or more accessible version</li>
              </ul>
            </section>

            <section>
              <h3 className="text-orange-300 text-xl font-semibold mb-4">Building Autonomy and Confidence</h3>
              <p className="text-lg leading-relaxed mb-4">
                The goal isn't perfection—it's trust. Trust that you can listen to your body and make informed choices.
              </p>
              <p className="text-lg leading-relaxed mb-2">This program will grow your:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>Awareness</li>
                <li>Self-assessment ability</li>
                <li>Willingness to adapt</li>
                <li>Confidence in moving with intention</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
