import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill1SupineHipShiftswithRibAwareness() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Supine Hip Shifts with Rib Awareness</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day3/drill5" 
            currentDay="/week4/day4" 
            nextDrill="/week4/day4/drill2" 
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
                    "Exhale and shift one hip slightly higher than the other.",
                    "Inhale and return to neutral.",
                    "Switch sides and repeat with control."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 per side",
                    "Breath: Exhale to shift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Subtle hip motion with rib stability",
                    "Smooth, controlled shifts"
                  ]}
                  whatToAvoid={[
                    "Losing ribcage and pelvis control"
                  ]}
                  redFlags={[
                    "Pain or discomfort in hips or spine"
                  ]}
                  regression={[
                    "Perform smaller shifts to improve control."
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
