import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function SideLyingRibExpansion() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Side-Lying Rib Expansion</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day1/drill5" 
            currentDay="/week1/day2" 
            nextDrill="/week1/day2/drill2" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your side with knees bent at 90 degrees and stacked.",
                    "Rest your bottom arm under your head for support."
                  ]}
                  instructions={[
                    "Inhale deeply into the bottom side of your ribs.",
                    "Feel the ribs expanding laterally as you breathe in.",
                    "Exhale slowly and let the ribs fall naturally.",
                    "Focus on directing the breath to the lower ribcage."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5–8 breath cycles per set",
                    "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
                    "Rest: Between sets or as needed"
                  ]}
                  whatToFeel={[
                    "Expansion of the lower ribs.",
                    "Controlled, relaxed breath with no chest dominance."
                  ]}
                  whatToAvoid={[
                    "Breathing only into the upper chest.",
                    "Collapsing or losing rib position."
                  ]}
                  redFlags={[
                    "Dizziness or difficulty maintaining position."
                  ]}
                  regression={[
                    "Use a pillow between the knees for support."
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
