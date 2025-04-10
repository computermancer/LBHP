import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill3SupineDiaphragmResetwithReach() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 3 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Supine Diaphragm Reset with Reach</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week3/day1/drill2" 
            currentDay="/week3/day1" 
            nextDrill="/week3/day1/drill4" 
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
                    "Arms extended overhead on the floor."
                  ]}
                  instructions={[
                    "Inhale deeply through your nose, allowing the belly to expand.",
                    "Exhale fully while reaching arms overhead.",
                    "Focus on maintaining pelvic position during breaths."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5–8 breath cycles per set",
                    "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Expansion of the belly and lower ribs",
                    "Controlled arm reach with breath"
                  ]}
                  whatToAvoid={[
                    "Over-tilting the pelvis or arching the back"
                  ]}
                  redFlags={[
                    "Dizziness or discomfort during breathing"
                  ]}
                  regression={[
                    "Keep arms at 45-degree angle if full overhead reach is difficult"
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
