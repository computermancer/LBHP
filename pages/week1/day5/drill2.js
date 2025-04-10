import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function CatCowwithBreathFocus() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Cat-Cow with Breath Focus</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day5/drill1" 
            currentDay="/week1/day5" 
            nextDrill="/week1/day5/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Begin on hands and knees, wrists under shoulders, knees under hips."
                  ]}
                  instructions={[
                    "Inhale and arch your back, lifting your chest and tailbone (Cow).",
                    "Exhale and round your spine, tucking your pelvis and chin (Cat).",
                    "Move smoothly between positions with control."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps",
                    "Breath: Inhale to extend, exhale to flex",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Smooth transition between flexion and extension",
                    "Coordinated breath and spinal motion"
                  ]}
                  whatToAvoid={[
                    "Rushing through the movement",
                    "Overarching or collapsing posture"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the spine"
                  ]}
                  regression={[
                    "Perform smaller movements if mobility is limited."
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
