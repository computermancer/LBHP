import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2Supine9090LegLoweringwithBreath() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Supine 90-90 Leg Lowering with Breath</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day2/drill1" 
            currentDay="/week4/day2" 
            nextDrill="/week4/day2/drill3" 
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
                    "Arms resting by your sides."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and slowly lower one leg toward the floor while maintaining rib control.",
                    "Inhale to return to starting position and alternate sides."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 per side",
                    "Breath: Exhale to lower, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Core engagement while maintaining rib control",
                    "Smooth leg motion with minimal arching"
                  ]}
                  whatToAvoid={[
                    "Arching the lower back"
                  ]}
                  redFlags={[
                    "Pain or discomfort in lower back"
                  ]}
                  regression={[
                    "Limit the range of motion for better control."
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
