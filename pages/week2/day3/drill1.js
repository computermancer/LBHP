import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function SupinePelvicRotationwithBreath() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Supine Pelvic Rotation with Breath</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day2/drill5" 
            currentDay="/week2/day3" 
            nextDrill="/week2/day3/drill2" 
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
                    "Arms resting by your sides or on your pelvis."
                  ]}
                  instructions={[
                    "Gently rotate your pelvis side to side in a controlled motion.",
                    "Focus on smooth, continuous movement.",
                    "Maintain relaxed breathing throughout."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 8–10 slow rotations per set",
                    "Breath: Maintain steady breathing",
                    "Rest: Between sets or as needed"
                  ]}
                  whatToFeel={[
                    "Gentle movement in the pelvic joints.",
                    "Relaxed abdominal muscles."
                  ]}
                  whatToAvoid={[
                    "Jerky or rushed movements.",
                    "Holding tension in the upper body."
                  ]}
                  redFlags={[
                    "Sharp pain in the low back."
                  ]}
                  regression={[
                    "Place a pillow under your knees for support."
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
