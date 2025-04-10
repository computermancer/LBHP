import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2QuadrupedArmandLegReachwithControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Quadruped Arm and Leg Reach with Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day4/drill1" 
            currentDay="/week4/day4" 
            nextDrill="/week4/day4/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Begin on hands and knees, wrists under shoulders, knees under hips.",
                    "Maintain a neutral spine and pelvis."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and extend one arm and the opposite leg without losing pelvis control.",
                    "Inhale and return to starting position.",
                    "Switch sides and repeat."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 per side",
                    "Breath: Exhale to extend, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Core stability and balance",
                    "Controlled extension with neutral spine"
                  ]}
                  whatToAvoid={[
                    "Arching the back or losing balance"
                  ]}
                  redFlags={[
                    "Pain in the lower back or shoulders"
                  ]}
                  regression={[
                    "Perform with smaller movements for better control."
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
