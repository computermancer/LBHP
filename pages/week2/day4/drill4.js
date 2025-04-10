import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill4SupineHipShifts() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Supine Hip Shifts with Rib Stability</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day4/drill3" 
            currentDay="/week2/day4" 
            nextDrill="/week2/day4/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your back with knees bent, feet flat.",
                    "Arms resting by your sides or on ribs for feedback."
                  ]}
                  instructions={[
                    "Exhale and gently shift the pelvis side to side.",
                    "Keep ribcage and pelvis aligned throughout.",
                    "Return to center after each shift."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale during shift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Subtle control through hips and core."
                  ]}
                  whatToAvoid={[
                    "Losing rib control or over-shifting."
                  ]}
                  redFlags={[
                    "Pain or discomfort in the hips or low back."
                  ]}
                  regression={[
                    "Limit range of motion if needed."
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
