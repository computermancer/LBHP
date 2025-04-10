import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill5SupineSpineTwistwithBreath() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Supine Spine Twist with Breath</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day3/drill4" 
            currentDay="/week4/day3" 
            nextDrill="/week4/day4/drill1" 
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
                    "Arms extended out to the sides."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and gently lower knees to one side.",
                    "Inhale and return to the center.",
                    "Alternate sides with control."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 per side",
                    "Breath: Exhale to rotate, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Smooth spinal rotation",
                    "Controlled movement with breath"
                  ]}
                  whatToAvoid={[
                    "Twisting from the lower back"
                  ]}
                  redFlags={[
                    "Pain or discomfort during rotation"
                  ]}
                  regression={[
                    "Limit the range of motion for less intensity."
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
