import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill5SupportedSideLyingHipAbduction() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 3 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Supported Side-Lying Hip Abduction</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week3/day4/drill4" 
            currentDay="/week3/day4" 
            nextDrill="/week3/day5/drill1" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your side with head supported by a pillow.",
                    "Bottom leg bent for stability, top leg straight."
                  ]}
                  instructions={[
                    "Inhale to prepare while maintaining rib position.",
                    "Exhale and lift top leg while keeping ribs stable.",
                    "Return to start and repeat."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 8–10 lifts per side",
                    "Breath: Exhale during lift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Controlled hip movement",
                    "Maintained rib position"
                  ]}
                  whatToAvoid={[
                    "Allowing ribs to collapse or pelvis to tilt"
                  ]}
                  redFlags={[
                    "Sharp pain in the hip"
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
