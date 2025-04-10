import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function StandingHipHingewithWallReach() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Standing Hip Hinge with Wall Reach</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day2/drill2" 
            currentDay="/week1/day2" 
            nextDrill="/week1/day2/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand facing away from a wall, feet hip-width apart.",
                    "Position yourself about 6 inches away from the wall."
                  ]}
                  instructions={[
                    "Push your hips back toward the wall while maintaining a neutral spine.",
                    "Reach both hands forward as you hinge.",
                    "Stop when your hips touch the wall lightly.",
                    "Return to standing by driving hips forward."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow, controlled reps",
                    "Breath: Inhale as you hinge, exhale as you return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Hamstrings and glutes activating during the hinge",
                    "Length through the spine and engaged core"
                  ]}
                  whatToAvoid={[
                    "Rounding the lower back",
                    "Pushing hips too far back, causing balance loss"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the low back"
                  ]}
                  regression={[
                    "Stand closer to the wall to reduce hinge depth."
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
