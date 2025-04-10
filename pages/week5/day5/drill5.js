import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill5SupinePelvicRockwithBreathControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Supine Pelvic Rock with Breath Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day5/drill4" 
            currentDay="/week5/day5" 
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
                    "Hands resting on lower ribs."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and gently rock your pelvis backward and forward.",
                    "Focus on smooth movement and maintaining rib control."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps",
                    "Breath: Exhale to rock, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Smooth pelvic motion",
                    "Core engagement with controlled breath"
                  ]}
                  whatToAvoid={[
                    "Overarching or collapsing posture"
                  ]}
                  redFlags={[
                    "Sharp pain or discomfort"
                  ]}
                  regression={[
                    "Perform smaller movements for better control."
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
