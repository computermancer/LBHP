import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill1SupineRibShift() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Supine Rib Shift with Breath</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day3/drill5" 
            currentDay="/week2/day4" 
            nextDrill="/week2/day4/drill2" 
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
                    "Place hands on your lower ribs for feedback."
                  ]}
                  instructions={[
                    "Inhale deeply, expanding the ribs laterally.",
                    "Exhale and gently shift the ribs side to side.",
                    "Return to center before switching sides."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow shifts per side",
                    "Breath: Exhale during shift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Subtle motion through the ribs with minimal effort."
                  ]}
                  whatToAvoid={[
                    "Arching the back or tensing the neck."
                  ]}
                  redFlags={[
                    "Pain or discomfort in the ribs or spine."
                  ]}
                  regression={[
                    "Reduce range of motion if needed."
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
