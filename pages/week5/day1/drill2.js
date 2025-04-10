import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2HorseStanceHoldParalleltoFloor() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Horse Stance Hold (Parallel to Floor)</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day1/drill1" 
            currentDay="/week5/day1" 
            nextDrill="/week5/day1/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand with feet wider than shoulder-width apart, toes slightly turned out.",
                    "Arms extended forward or hands on hips."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and lower hips until thighs are parallel to the floor.",
                    "Hold for 20–30 seconds while maintaining rib and pelvic control."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 2–3 holds",
                    "Breath: Steady breathing throughout",
                    "Rest: 30–45 seconds between holds"
                  ]}
                  whatToFeel={[
                    "Thigh and glute activation",
                    "Rib stability and core engagement"
                  ]}
                  whatToAvoid={[
                    "Allowing knees to collapse inward or arching the back"
                  ]}
                  redFlags={[
                    "Sharp knee or hip pain"
                  ]}
                  regression={[
                    "Perform a higher stance to reduce intensity."
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
