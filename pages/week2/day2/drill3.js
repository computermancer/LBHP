import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill3StandingPosteriorWeightShift() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Standing Posterior Weight Shift</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day2/drill2" 
            currentDay="/week2/day2" 
            nextDrill="/week2/day2/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand with feet hip-width apart, knees slightly bent."
                  ]}
                  instructions={[
                    "Exhale and shift your weight slightly backward into your heels.",
                    "Maintain a neutral spine as you shift.",
                    "Return to center with control."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow shifts",
                    "Breath: Exhale during the shift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Engagement of hamstrings and posterior chain."
                  ]}
                  whatToAvoid={[
                    "Leaning too far back or losing balance."
                  ]}
                  redFlags={[
                    "Pain or discomfort in knees or back."
                  ]}
                  regression={[
                    "Perform near a wall for added balance."
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
