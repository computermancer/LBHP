import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function QuadrupedRockBackwithNeutralSpine() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Quadruped Rock Back with Neutral Spine</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day2/drill3" 
            currentDay="/week1/day2" 
            nextDrill="/week1/day2/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Start on hands and knees, wrists under shoulders, knees under hips.",
                    "Maintain a neutral spine position."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and slowly shift your hips back toward your heels.",
                    "Maintain spinal alignment as you move.",
                    "Return to the starting position."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps",
                    "Breath: Inhale to prepare, exhale during the rock back",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Stretch through hips and lower back",
                    "Core gently engaged to maintain position"
                  ]}
                  whatToAvoid={[
                    "Collapsing the lower back",
                    "Rounding or arching excessively"
                  ]}
                  redFlags={[
                    "Sharp pain or discomfort"
                  ]}
                  regression={[
                    "Place a folded towel under knees for comfort."
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
