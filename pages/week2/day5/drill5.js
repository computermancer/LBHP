import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill5SeatedBreathHipShifts() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Seated Breath with Hip Shifts</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day5/drill4" 
            currentDay="/week2/day5" 
            nextDrill="/week3/day1/drill1" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit upright on a firm chair, feet flat.",
                    "Hands resting on your pelvis or thighs."
                  ]}
                  instructions={[
                    "Inhale deeply, maintaining pelvic and rib control.",
                    "Exhale and gently shift the pelvis side to side.",
                    "Return to center between each shift."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5–8 slow shifts per set",
                    "Breath: Inhale to prepare, exhale during shift",
                    "Rest: Between sets or as needed"
                  ]}
                  whatToFeel={[
                    "Connection between breath, pelvis, and ribcage."
                  ]}
                  whatToAvoid={[
                    "Over-shifting or losing control."
                  ]}
                  redFlags={[
                    "Pain or discomfort in hips or low back."
                  ]}
                  regression={[
                    "Use a pillow for lumbar support."
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
