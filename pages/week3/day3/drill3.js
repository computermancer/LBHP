import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill3Supine9090RibShiftwithBreath() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 3 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Supine 90-90 Rib Shift with Breath</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week3/day3/drill2" 
            currentDay="/week3/day3" 
            nextDrill="/week3/day3/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your back with hips and knees at 90 degrees.",
                    "Arms reaching toward the ceiling."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and gently shift ribs laterally to one side.",
                    "Return to center and alternate sides."
                  ]}
                  setsReps={[
                    "Sets: 2 - 3",
                    "Reps: 8 - 10 per side",
                    "Breath: Exhale to shift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Controlled rib movement",
                    "Core stability throughout"
                  ]}
                  whatToAvoid={[
                    "Over-shifting or arching the back"
                  ]}
                  redFlags={[
                    "Pain or discomfort in ribs or lower back"
                  ]}
                  regression={[
                    "Perform with feet supported for added stability."
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
