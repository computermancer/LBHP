import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill4WallSupportedMarchingwithRibStability() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Wall Supported Marching with Rib Stability</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day5/drill3" 
            currentDay="/week4/day5" 
            nextDrill="/week4/day5/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your back with feet on the wall, knees at 90 degrees.",
                    "Arms resting by your sides."
                  ]}
                  instructions={[
                    "Exhale and gently press your heels into the wall.",
                    "Lift one foot slightly off the wall while maintaining rib control.",
                    "Return to starting position and alternate sides."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale to lift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Core activation and rib stability",
                    "Smooth, controlled leg movement"
                  ]}
                  whatToAvoid={[
                    "Arching the lower back"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the lower back"
                  ]}
                  regression={[
                    "Perform smaller marches to reduce intensity."
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
