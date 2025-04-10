import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2SeatedHipShiftwithRibStability() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 3 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Seated Hip Shift with Rib Stability</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week3/day1/drill1" 
            currentDay="/week3/day1" 
            nextDrill="/week3/day1/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit on a chair with feet flat on the floor.",
                    "Place hands on your ribs for feedback."
                  ]}
                  instructions={[
                    "Gently shift hips side to side while maintaining rib position.",
                    "Focus on keeping ribs stable during movement.",
                    "Move slowly and with control."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 8–10 shifts per side",
                    "Breath: Maintain steady breathing",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Controlled hip movement",
                    "Stable rib position"
                  ]}
                  whatToAvoid={[
                    "Rushing the movement",
                    "Allowing ribs to move with hips"
                  ]}
                  redFlags={[
                    "Sharp pain in the low back"
                  ]}
                  regression={[
                    "Use a back support if needed"
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
