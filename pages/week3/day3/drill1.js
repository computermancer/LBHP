import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill1CatCowwithBreathAwareness() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 3 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Cat-Cow with Breath Awareness</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week3/day2/drill5" 
            currentDay="/week3/day3" 
            nextDrill="/week3/day3/drill2" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Start on your hands and knees, wrists under shoulders, knees under hips.",
                    "Keep your head in a neutral position."
                  ]}
                  instructions={[
                    "Inhale and arch your back (Cow pose), lifting your head and tailbone.",
                    "Exhale and round your spine (Cat pose), tucking your chin to chest.",
                    "Move slowly and focus on your breath."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 8–10 cycles per set",
                    "Breath: Inhale on Cow, exhale on Cat",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Spinal movement with breath",
                    "Shoulder and hip stability"
                  ]}
                  whatToAvoid={[
                    "Jerky movements or holding breath"
                  ]}
                  redFlags={[
                    "Sharp pain in the back"
                  ]}
                  regression={[
                    "Perform with smaller range of motion if needed"
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
