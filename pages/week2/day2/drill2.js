import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2SeatedHipHinge() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Seated Hip Hinge with Breath</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day2/drill1" 
            currentDay="/week2/day2" 
            nextDrill="/week2/day2/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit on a firm chair, feet flat, hands resting on your thighs."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and hinge forward from the hips while maintaining a neutral spine.",
                    "Return to the starting position with control."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 controlled reps",
                    "Breath: Exhale to hinge, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Stretch in the hamstrings and engagement through the core."
                  ]}
                  whatToAvoid={[
                    "Rounding or arching the back."
                  ]}
                  redFlags={[
                    "Pain or discomfort in the low back."
                  ]}
                  regression={[
                    "Place hands on a table for additional support."
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
