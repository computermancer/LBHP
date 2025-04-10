import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2SupineDiaphragmReset() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Supine Diaphragm Reset with Reach</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day3/drill1" 
            currentDay="/week2/day3" 
            nextDrill="/week2/day3/drill3" 
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
                    "Arms reaching straight up to the ceiling."
                  ]}
                  instructions={[
                    "Inhale deeply into the ribs.",
                    "Exhale and gently reach toward the ceiling while maintaining rib control.",
                    "Return to the starting position."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps",
                    "Breath: Exhale during reach, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Activation of core and ribcage stability."
                  ]}
                  whatToAvoid={[
                    "Flaring the ribs or arching the back."
                  ]}
                  redFlags={[
                    "Pain or discomfort in the shoulders or ribs."
                  ]}
                  regression={[
                    "Reduce the range of motion if needed."
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
