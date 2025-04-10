import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2CalfRaisesWithRibAndPelvicControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Calf Raises with Rib and Pelvic Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day5/drill1" 
            currentDay="/week5/day5" 
            nextDrill="/week5/day5/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand with feet hip-width apart, hands on hips or a wall for support.",
                    "Maintain rib and pelvis alignment."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and lift heels off the ground.",
                    "Hold briefly, then return to starting position."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 10–12 reps",
                    "Breath: Exhale to lift, inhale to lower",
                    "Rest: 30–45 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Calf and foot engagement",
                    "Rib and pelvis stability"
                  ]}
                  whatToAvoid={[
                    "Collapsing arches or losing alignment"
                  ]}
                  redFlags={[
                    "Pain in calves or ankles"
                  ]}
                  regression={[
                    "Perform smaller range of motion."
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
