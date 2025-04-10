import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill5QuadrupedRockBackwithReachFocus() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Quadruped Rock Back with Reach Focus</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day1/drill4" 
            currentDay="/week4/day1" 
            nextDrill="/week4/day2/drill1" 
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
                    "Exhale and slowly shift your hips back toward your heels while reaching one arm forward.",
                    "Inhale and return to the starting position.",
                    "Switch arms and repeat."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale to rock back, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Smooth pelvic motion with core control",
                    "Rib stability during reach"
                  ]}
                  whatToAvoid={[
                    "Collapsing the lower back or pelvis"
                  ]}
                  redFlags={[
                    "Pain in the knees or lower back"
                  ]}
                  regression={[
                    "Perform with hands elevated on a surface for reduced load."
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
