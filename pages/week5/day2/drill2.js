import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2LateralLungeswithBreathControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Lateral Lunges with Breath Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day2/drill1" 
            currentDay="/week5/day2" 
            nextDrill="/week5/day2/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand with feet hip-width apart, hands on hips or extended forward.",
                    "Shift weight to one side, bending the knee."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and shift weight laterally, lowering into a lunge.",
                    "Inhale and return to center.",
                    "Switch sides and repeat."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 per side",
                    "Breath: Exhale to lower, inhale to return",
                    "Rest: 30–45 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Glute and adductor engagement",
                    "Control and balance while shifting"
                  ]}
                  whatToAvoid={[
                    "Collapsing knees or leaning forward"
                  ]}
                  redFlags={[
                    "Pain in knees or hips"
                  ]}
                  regression={[
                    "Perform smaller side shifts."
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
