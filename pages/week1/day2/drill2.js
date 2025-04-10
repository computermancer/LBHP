import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function SeatedThoracicRotation() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Seated Thoracic Rotation</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day2/drill1" 
            currentDay="/week1/day2" 
            nextDrill="/week1/day2/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit upright on a firm chair, feet flat, and hands crossed over your chest."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and slowly rotate your upper body to one side.",
                    "Keep pelvis and hips still, focusing on thoracic rotation.",
                    "Return to center and repeat on the other side."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 reps per side",
                    "Breath: Exhale during rotation, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Gentle rotation through the upper back",
                    "Controlled breath guiding the movement"
                  ]}
                  whatToAvoid={[
                    "Rotating from the hips or lower back",
                    "Jerky or rushed movement"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the spine"
                  ]}
                  regression={[
                    "Place hands on a table for support if maintaining position is difficult."
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
