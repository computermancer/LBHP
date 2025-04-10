import Nav from '../components/Nav';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Glossary</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Key Terms and Concepts</h2>
          
          <section className="mb-6">
            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Positions and Orientations</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-amber-200">Supine:</span> <span className="text-lg leading-relaxed">Lying on your back with your face upward. (Think: resting on your back.)</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Prone:</span> <span className="text-lg leading-relaxed">Lying on your stomach with your face downward. (Think: lying face down.)</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Hooklying:</span> <span className="text-lg leading-relaxed">Lying on your back with your knees bent and feet flat on the floor.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Quadruped:</span> <span className="text-lg leading-relaxed">On all fours with hands and knees on the ground. (Think: crawling position.)</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Side-Lying:</span> <span className="text-lg leading-relaxed">Lying on your side, usually with knees bent for stability.</span></li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Movements and Patterns</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-amber-200">Posterior Pelvic Tilt:</span> <span className="text-lg leading-relaxed">Tucking the pelvis under, flattening the lower back against the floor or wall.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Anterior Pelvic Tilt:</span> <span className="text-lg leading-relaxed">Tilting the pelvis forward, causing the lower back to arch.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Hip Shift:</span> <span className="text-lg leading-relaxed">Moving the hips slightly to one side while maintaining control of the pelvis.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Hip Hinge:</span> <span className="text-lg leading-relaxed">Bending forward at the hips while keeping the spine neutral, commonly used in squats and deadlifts.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Pelvic Rocking:</span> <span className="text-lg leading-relaxed">Gentle forward and backward movement of the pelvis, often used to increase mobility and awareness.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Lunge:</span> <span className="text-lg leading-relaxed">A forward, backward, or lateral step where one leg bends at the knee while the other leg remains extended, used for strengthening hips, glutes, and thighs.</span></li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Exercise Variations</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-amber-200">Kickstand Position:</span> <span className="text-lg leading-relaxed">A staggered stance where one foot is slightly behind the other, often used to reduce load or provide extra balance during hinging or lunging.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Staggered Stance:</span> <span className="text-lg leading-relaxed">A split stance where one foot is slightly ahead of the other, allowing for single-leg loading or balance work.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Split Squat:</span> <span className="text-lg leading-relaxed">A lunge variation where one foot remains stationary while the other moves during the exercise.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Marching:</span> <span className="text-lg leading-relaxed">Alternating lifting of one leg while maintaining stability through the core and pelvis.</span></li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Breathing and Core Concepts</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-amber-200">Diaphragmatic Breathing:</span> <span className="text-lg leading-relaxed">Deep breathing that engages the diaphragm, expanding the belly rather than lifting the chest.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Rib Expansion:</span> <span className="text-lg leading-relaxed">Allowing the ribcage to move outward during inhalation for full breath capacity.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Breath Control:</span> <span className="text-lg leading-relaxed">The ability to maintain steady, intentional breathing during movement.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Core Stability:</span> <span className="text-lg leading-relaxed">Maintaining a solid, stable core to prevent unwanted motion during exercise.</span></li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Control and Awareness</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-amber-200">Proprioception:</span> <span className="text-lg leading-relaxed">The body's ability to sense its position, movement, and orientation in space.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Kinesthetic Awareness:</span> <span className="text-lg leading-relaxed">Understanding how your body moves and feels during exercise.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Mindful Movement:</span> <span className="text-lg leading-relaxed">Paying attention to how your body feels and moves, rather than just going through the motions.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Body Awareness:</span> <span className="text-lg leading-relaxed">Understanding how different parts of your body connect and move together.</span></li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Muscle and Chain Terminology</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-amber-200">Posterior Chain:</span> <span className="text-lg leading-relaxed">The group of muscles along the back of the body, including hamstrings, glutes, and lower back.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Hip Abduction:</span> <span className="text-lg leading-relaxed">Moving the leg away from the midline of the body, often strengthening lateral hip muscles.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Hip Internal Rotation (IR):</span> <span className="text-lg leading-relaxed">Rotating the thigh inward toward the midline of the body.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Hip Extension:</span> <span className="text-lg leading-relaxed">Moving the leg backward or extending the hip, often engaging the glutes and hamstrings.</span></li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Stability and Isometric Positions</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-amber-200">Horse Stance:</span> <span className="text-lg leading-relaxed">A wide, low squat where the thighs are parallel to the floor, commonly used to develop isometric lower body strength.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Wall Supported Hold:</span> <span className="text-lg leading-relaxed">A position where the body is stabilized using a wall for balance and feedback.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Isometric Hold:</span> <span className="text-lg leading-relaxed">Holding a position without movement to build strength and endurance.</span></li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Miscellaneous Terms</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-amber-200">RDL (Romanian Deadlift):</span> <span className="text-lg leading-relaxed">A hip hinge exercise that focuses on posterior chain strength, performed with a slight bend in the knees.</span></li>
              <li><span className="font-semibold text-xl text-amber-200">Glute Bridge:</span> <span className="text-lg leading-relaxed">A movement where the hips lift off the ground while lying on your back, engaging the glutes and core.</span></li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
