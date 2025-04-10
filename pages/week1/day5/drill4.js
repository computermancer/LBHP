import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function SupineMarchingwithRibControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Supine Marching with Rib Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day5/drill3" 
            currentDay="/week1/day5" 
            nextDrill="/week1/day5/drill5" 
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
                    "Arms resting by your sides or palms on your lower ribs."
                  ]}
                  instructions={[
                    "Exhale and lift one knee toward your chest.",
                    "Maintain rib and pelvis control throughout.",
                    "Lower the leg back to the floor with control.",
                    "Alternate sides."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale to lift, inhale to lower",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Core engagement and rib stability",
                    "Smooth, controlled leg movement"
                  ]}
                  whatToAvoid={[
                    "Arching the low back",
                    "Losing control of pelvis and ribs"
                  ]}
                  redFlags={[
                    "Low back pain or discomfort"
                  ]}
                  regression={[
                    "Perform the drill with feet closer to the floor for reduced intensity."
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
