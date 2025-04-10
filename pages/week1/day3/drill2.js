import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function RhythmicReachAndRoll() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Rhythmic Reach and Roll</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day3/drill1" 
            currentDay="/week1/day3" 
            nextDrill="/week1/day3/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie on your back with arms extended overhead.",
                    "Knees bent, feet flat on the floor."
                  ]}
                  instructions={[
                    "Reach one arm up and across your body as if rolling over.",
                    "Let your head and upper back follow the movement.",
                    "Return to the starting position."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps per side",
                    "Breath: Inhale before the reach, exhale as you roll",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Smooth, flowing movement through the spine",
                    "Gentle stretch through the upper back and ribs"
                  ]}
                  whatToAvoid={[
                    "Jerky or rushed movements",
                    "Losing control of the rolling motion"
                  ]}
                  redFlags={[
                    "Pain in the spine or shoulders"
                  ]}
                  regression={[
                    "Bend knees closer to the chest for added control."
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
