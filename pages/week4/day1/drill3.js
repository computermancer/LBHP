import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill3HooklyingRibExpansionwithMarching() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Hooklying Rib Expansion with Marching</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day1/drill2" 
            currentDay="/week4/day1" 
            nextDrill="/week4/day1/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your back with knees bent, feet flat.",
                    "Hands resting on the sides of your ribs."
                  ]}
                  instructions={[
                    "Inhale deeply, expanding the ribs.",
                    "Exhale and lift one knee toward your chest while maintaining rib control.",
                    "Return to starting position and alternate sides."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale to lift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Core engagement and rib stability",
                    "Smooth, controlled leg movement"
                  ]}
                  whatToAvoid={[
                    "Arching the lower back"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the lower back"
                  ]}
                  regression={[
                    "Perform with feet closer to the floor for reduced intensity."
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
