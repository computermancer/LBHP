import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill3SeatedThoracicRotationwithArmReach() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 3 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Seated Thoracic Rotation with Arm Reach</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week3/day2/drill2" 
            currentDay="/week3/day2" 
            nextDrill="/week3/day2/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit on a chair with feet flat on the floor.",
                    "Arms extended forward at shoulder height."
                  ]}
                  instructions={[
                    "Inhale to prepare while maintaining rib position.",
                    "Exhale and rotate torso to one side while reaching with arms.",
                    "Return to center and repeat on other side."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 8–10 rotations per side",
                    "Breath: Exhale during rotation, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Controlled thoracic rotation",
                    "Maintained rib position"
                  ]}
                  whatToAvoid={[
                    "Allowing ribs to collapse or pelvis to rotate"
                  ]}
                  redFlags={[
                    "Sharp pain in the back"
                  ]}
                  regression={[
                    "Reduce range of rotation if needed"
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
