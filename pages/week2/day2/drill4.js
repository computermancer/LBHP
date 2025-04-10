import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill4WallHamstringMarching() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Wall Hamstring Marching</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day2/drill3" 
            currentDay="/week2/day2" 
            nextDrill="/week2/day2/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your back with feet on a wall, knees and hips at 90 degrees."
                  ]}
                  instructions={[
                    "Exhale and gently press one heel into the wall.",
                    "Lift the opposite foot slightly off the wall.",
                    "Return to starting position and switch sides."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow marches per side",
                    "Breath: Exhale during lift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Hamstring engagement and pelvic stability."
                  ]}
                  whatToAvoid={[
                    "Losing pelvic control or arching the lower back."
                  ]}
                  redFlags={[
                    "Pain or discomfort in hips or low back."
                  ]}
                  regression={[
                    "Keep both feet on the wall if maintaining stability is difficult."
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
