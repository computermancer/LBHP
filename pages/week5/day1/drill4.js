import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill4WallSupportedSplitSquatHold() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Wall Supported Split Squat Hold</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day1/drill3" 
            currentDay="/week5/day1" 
            nextDrill="/week5/day1/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand facing away from a wall, one foot forward and the other foot resting on the wall.",
                    "Lower into a split squat position."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and hold the bottom position of the split squat.",
                    "Maintain rib and pelvis control throughout the hold."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 20–30 second holds per side",
                    "Breath: Steady breathing throughout",
                    "Rest: 30–45 seconds between holds"
                  ]}
                  whatToFeel={[
                    "Glute, quad, and core engagement",
                    "Stability in the pelvis and ribs"
                  ]}
                  whatToAvoid={[
                    "Allowing the knee to collapse inward"
                  ]}
                  redFlags={[
                    "Pain in the front knee or hip"
                  ]}
                  regression={[
                    "Perform a higher split squat hold for reduced intensity."
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
