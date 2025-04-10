import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function SupineHipShiftWithBreath() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Supine Hip Shift with Breath</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day4/drill3" 
            currentDay="/week1/day4" 
            nextDrill="/week1/day4/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your back with knees bent, feet flat.",
                    "Arms resting by your sides."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and gently shift one hip higher than the other.",
                    "Maintain control and alignment.",
                    "Return to neutral before switching sides."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 controlled reps per side",
                    "Breath: Exhale during the shift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Subtle motion through the pelvis and hips",
                    "Engagement of core and hip stabilizers"
                  ]}
                  whatToAvoid={[
                    "Overarching or flattening the low back"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the hips or spine"
                  ]}
                  regression={[
                    "Use a pillow under hips for added support."
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
