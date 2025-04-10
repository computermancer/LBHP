import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function SideLyingHipIRwithBreath() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Side-Lying Hip IR with Breath</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day1/drill2" 
            currentDay="/week2/day1" 
            nextDrill="/week2/day1/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your side with knees bent and stacked.",
                    "Support your head with a pillow or your arm."
                  ]}
                  instructions={[
                    "Exhale and rotate your top knee inward while keeping the pelvis stable.",
                    "Inhale to return to the starting position.",
                    "Move slowly and maintain control throughout."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale during rotation, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Internal rotation in the hip.",
                    "Stable pelvis with controlled motion."
                  ]}
                  whatToAvoid={[
                    "Rolling the pelvis forward or backward.",
                    "Forcing the range of motion."
                  ]}
                  redFlags={[
                    "Sharp pain or discomfort."
                  ]}
                  regression={[
                    "Place a pillow between the knees for added support."
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
