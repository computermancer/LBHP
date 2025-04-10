import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2SupineMarchingwithCoreControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 3 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Supine Marching with Core Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week3/day2/drill1" 
            currentDay="/week3/day2" 
            nextDrill="/week3/day2/drill3" 
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
                    "Arms resting by your sides for support."
                  ]}
                  instructions={[
                    "Lift one foot off the floor while maintaining pelvic position.",
                    "Focus on keeping ribs and pelvis stable.",
                    "Switch legs with control and maintain core engagement."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 8–10 alternations per set",
                    "Breath: Maintain steady breathing",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Controlled leg movement",
                    "Stable core and pelvic position"
                  ]}
                  whatToAvoid={[
                    "Allowing ribs to flare or pelvis to tilt"
                  ]}
                  redFlags={[
                    "Sharp pain in the low back"
                  ]}
                  regression={[
                    "Perform with smaller leg lift if needed"
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
