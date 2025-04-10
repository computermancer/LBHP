import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill5SupineRibShiftwithCoreEngagement() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Supine Rib Shift with Core Engagement</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day2/drill4" 
            currentDay="/week5/day2" 
            nextDrill="/week5/day3/drill1" 
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
                    "Hands resting on ribcage."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and shift ribs slightly to one side.",
                    "Inhale and return to center.",
                    "Switch sides and repeat."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 8–10 per side",
                    "Breath: Exhale to shift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Subtle core activation and rib control"
                  ]}
                  whatToAvoid={[
                    "Over-shifting or losing control"
                  ]}
                  redFlags={[
                    "Sharp discomfort in ribs or spine"
                  ]}
                  regression={[
                    "Limit range of rib movement."
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
