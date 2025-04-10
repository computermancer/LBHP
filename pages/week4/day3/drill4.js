import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill4WallSupportedDeepSquatHoldwithReach() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Wall Supported Deep Squat Hold with Reach</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day3/drill3" 
            currentDay="/week4/day3" 
            nextDrill="/week4/day3/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand with back against the wall, feet slightly forward.",
                    "Arms reaching forward for balance."
                  ]}
                  instructions={[
                    "Exhale and slowly lower into a squat, maintaining rib and pelvis control.",
                    "Hold for 10–20 seconds.",
                    "Inhale and return to standing."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 2–3 holds",
                    "Breath: Steady breathing throughout",
                    "Rest: 30–60 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Glute and hamstring activation",
                    "Ribcage stability while maintaining squat"
                  ]}
                  whatToAvoid={[
                    "Knees collapsing inward",
                    "Losing rib and pelvis control"
                  ]}
                  redFlags={[
                    "Sharp pain or discomfort in knees"
                  ]}
                  regression={[
                    "Perform a higher squat for reduced intensity."
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
