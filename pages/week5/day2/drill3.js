import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill3SideLyingHipAbductionwithBreathFocus() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Side-Lying Hip Abduction with Breath Focus</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day2/drill2" 
            currentDay="/week5/day2" 
            nextDrill="/week5/day2/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your side with knees slightly bent, supporting head with arm.",
                    "Top hand resting on your hip or in front for balance."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and lift the top leg while maintaining pelvis stability.",
                    "Inhale to return to start."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 per side",
                    "Breath: Exhale to lift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Glute and hip engagement",
                    "Stability in pelvis during movement"
                  ]}
                  whatToAvoid={[
                    "Allowing ribs to collapse or pelvis to tilt"
                  ]}
                  redFlags={[
                    "Sharp pain in the low back"
                  ]}
                  regression={[
                    "Perform with smaller range of motion if needed"
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
