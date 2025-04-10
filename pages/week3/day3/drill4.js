import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill4WallSupportedSquatHoldwithReach() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 3 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Wall Supported Squat Hold with Reach</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week3/day3/drill3" 
            currentDay="/week3/day3" 
            nextDrill="/week3/day3/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand with back against a wall, feet about 6–12 inches away.",
                    "Arms resting by your sides for support."
                  ]}
                  instructions={[
                    "Inhale to prepare while maintaining rib position.",
                    "Exhale and slowly lower into a squat, keeping ribs stable.",
                    "Hold for a few breaths, then return to standing."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5–8 squats per set",
                    "Breath: Maintain steady breathing",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Controlled squat movement",
                    "Maintained rib position"
                  ]}
                  whatToAvoid={[
                    "Allowing ribs to flare or pelvis to tilt"
                  ]}
                  redFlags={[
                    "Sharp pain in the low back"
                  ]}
                  regression={[
                    "Perform with smaller range of motion if needed"
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
