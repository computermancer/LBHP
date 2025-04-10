import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2CatCowRotational() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Cat-Cow with Rotational Focus</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day5/drill1" 
            currentDay="/week2/day5" 
            nextDrill="/week2/day5/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Begin in a quadruped position, wrists under shoulders, knees under hips."
                  ]}
                  instructions={[
                    "Inhale and arch your back, lifting the chest (Cow).",
                    "Exhale and round your spine, tucking pelvis and chin (Cat).",
                    "Add gentle thoracic rotation by reaching one arm toward the ceiling on each side."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps",
                    "Breath: Inhale to extend, exhale to flex",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Fluid motion through the spine and increased rotation."
                  ]}
                  whatToAvoid={[
                    "Overarching or collapsing posture."
                  ]}
                  redFlags={[
                    "Pain or discomfort in the spine."
                  ]}
                  regression={[
                    "Limit rotation if control is difficult."
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
