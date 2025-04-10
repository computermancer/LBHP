import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function SupportedBreathPatterning() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Supported Breath Patterning</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day3/drill2" 
            currentDay="/week1/day3" 
            nextDrill="/week1/day3/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit upright in a chair, feet flat on the floor.",
                    "Hands resting gently on your lower ribs."
                  ]}
                  instructions={[
                    "Inhale deeply into the belly and lower ribs.",
                    "Exhale fully and feel the ribs drop back.",
                    "Maintain slow, steady breaths throughout."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5–8 breath cycles per set",
                    "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
                    "Rest: Between sets or as needed"
                  ]}
                  whatToFeel={[
                    "Expansion through the ribs and belly",
                    "Relaxation with minimal upper chest movement"
                  ]}
                  whatToAvoid={[
                    "Holding breath or forcing exhalation"
                  ]}
                  redFlags={[
                    "Lightheadedness or discomfort"
                  ]}
                  regression={[
                    "Lean slightly forward to provide better feedback."
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
