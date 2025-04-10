import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill3TibRaiseswithBreathAwareness() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Tib Raises with Breath Awareness</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day5/drill2" 
            currentDay="/week5/day5" 
            nextDrill="/week5/day5/drill4" 
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
                    "Exhale and lift toes off the ground, shifting weight to heels.",
                    "Hold briefly, then return to starting position."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 10–12 reps",
                    "Breath: Exhale to lift, inhale to lower",
                    "Rest: 30–45 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Engagement of tibialis anterior",
                    "Controlled movement with rib stability"
                  ]}
                  whatToAvoid={[
                    "Leaning backward or losing balance"
                  ]}
                  redFlags={[
                    "Pain in shins or ankles"
                  ]}
                  regression={[
                    "Perform smaller lifts for control."
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
