import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill4QuadrupedRockBackwithBreathFocus() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 3 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Quadruped Rock Back with Breath Focus</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week3/day1/drill3" 
            currentDay="/week3/day1" 
            nextDrill="/week3/day1/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Start on hands and knees with wrists under shoulders and knees under hips.",
                    "Hands shoulder-width apart, knees hip-width apart."
                  ]}
                  instructions={[
                    "Inhale to prepare while maintaining neutral spine.",
                    "Exhale and slowly rock back towards your heels.",
                    "Focus on maintaining pelvic and rib control throughout."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5–8 slow rocks per set",
                    "Breath: Exhale during movement, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Controlled movement through the hips",
                    "Maintained rib and pelvic position"
                  ]}
                  whatToAvoid={[
                    "Allowing ribs to collapse or pelvis to tilt"
                  ]}
                  redFlags={[
                    "Sharp pain in the low back or knees"
                  ]}
                  regression={[
                    "Reduce range of motion if needed"
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
