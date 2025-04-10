import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function SeatedSpineTwistwithBreath() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Seated Spine Twist with Breath</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day5/drill2" 
            currentDay="/week1/day5" 
            nextDrill="/week1/day5/drill4" 
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
                    "Hands gently resting on your knees or crossed over your chest."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and rotate your upper body to one side.",
                    "Return to center before rotating to the other side."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale during rotation, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Controlled rotation through the thoracic spine",
                    "Engagement of core and obliques"
                  ]}
                  whatToAvoid={[
                    "Rotating from the hips or lower back",
                    "Jerky or rushed movements"
                  ]}
                  redFlags={[
                    "Pain or discomfort during rotation"
                  ]}
                  regression={[
                    "Hold onto the side of the chair for added stability."
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
