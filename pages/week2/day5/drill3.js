import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill3SeatedSpineTwist() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Seated Spine Twist with Arm Reach</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day5/drill2" 
            currentDay="/week2/day5" 
            nextDrill="/week2/day5/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit upright in a firm chair, feet flat, hands crossed over your chest."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and rotate your upper body to one side while reaching one arm forward.",
                    "Return to center and switch sides."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale during rotation, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Controlled thoracic rotation with scapular motion."
                  ]}
                  whatToAvoid={[
                    "Over-rotating or losing rib control."
                  ]}
                  redFlags={[
                    "Pain or discomfort in the spine."
                  ]}
                  regression={[
                    "Perform without arm reach if needed."
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
