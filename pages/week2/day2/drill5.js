import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill5ProneHipIRExtension() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Prone Hip IR and Extension Drill</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day2/drill4" 
            currentDay="/week2/day2" 
            nextDrill="/week2/day3/drill1" 
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
                    "Lie on your stomach with legs extended straight."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and gently rotate one leg inward (hip internal rotation).",
                    "Inhale to return to neutral and switch sides."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale during rotation, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Subtle activation in the hips and pelvis."
                  ]}
                  whatToAvoid={[
                    "Over-rotating or losing control."
                  ]}
                  redFlags={[
                    "Pain or discomfort in the hips."
                  ]}
                  regression={[
                    "Place a pillow under the pelvis for support."
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
