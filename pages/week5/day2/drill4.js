import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill4SingleLegGluteBridgewithRibStability() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Single-Leg Glute Bridge with Rib Stability</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day2/drill3" 
            currentDay="/week5/day2" 
            nextDrill="/week5/day2/drill5" 
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
                    "Arms resting by your sides."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and lift hips while extending one leg.",
                    "Hold briefly, then return to start.",
                    "Switch legs and repeat."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 per side",
                    "Breath: Exhale to lift, inhale to lower",
                    "Rest: 30–45 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Glutes and core engaged",
                    "Pelvis and ribcage stability"
                  ]}
                  whatToAvoid={[
                    "Arching the lower back"
                  ]}
                  redFlags={[
                    "Pain in the lower back or hips"
                  ]}
                  regression={[
                    "Perform a bilateral glute bridge."
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
