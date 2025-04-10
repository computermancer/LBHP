import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill5SideLyingHipIRandBreathing() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Side-Lying Hip IR and Breathing</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day5/drill4" 
            currentDay="/week4/day5" 
            nextDrill="/week5/day1/drill1" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  title="Drill 5: Side-Lying Hip IR and Breathing"
                  backButtonText="Week 4 - Day 5"
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your side with knees bent at 90 degrees, stacked.",
                    "Support your head with your lower arm."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and gently rotate your top leg inward without lifting your foot.",
                    "Hold for 2–3 seconds, then return to starting.",
                    "Focus on smooth, controlled movement."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 per side",
                    "Breath: Exhale to rotate, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Internal rotation of the hip",
                    "Engagement of deep hip stabilizers"
                  ]}
                  whatToAvoid={[
                    "Rolling the pelvis backward"
                  ]}
                  redFlags={[
                    "Sharp hip or groin pain"
                  ]}
                  regression={[
                    "Perform with a pillow between knees for support."
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
