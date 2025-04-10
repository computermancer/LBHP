import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function GentleBilateralRocking() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Gentle Bilateral Rocking</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day3/drill4" 
            currentDay="/week1/day3" 
            nextDrill="/week1/day4/drill1" 
            disableNext={true}
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
                    "Arms resting comfortably by your sides."
                  ]}
                  instructions={[
                    "Gently rock both knees side to side.",
                    "Move within a comfortable range of motion.",
                    "Return to center before switching sides."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow rocks per side",
                    "Breath: Inhale at center, exhale as you rock",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Gentle mobility through the pelvis and lower back",
                    "Relaxed movement with control"
                  ]}
                  whatToAvoid={[
                    "Forcing the knees too far",
                    "Tension through the spine"
                  ]}
                  redFlags={[
                    "Sharp pain or discomfort"
                  ]}
                  regression={[
                    "Reduce range of motion if needed."
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
