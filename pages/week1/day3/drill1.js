import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function BreathResetinSideLying() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Breath Reset in Side Lying</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day2/drill5" 
            currentDay="/week1/day3" 
            nextDrill="/week1/day3/drill2" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your side with knees bent at 90 degrees, head supported.",
                    "Place one hand on your top ribcage and the other on your belly."
                  ]}
                  instructions={[
                    "Inhale deeply into the lower ribs and belly.",
                    "Exhale softly, allowing ribs to drop naturally.",
                    "Focus on creating expansion in the lower ribs with each breath."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5–8 breath cycles per set",
                    "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
                    "Rest: Between sets or as needed"
                  ]}
                  whatToFeel={[
                    "Lower ribcage expanding with each inhale",
                    "Relaxed and controlled breath pattern"
                  ]}
                  whatToAvoid={[
                    "Overarching the low back",
                    "Tension in the upper chest or shoulders"
                  ]}
                  redFlags={[
                    "Dizziness or shortness of breath"
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
