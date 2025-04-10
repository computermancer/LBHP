import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill5WallSupportedDeepSquat() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Wall Supported Deep Squat Hold</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day3/drill4" 
            currentDay="/week2/day3" 
            nextDrill="/week2/day4/drill1" 
            disableNext={true}
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand facing a wall, feet slightly wider than hip-width.",
                    "Toes pointing slightly outward."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and slowly lower into a deep squat while maintaining rib and pelvic control.",
                    "Hold the position briefly and return to standing."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 5–8 slow reps",
                    "Breath: Exhale during descent, inhale to rise",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Opening through the hips and stability through the core."
                  ]}
                  whatToAvoid={[
                    "Collapsing the chest or flaring the ribs."
                  ]}
                  redFlags={[
                    "Pain or discomfort in knees or hips."
                  ]}
                  regression={[
                    "Perform a partial squat if full depth is uncomfortable."
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
