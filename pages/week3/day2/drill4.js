import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill4WallHamstringMarchwithRibControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 3 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Wall Hamstring March with Rib Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week3/day2/drill3" 
            currentDay="/week3/day2" 
            nextDrill="/week3/day2/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  title="Drill 4: Wall Hamstring March with Rib Control"
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your back with feet on the wall, knees bent at 90 degrees.",
                    "Arms resting by your sides."
                  ]}
                  instructions={[
                    "Exhale and press both heels into the wall.",
                    "Lift one foot slightly off the wall without losing rib control.",
                    "Return and switch sides."
                  ]}
                  setsReps={[
                    "Sets: 2 - 3",
                    "Reps: 8 - 10 per side",
                    "Breath: Exhale to lift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Hamstring and core activation",
                    "Stable ribcage with controlled movement"
                  ]}
                  whatToAvoid={[
                    "Lifting the hips or arching the back"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the hips or lower back"
                  ]}
                  regression={[
                    "Perform smaller marches for reduced intensity."
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
