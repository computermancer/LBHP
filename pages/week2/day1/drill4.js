import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Supine9090LegLowering() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Supine 90-90 Leg Lowering</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day1/drill3" 
            currentDay="/week2/day1" 
            nextDrill="/week2/day1/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your back with hips and knees bent to 90 degrees.",
                    "Arms resting by your sides or placed gently on your ribs."
                  ]}
                  instructions={[
                    "Exhale and slowly lower one leg toward the floor.",
                    "Keep the opposite leg and pelvis stable.",
                    "Inhale to return to the starting position.",
                    "Alternate sides with control."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale to lower, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Core control and stability.",
                    "Smooth leg movement without pelvic shifting."
                  ]}
                  whatToAvoid={[
                    "Arching the lower back or losing core engagement."
                  ]}
                  redFlags={[
                    "Low back pain or instability."
                  ]}
                  regression={[
                    "Lower legs less if maintaining control is difficult."
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
