import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill4SeatedSpineRotationwithReach() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Seated Spine Rotation with Reach</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day4/drill3" 
            currentDay="/week5/day4" 
            nextDrill="/week5/day4/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit upright in a firm chair, feet flat on the floor.",
                    "Hands resting on thighs or crossed over chest."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and rotate your upper body to one side, reaching one arm forward.",
                    "Return to center before rotating to the other side."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale during rotation, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Controlled thoracic rotation",
                    "Scapular movement with reach"
                  ]}
                  whatToAvoid={[
                    "Rotating from the hips or lower back"
                  ]}
                  redFlags={[
                    "Pain or discomfort during rotation"
                  ]}
                  regression={[
                    "Perform with hands on knees for support."
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
