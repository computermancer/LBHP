import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill1CatCowwithRibExpansion() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Cat-Cow with Rib Expansion</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day2/drill5" 
            currentDay="/week4/day3" 
            nextDrill="/week4/day3/drill2" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Begin on hands and knees, wrists under shoulders, knees under hips.",
                    "Maintain a neutral spine."
                  ]}
                  instructions={[
                    "Inhale and arch your back, lifting your chest and tailbone (Cow).",
                    "Exhale and round your spine, tucking pelvis and chin (Cat).",
                    "Coordinate movement with breath."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps",
                    "Breath: Inhale to extend, exhale to flex",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Smooth spinal flexion and extension",
                    "Controlled pelvic and ribcage movement"
                  ]}
                  whatToAvoid={[
                    "Overarching or collapsing posture"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the spine"
                  ]}
                  regression={[
                    "Perform smaller movements if needed."
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
