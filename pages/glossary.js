import WeekLayout from '../components/WeekLayout';

export default function Glossary() {
  return (
    <WeekLayout
      title="Glossary"
      subtitle="Key Terms and Concepts"
    >
      <div className="space-y-6">
        {/* Positions and Orientations */}
        <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Positions and Orientations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-semibold text-lg text-blue-400">Supine:</span> <span className="text-lg leading-relaxed">Lying on your back with your face upward. (Think: resting on your back.)</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Prone:</span> <span className="text-lg leading-relaxed">Lying on your stomach with your face downward. (Think: lying face down.)</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Hooklying:</span> <span className="text-lg leading-relaxed">Lying on your back with your knees bent and feet flat on the floor.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Quadruped:</span> <span className="text-lg leading-relaxed">On all fours with hands and knees on the ground. (Think: crawling position.)</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Side-Lying:</span> <span className="text-lg leading-relaxed">Lying on your side, usually with knees bent for stability.</span></li>
          </ul>
        </section>

        {/* Movements and Patterns */}
        <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Movements and Patterns</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-semibold text-lg text-blue-400">Posterior Pelvic Tilt:</span> <span className="text-lg leading-relaxed">Tucking the pelvis under, flattening the lower back against the floor or wall.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Anterior Pelvic Tilt:</span> <span className="text-lg leading-relaxed">Tilting the pelvis forward, causing the lower back to arch.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Hip Shift:</span> <span className="text-lg leading-relaxed">Moving the hips slightly to one side while maintaining control of the pelvis.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Hip Hinge:</span> <span className="text-lg leading-relaxed">Bending forward at the hips while keeping the spine neutral, commonly used in squats and deadlifts.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Pelvic Rocking:</span> <span className="text-lg leading-relaxed">Gentle forward and backward movement of the pelvis, often used to increase mobility and awareness.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Lunge:</span> <span className="text-lg leading-relaxed">A forward, backward, or lateral step where one leg bends at the knee while the other leg remains extended, used for strengthening hips, glutes, and thighs.</span></li>
          </ul>
        </section>

        {/* Exercise Variations */}
        <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Exercise Variations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-semibold text-lg text-blue-400">Kickstand Position:</span> <span className="text-lg leading-relaxed">A staggered stance where one foot is slightly behind the other, often used to reduce load or provide extra balance during hinging or lunging.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Staggered Stance:</span> <span className="text-lg leading-relaxed">A split stance where one foot is slightly ahead of the other, allowing for single-leg loading or balance work.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Split Squat:</span> <span className="text-lg leading-relaxed">A lunge variation where one foot remains stationary while the other moves during the exercise.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Marching:</span> <span className="text-lg leading-relaxed">Alternating lifting of one leg while maintaining stability through the core and pelvis.</span></li>
          </ul>
        </section>

        {/* Breathing and Core Concepts */}
        <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Breathing and Core Concepts</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-semibold text-lg text-blue-400">Diaphragmatic Breathing:</span> <span className="text-lg leading-relaxed">Deep breathing that engages the diaphragm, expanding the belly rather than lifting the chest.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Rib Expansion:</span> <span className="text-lg leading-relaxed">The ability to expand the ribcage in all directions during breathing, promoting better oxygenation and core stability.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Core Control:</span> <span className="text-lg leading-relaxed">The ability to maintain stability in the trunk while performing movements, essential for protecting the spine and hips.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Pelvic Floor:</span> <span className="text-lg leading-relaxed">The group of muscles at the base of the pelvis that support the pelvic organs and play a role in core stability.</span></li>
          </ul>
        </section>

        {/* Control and Awareness */}
        <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Control and Awareness</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-semibold text-lg text-blue-400">Proprioception:</span> <span className="text-lg leading-relaxed">The body's ability to sense its position, movement, and orientation in space.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Kinesthetic Awareness:</span> <span className="text-lg leading-relaxed">Understanding how your body moves and feels during exercise.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Mindful Movement:</span> <span className="text-lg leading-relaxed">Paying attention to how your body feels and moves, rather than just going through the motions.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Body Awareness:</span> <span className="text-lg leading-relaxed">Understanding how different parts of your body connect and move together.</span></li>
          </ul>
        </section>

        {/* Muscle and Chain Terminology */}
        <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Muscle and Chain Terminology</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-semibold text-lg text-blue-400">Posterior Chain:</span> <span className="text-lg leading-relaxed">The group of muscles along the back of the body, including hamstrings, glutes, and lower back.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Hip Abduction:</span> <span className="text-lg leading-relaxed">Moving the leg away from the midline of the body, often strengthening lateral hip muscles.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Hip Internal Rotation (IR):</span> <span className="text-lg leading-relaxed">Rotating the thigh inward toward the midline of the body.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Hip Extension:</span> <span className="text-lg leading-relaxed">Moving the leg backward or extending the hip, often engaging the glutes and hamstrings.</span></li>
          </ul>
        </section>

        {/* Stability and Isometric Positions */}
        <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Stability and Isometric Positions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-semibold text-lg text-blue-400">Horse Stance:</span> <span className="text-lg leading-relaxed">A wide, low squat where the thighs are parallel to the floor, commonly used to develop isometric lower body strength.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Wall Supported Hold:</span> <span className="text-lg leading-relaxed">A position where the body is stabilized using a wall for balance and feedback.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Isometric Hold:</span> <span className="text-lg leading-relaxed">Holding a position without movement to build strength and endurance.</span></li>
          </ul>
        </section>

        {/* Miscellaneous Terms */}
        <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Miscellaneous Terms</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-semibold text-lg text-blue-400">RDL (Romanian Deadlift):</span> <span className="text-lg leading-relaxed">A hip hinge exercise that focuses on posterior chain strength, performed with a slight bend in the knees.</span></li>
            <li><span className="font-semibold text-lg text-blue-400">Glute Bridge:</span> <span className="text-lg leading-relaxed">A movement where the hips lift off the ground while lying on your back, engaging the glutes and core.</span></li>
          </ul>
        </section>
      </div>
    </WeekLayout>
  );
}
