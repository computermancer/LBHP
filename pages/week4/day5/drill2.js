import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2SupinePelvicRockwithBreathFocus() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Supine Pelvic Rock with Breath Focus</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day5/drill1" 
            currentDay="/week4/day5" 
            nextDrill="/week4/day5/drill3" 
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
                    "Arms resting by your sides."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and gently rock your pelvis backward and forward.",
                    "Maintain a neutral ribcage and pelvis throughout."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps",
                    "Breath: Exhale to rock, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Smooth pelvic motion",
                    "Controlled breathing with each movement"
                  ]}
                  whatToAvoid={[
                    "Overarching or flattening the back"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the lower back"
                  ]}
                  regression={[
                    "Perform with knees supported for reduced range."
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
