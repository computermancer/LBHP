import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function WallSupportedSquatHold() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Wall Supported Squat Hold</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day2/drill4" 
            currentDay="/week1/day2" 
            nextDrill="/week1/day3/drill1" 
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
                    "Stand with your back against a wall, feet about hip-width apart.",
                    "Slide down into a partial squat with thighs above parallel."
                  ]}
                  instructions={[
                    "Hold the squat position while maintaining neutral spine.",
                    "Press heels gently into the floor to engage hamstrings.",
                    "Breathe steadily throughout the hold."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 15–30 seconds per hold",
                    "Breath: Maintain slow, steady breathing throughout",
                    "Rest: 30–40 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Tension through quads, hamstrings, and glutes",
                    "Stable pelvis and core engagement"
                  ]}
                  whatToAvoid={[
                    "Arching or flattening the lower back",
                    "Shifting weight onto toes"
                  ]}
                  redFlags={[
                    "Knee or back pain"
                  ]}
                  regression={[
                    "Reduce squat depth or hold for a shorter time."
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
