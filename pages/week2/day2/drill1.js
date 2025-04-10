import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill1QuadrupedReach() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <div className="h-24 flex flex-col justify-center">
            <h1 className="text-orange-300 text-4xl font-bold">Week 2 - Day 2</h1>
            <h2 className="text-orange-300 text-2xl font-bold">Drill 1: Quadruped Reach with Rib Control<br/>&nbsp;</h2>
          </div>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day1/drill5" 
            currentDay="/week2/day2" 
            nextDrill="/week2/day2/drill2" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Start in a quadruped position, hands under shoulders, knees under hips.",
                    "Maintain a neutral spine with ribs aligned."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and slowly reach one arm forward while maintaining rib control.",
                    "Return to the starting position and alternate sides."
                  ]}
                  setsReps={[
                    "Sets: 2 – 3",
                    "Reps: 8 – 10 slow reps per side",
                    "Breath: Exhale during the reach, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Stability through the ribs and core.",
                    "Smooth, controlled motion with no rib flaring."
                  ]}
                  whatToAvoid={[
                    "Losing rib control or arching the lower back."
                  ]}
                  redFlags={[
                    "Pain or discomfort in the shoulders or low back."
                  ]}
                  regression={[
                    "Reduce range of motion if control is difficult."
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
