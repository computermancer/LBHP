import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function HooklyingBellyBreathing() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Hooklying Belly Breathing</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day1/drill1" 
            currentDay="/week1/day1" 
            nextDrill="/week1/day1/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your back with knees bent, feet flat on the floor.",
                    "Place one hand on your chest and the other on your belly."
                  ]}
                  instructions={[
                    "Inhale gently through your nose, allowing the belly to rise without moving the chest.",
                    "Exhale softly through your mouth or nose, allowing the belly to fall naturally.",
                    "Focus on minimizing upper chest movement."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5–8 breath cycles per set",
                    "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
                    "Rest: Between sets or as needed"
                  ]}
                  whatToFeel={[
                    "Belly rising under your hand with each inhale.",
                    "Sense of relaxation and minimal chest movement."
                  ]}
                  whatToAvoid={[
                    "Lifting the chest or shrugging shoulders.",
                    "Forcing or over-controlling the breath."
                  ]}
                  redFlags={[
                    "Lightheadedness or shortness of breath."
                  ]}
                  regression={[
                    "Prop knees up with a pillow if the lower back feels strained."
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
