import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill1CrocodileBreathing() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Crocodile Breathing with Rib Expansion</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day4/drill5" 
            currentDay="/week2/day5" 
            nextDrill="/week2/day5/drill2" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Lie face down with forehead resting on your hands.",
                    "Legs extended, toes pointing slightly outward."
                  ]}
                  instructions={[
                    "Inhale deeply, feeling your belly press into the floor.",
                    "Exhale softly, allowing ribs to relax and fall.",
                    "Focus on lateral rib expansion during inhale."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5–8 breath cycles per set",
                    "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
                    "Rest: Between sets or as needed"
                  ]}
                  whatToFeel={[
                    "Expansion of the lower ribs and belly."
                  ]}
                  whatToAvoid={[
                    "Shallow chest breathing or tension."
                  ]}
                  redFlags={[
                    "Dizziness or discomfort."
                  ]}
                  regression={[
                    "Place a pillow under the belly for support."
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
