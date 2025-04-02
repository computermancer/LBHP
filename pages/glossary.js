import Nav from '../components/Nav';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-3xl font-bold mb-6">Glossary</h1>
          
          <section className="mb-6">
            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Positions and Orientations</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl">Supine:</span> Lying on your back with your face upward. (Think: resting on your back.)</li>
              <li><span className="font-semibold text-xl">Prone:</span> Lying on your stomach with your face downward. (Think: lying face down.)</li>
              <li><span className="font-semibold text-xl">Hooklying:</span> Lying on your back with your knees bent and feet flat on the floor.</li>
              <li><span className="font-semibold text-xl">Quadruped:</span> On all fours with hands and knees on the ground. (Think: crawling position.)</li>
              <li><span className="font-semibold text-xl">Side-Lying:</span> Lying on your side, usually with knees bent for stability.</li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Movements and Patterns</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl">Posterior Pelvic Tilt:</span> Tucking the pelvis under, flattening the lower back against the floor or wall.</li>
              <li><span className="font-semibold text-xl">Anterior Pelvic Tilt:</span> Tilting the pelvis forward, causing the lower back to arch.</li>
              <li><span className="font-semibold text-xl">Hip Shift:</span> Moving the hips slightly to one side while maintaining control of the pelvis.</li>
              <li><span className="font-semibold text-xl">Hip Hinge:</span> Bending forward at the hips while keeping the spine neutral, commonly used in squats and deadlifts.</li>
              <li><span className="font-semibold text-xl">Pelvic Rocking:</span> Gentle forward and backward movement of the pelvis, often used to increase mobility and awareness.</li>
              <li><span className="font-semibold text-xl">Lunge:</span> A forward, backward, or lateral step where one leg bends at the knee while the other leg remains extended, used for strengthening hips, glutes, and thighs.</li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Exercise Variations</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl">Kickstand Position:</span> A staggered stance where one foot is slightly behind the other, often used to reduce load or provide extra balance during hinging or lunging.</li>
              <li><span className="font-semibold text-xl">Staggered Stance:</span> A split stance where one foot is slightly ahead of the other, allowing for single-leg loading or balance work.</li>
              <li><span className="font-semibold text-xl">Split Squat:</span> A lunge variation where one foot remains stationary while the other moves during the exercise.</li>
              <li><span className="font-semibold text-xl">Marching:</span> Alternating lifting of one leg while maintaining stability through the core and pelvis.</li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Breathing and Core Concepts</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl">Diaphragmatic Breathing:</span> Deep breathing that engages the diaphragm, expanding the belly rather than lifting the chest.</li>
              <li><span className="font-semibold text-xl">Rib Expansion:</span> Allowing the ribcage to move outward during inhalation for full breath capacity.</li>
              <li><span className="font-semibold text-xl">Breath Control:</span> The ability to maintain steady, intentional breathing during movement.</li>
              <li><span className="font-semibold text-xl">Core Stability:</span> Maintaining a solid, stable core to prevent unwanted motion during exercise.</li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Control and Awareness</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl">Pelvic Awareness:</span> Understanding and controlling the movement and position of the pelvis.</li>
              <li><span className="font-semibold text-xl">Rib Stability:</span> Maintaining control over the ribcage position to prevent excessive movement.</li>
              <li><span className="font-semibold text-xl">Thoracic Rotation:</span> Rotating the upper back (thoracic spine) while keeping the lower back stable.</li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Muscle and Chain Terminology</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl">Posterior Chain:</span> The group of muscles along the back of the body, including hamstrings, glutes, and lower back.</li>
              <li><span className="font-semibold text-xl">Hip Abduction:</span> Moving the leg away from the midline of the body, often strengthening lateral hip muscles.</li>
              <li><span className="font-semibold text-xl">Hip Internal Rotation (IR):</span> Rotating the thigh inward toward the midline of the body.</li>
              <li><span className="font-semibold text-xl">Hip Extension:</span> Moving the leg backward or extending the hip, often engaging the glutes and hamstrings.</li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Stability and Isometric Positions</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl">Horse Stance:</span> A wide, low squat where the thighs are parallel to the floor, commonly used to develop isometric lower body strength.</li>
              <li><span className="font-semibold text-xl">Wall Supported Hold:</span> A position where the body is stabilized using a wall for balance and feedback.</li>
              <li><span className="font-semibold text-xl">Isometric Hold:</span> Holding a position without movement to build strength and endurance.</li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Miscellaneous Terms</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl">RDL (Romanian Deadlift):</span> A hip hinge exercise that focuses on posterior chain strength, performed with a slight bend in the knees.</li>
              <li><span className="font-semibold text-xl">Glute Bridge:</span> A movement where the hips lift off the ground while lying on your back, engaging the glutes and core.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
