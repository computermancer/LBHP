import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill3SeatedSpineRotation() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Seated Spine Rotation with Breath</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day3/drill2" 
            currentDay="/week2/day3" 
            nextDrill="/week2/day3/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit upright in a firm chair, feet flat, hands on your chest."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and rotate your upper body to one side while maintaining rib control.",
                    "Return to center and alternate sides."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale during rotation, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Controlled rotation through the thoracic spine."
                  ]}
                  whatToAvoid={[
                    "Over-rotating or losing core control."
                  ]}
                  redFlags={[
                    "Pain or discomfort in the spine or ribs."
                  ]}
                  regression={[
                    "Reduce the range of rotation if needed."
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
