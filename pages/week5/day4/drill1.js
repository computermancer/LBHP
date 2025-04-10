import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill1WallPushupswithRibStability() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Wall Pushups with Rib Stability</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day3/drill5" 
            currentDay="/week5/day4" 
            nextDrill="/week5/day4/drill2" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand facing a wall, hands placed slightly wider than shoulder-width.",
                    "Feet hip-width apart, body in a straight line."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and lower chest toward the wall, maintaining rib and pelvis control.",
                    "Inhale and push back to starting position."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 reps",
                    "Breath: Exhale to push, inhale to lower",
                    "Rest: 30–45 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Chest, shoulders, and core engaged",
                    "Maintained alignment of rib and pelvis"
                  ]}
                  whatToAvoid={[
                    "Arching the lower back or losing core control"
                  ]}
                  redFlags={[
                    "Pain in shoulders or wrists"
                  ]}
                  regression={[
                    "Perform with a higher incline (closer to wall)."
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
