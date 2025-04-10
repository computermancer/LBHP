import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2SeatedHipShiftswithBreathAwareness() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Seated Hip Shifts with Breath Awareness</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day1/drill1" 
            currentDay="/week4/day1" 
            nextDrill="/week4/day1/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit upright in a firm chair, feet flat on the floor.",
                    "Hands resting on your thighs."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and gently shift one hip forward while maintaining rib stability.",
                    "Return to neutral and alternate sides."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale to shift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Smooth, controlled hip shifting",
                    "Ribcage remaining neutral and stable"
                  ]}
                  whatToAvoid={[
                    "Leaning or twisting the torso"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the hips or lower back"
                  ]}
                  regression={[
                    "Perform with smaller shifts for better control."
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
