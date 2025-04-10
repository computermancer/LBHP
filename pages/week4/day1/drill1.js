import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill1SupineRibShiftwithBreathControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Supine Rib Shift with Breath Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week3/day5/drill5" 
            currentDay="/week4/day1" 
            nextDrill="/week4/day1/drill2" 
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
                    "Hands resting gently on the sides of your ribcage."
                  ]}
                  instructions={[
                    "Inhale deeply through your nose, feeling ribs expand laterally.",
                    "Exhale and shift the ribs slightly to one side while maintaining pelvis control.",
                    "Return to center and alternate sides."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Exhale to shift, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Ribcage expanding and shifting laterally",
                    "Pelvic stability while ribs move"
                  ]}
                  whatToAvoid={[
                    "Losing pelvis control",
                    "Forcing the rib shift"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the ribs or lower back"
                  ]}
                  regression={[
                    "Perform with smaller rib shifts to improve control."
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
