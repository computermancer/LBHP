import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill3KickstandRDLwithHipControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Kickstand RDL with Hip Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day1/drill2" 
            currentDay="/week5/day1" 
            nextDrill="/week5/day1/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand with feet hip-width apart, one foot slightly behind (kickstand position).",
                    "Hinge at hips, keeping back neutral."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and hinge forward, maintaining rib and pelvis control.",
                    "Return to standing with control.",
                    "Switch legs and repeat."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 per side",
                    "Breath: Exhale to hinge, inhale to return",
                    "Rest: 30–45 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Glute and hamstring engagement",
                    "Pelvic and rib stability"
                  ]}
                  whatToAvoid={[
                    "Rounding or arching the back"
                  ]}
                  redFlags={[
                    "Sharp pain in hamstrings or lower back"
                  ]}
                  regression={[
                    "Perform a smaller hinge with less range of motion."
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
