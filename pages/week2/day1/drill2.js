import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function HooklyingHipShifts() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Hooklying Hip Shifts</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day1/drill1" 
            currentDay="/week2/day1" 
            nextDrill="/week2/day1/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your back with knees bent, feet flat on the floor.",
                    "Place hands gently on your pelvis."
                  ]}
                  instructions={[
                    "Gently shift your pelvis side to side, feeling each hip lift slightly.",
                    "Move slowly and stay within a comfortable range of motion.",
                    "Return to neutral after each shift."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 controlled shifts",
                    "Breath: Inhale to prepare, exhale during each shift",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Subtle shifting of the pelvis.",
                    "Smooth, controlled movements."
                  ]}
                  whatToAvoid={[
                    "Forcing the shift or losing control.",
                    "Collapsing or tensing excessively."
                  ]}
                  redFlags={[
                    "Pain or discomfort in the hips or low back."
                  ]}
                  regression={[
                    "Reduce range of motion or support knees with a pillow."
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
