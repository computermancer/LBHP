import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill5WallSupportedHingewithArmReach() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 3 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Wall-Supported Hinge with Arm Reach</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week3/day1/drill4" 
            currentDay="/week3/day1" 
            nextDrill="/week3/day2/drill1" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand with feet hip-width apart, facing away from a wall.",
                    "Hips slightly bent, arms extended in front."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and hinge at the hips, maintaining a neutral spine.",
                    "Reach your arms forward while maintaining rib control.",
                    "Return to standing with control."
                  ]}
                  setsReps={[
                    "Sets: 2-3",
                    "Reps: 8-10 reps",
                    "Breath: Exhale to hinge, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Glutes and hamstrings engaging",
                    "Maintained core and rib stability"
                  ]}
                  whatToAvoid={[
                    "Overarching or rounding the lower back"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the lower back"
                  ]}
                  regression={[
                    "Perform with a smaller hinge for reduced range."
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
