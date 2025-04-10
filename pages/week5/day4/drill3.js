import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill3FloorPushupswithRibandPelvicControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Floor Pushups with Rib and Pelvic Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day4/drill2" 
            currentDay="/week5/day4" 
            nextDrill="/week5/day4/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Start in a plank position, hands slightly wider than shoulder-width.",
                    "Maintain rib and pelvis control."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and lower chest to the floor.",
                    "Inhale and push back to starting position."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 6–8 reps",
                    "Breath: Exhale to push, inhale to lower",
                    "Rest: 45–60 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Chest, triceps, and core engaged",
                    "Stable rib and pelvis position"
                  ]}
                  whatToAvoid={[
                    "Collapsing through shoulders or arching back"
                  ]}
                  redFlags={[
                    "Pain in shoulders or wrists"
                  ]}
                  regression={[
                    "Perform on knees or with reduced range."
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
