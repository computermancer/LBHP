import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill1StaggeredStanceSquatswithRibStability() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Staggered Stance Squats with Rib Stability</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day1/drill5" 
            currentDay="/week5/day2" 
            nextDrill="/week5/day2/drill2" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand with feet staggered, one foot slightly in front of the other.",
                    "Arms extended forward or hands on hips."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and lower into a squat, keeping ribs aligned with pelvis.",
                    "Inhale and return to standing.",
                    "Switch sides and repeat."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 per side",
                    "Breath: Exhale to lower, inhale to rise",
                    "Rest: 30–45 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Glute, quad, and core engagement",
                    "Stability in the pelvis and ribcage"
                  ]}
                  whatToAvoid={[
                    "Knees collapsing inward or arching the back"
                  ]}
                  redFlags={[
                    "Sharp pain or discomfort in knees"
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
