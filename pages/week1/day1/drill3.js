import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function SeatedPelvicRocking() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Seated Pelvic Rocking</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day1/drill2" 
            currentDay="/week1/day1" 
            nextDrill="/week1/day1/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  title="Drill 3: Seated Pelvic Rocking"
                  backButtonText="Week 1 - Day 1"
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit on a firm chair, feet flat, hands resting on thighs."
                  ]}
                  instructions={[
                    "Slowly tilt the pelvis forward (arching low back) and backward (flattening low back).",
                    "Let the breath guide the rhythm of your movement.",
                    "Keep upper body still and relaxed."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–12 controlled reps",
                    "Breath: Inhale as you tilt forward, exhale as you tilt backward",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Gentle motion through the pelvis and low back.",
                    "Ease and rhythm with breath."
                  ]}
                  whatToAvoid={[
                    "Tensing shoulders or upper back.",
                    "Over-arching or collapsing posture."
                  ]}
                  redFlags={[
                    "Pain during any part of the movement.",
                    "Inability to isolate pelvic motion."
                  ]}
                  regression={[
                    "Place hands on hips for feedback if you're unsure where the motion is coming from."
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
