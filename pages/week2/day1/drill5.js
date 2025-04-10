import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function WallSupportedHeelPress() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Wall Supported Heel Press</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day1/drill4" 
            currentDay="/week2/day1" 
            nextDrill="/week2/day2/drill1" 
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
                    "Lie on your back with feet on a wall, knees and hips at 90 degrees.",
                    "Arms resting by your sides or on your ribs."
                  ]}
                  instructions={[
                    "Press both heels gently into the wall.",
                    "Maintain contact with the wall and focus on engaging the hamstrings.",
                    "Hold for 5–10 seconds, then relax."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 5–8 controlled presses",
                    "Breath: Exhale during press, inhale to release",
                    "Rest: 20–40 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Hamstring activation and subtle core engagement."
                  ]}
                  whatToAvoid={[
                    "Pressing too hard or lifting the pelvis."
                  ]}
                  redFlags={[
                    "Cramping or sharp discomfort."
                  ]}
                  regression={[
                    "Move feet slightly lower on the wall to reduce intensity."
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
