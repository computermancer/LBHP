import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill4SupportedSideLyingHipAbduction() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Supported Side-Lying Hip Abduction</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day3/drill3" 
            currentDay="/week2/day3" 
            nextDrill="/week2/day3/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your side with knees slightly bent and stacked.",
                    "Support your head with a pillow or your arm."
                  ]}
                  instructions={[
                    "Exhale and lift your top leg slightly while maintaining pelvic stability.",
                    "Inhale to return to the starting position.",
                    "Move slowly and maintain control throughout."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale during lift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Activation of the lateral hip muscles."
                  ]}
                  whatToAvoid={[
                    "Rolling the pelvis backward or forward."
                  ]}
                  redFlags={[
                    "Pain or discomfort in the hips."
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
