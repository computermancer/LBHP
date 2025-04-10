import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill4HooklyingRibExpansionwithMarching() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Hooklying Rib Expansion with Marching</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day5/drill3" 
            currentDay="/week5/day5" 
            nextDrill="/week5/day5/drill5" 
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
                    "Hands resting on ribcage."
                  ]}
                  instructions={[
                    "Inhale deeply, feeling ribs expand laterally.",
                    "Exhale and lift one foot off the floor, maintaining rib control.",
                    "Return to starting and alternate sides."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Inhale to prepare, exhale to lift",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Core and rib engagement",
                    "Controlled movement with breath"
                  ]}
                  whatToAvoid={[
                    "Arching the back or losing core control"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the lower back"
                  ]}
                  regression={[
                    "Perform smaller marches to maintain control."
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
