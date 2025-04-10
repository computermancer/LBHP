import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function SeatedBreathWithRibControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Seated Breath with Rib Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day4/drill4" 
            currentDay="/week1/day4" 
            nextDrill="/week1/day5/drill1" 
            disableNext={true}
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
                    "Hands gently resting on your ribs."
                  ]}
                  instructions={[
                    "Inhale into the lower ribs and belly.",
                    "Exhale fully, feeling the ribs drop back.",
                    "Maintain a neutral pelvis throughout."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5–8 breath cycles per set",
                    "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
                    "Rest: Between sets or as needed"
                  ]}
                  whatToFeel={[
                    "Expansion and contraction of the lower ribs",
                    "Smooth, relaxed breathing"
                  ]}
                  whatToAvoid={[
                    "Overextending or collapsing posture"
                  ]}
                  redFlags={[
                    "Difficulty maintaining control"
                  ]}
                  regression={[
                    "Place a pillow behind the lower back for support."
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
