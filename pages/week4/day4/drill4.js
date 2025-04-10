import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill4SupportedSideLyingHipAbduction() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Supported Side-Lying Hip Abduction</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day4/drill3" 
            currentDay="/week4/day4" 
            nextDrill="/week4/day4/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your side with knees slightly bent.",
                    "Head supported by your arm."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and lift the top leg slightly without rotating the pelvis.",
                    "Hold for 2–3 seconds, then return."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 per side",
                    "Breath: Exhale to lift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Glute activation and hip control",
                    "Pelvic stability throughout"
                  ]}
                  whatToAvoid={[
                    "Rolling the pelvis or hiking the hip"
                  ]}
                  redFlags={[
                    "Pain in the hips or lower back"
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
