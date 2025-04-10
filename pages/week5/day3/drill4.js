import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill4BilateralGluteBridgewithRibandPelvicControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Bilateral Glute Bridge with Rib and Pelvic Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day3/drill3" 
            currentDay="/week5/day3" 
            nextDrill="/week5/day3/drill5" 
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
                    "Exhale and lift hips toward the ceiling while maintaining rib control.",
                    "Hold briefly, then return to starting position."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 reps",
                    "Breath: Exhale to lift, inhale to lower",
                    "Rest: 30–45 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Glutes, hamstrings, and core engaged",
                    "Pelvis and rib stability maintained"
                  ]}
                  whatToAvoid={[
                    "Overarching the lower back"
                  ]}
                  redFlags={[
                    "Pain in the lower back or hips"
                  ]}
                  regression={[
                    "Perform a smaller range of motion."
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
