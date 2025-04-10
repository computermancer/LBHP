import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2ForwardLungeswithRibControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Forward Lunges with Rib Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day3/drill1" 
            currentDay="/week5/day3" 
            nextDrill="/week5/day3/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand with feet shoulder-width apart.",
                    "Hands on hips or extended forward for balance."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and step forward into a lunge, lowering back knee toward the floor.",
                    "Inhale and push back to starting position.",
                    "Switch sides and repeat."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 per side",
                    "Breath: Exhale to lunge, inhale to return",
                    "Rest: 30–45 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Glute, quad, and core engagement",
                    "Rib and pelvis stability"
                  ]}
                  whatToAvoid={[
                    "Knees collapsing inward or arching the back"
                  ]}
                  redFlags={[
                    "Pain in knees or hips"
                  ]}
                  regression={[
                    "Perform smaller lunges to reduce intensity."
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
