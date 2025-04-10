import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill5ProneHipIRandExtensionDrill() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 3 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Prone Hip IR and Extension Drill</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week3/day2/drill4" 
            currentDay="/week3/day2" 
            nextDrill="/week3/day3/drill1" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie face down with arms resting under your forehead.",
                    "Legs extended and toes pointing slightly outward."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and rotate one hip internally without lifting the leg.",
                    "Inhale and return to neutral.",
                    "Perform hip extension by lifting the leg slightly off the floor."
                  ]}
                  setsReps={[
                    "Sets: 2 - 3",
                    "Reps: 8 - 10 per side",
                    "Breath: Exhale to rotate, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Hip rotation and glute activation",
                    "Control through the pelvis"
                  ]}
                  whatToAvoid={[
                    "Arching the lower back"
                  ]}
                  redFlags={[
                    "Pain in the hips or lower back"
                  ]}
                  regression={[
                    "Perform with a pillow under hips for support."
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
