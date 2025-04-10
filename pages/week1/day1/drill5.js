import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function WallHamstringPress() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Wall Hamstring Press</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day1/drill4" 
            currentDay="/week1/day1" 
            nextDrill="/week1/day2/drill1" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your back with feet on wall, knees and hips at 90 degrees.",
                    "Arms resting by sides or palms on lower ribs."
                  ]}
                  instructions={[
                    "Gently press both heels into the wall as if trying to slide the wall down.",
                    "Avoid lifting the hips; let hamstrings engage and stabilize the pelvis.",
                    "Breathe steadily throughout."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 5–10 second presses",
                    "Breath: Slow, steady breathing throughout each press",
                    "Rest: 20–40 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Gentle hamstring tension.",
                    "Subtle core engagement as pelvis anchors."
                  ]}
                  whatToAvoid={[
                    "Pushing through toes.",
                    "Holding breath or squeezing glutes excessively."
                  ]}
                  redFlags={[
                    "Cramping or sharp discomfort.",
                    "Shaking or bracing excessively."
                  ]}
                  regression={[
                    "Use a pillow under your head for neck support."
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
