import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill3WallHamstringPresswithBreathFocus() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Wall Hamstring Press with Breath Focus</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day4/drill2" 
            currentDay="/week4/day4" 
            nextDrill="/week4/day4/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  title="Drill 3: Wall Hamstring Press with Breath Focus"
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your back with feet on the wall, knees at 90 degrees.",
                    "Arms resting by your sides."
                  ]}
                  instructions={[
                    "Exhale and gently press heels into the wall.",
                    "Hold for 5–8 seconds while maintaining pelvic control.",
                    "Inhale and relax."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 5–8 second holds",
                    "Breath: Steady breathing throughout",
                    "Rest: 30 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Hamstring activation and pelvis stability",
                    "Controlled pressure without arching"
                  ]}
                  whatToAvoid={[
                    "Pushing through toes or lifting hips"
                  ]}
                  redFlags={[
                    "Sharp pain or cramping"
                  ]}
                  regression={[
                    "Move feet slightly lower on the wall for reduced intensity."
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
