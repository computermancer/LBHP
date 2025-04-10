import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Supine9090Reach() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Supine 90-90 Reach</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day1/drill3" 
            currentDay="/week1/day1" 
            nextDrill="/week1/day1/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  title="Drill 4: Supine 90-90 Reach"
                  backButtonText="Week 1 - Day 1"
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your back with hips and knees bent to 90 degrees (feet off floor).",
                    "Arms reaching straight up to the ceiling."
                  ]}
                  instructions={[
                    "Exhale and reach your arms toward the ceiling while gently pressing low back into floor.",
                    "Maintain 90-90 leg position; don't let knees drift or chest lift.",
                    "Inhale and return arms to starting position without losing core control."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 5–8 slow, controlled reps",
                    "Breath: Exhale during the reach, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Gentle core activation with low back grounded.",
                    "Tension through abs without bracing."
                  ]}
                  whatToAvoid={[
                    "Flaring ribs or arching low back.",
                    "Reaching from shoulders or straining neck."
                  ]}
                  redFlags={[
                    "Neck pain or excessive tension.",
                    "Loss of position or breath control."
                  ]}
                  regression={[
                    "Place feet on a chair or bench if holding 90-90 position is too difficult."
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
