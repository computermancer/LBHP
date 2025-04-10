import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill4SupineMarching() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Supine Marching with Pelvic Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day5/drill3" 
            currentDay="/week2/day5" 
            nextDrill="/week2/day5/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your back with knees bent, feet flat.",
                    "Hands resting by your sides or on lower ribs."
                  ]}
                  instructions={[
                    "Exhale and lift one knee toward the chest while maintaining rib and pelvis control.",
                    "Return to starting position and switch sides."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale during lift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Core and pelvis control with smooth leg motion."
                  ]}
                  whatToAvoid={[
                    "Arching the back or losing pelvic control."
                  ]}
                  redFlags={[
                    "Pain or discomfort in the hips or low back."
                  ]}
                  regression={[
                    "Limit leg lift height if needed."
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
