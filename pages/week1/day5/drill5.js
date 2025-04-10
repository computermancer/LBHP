import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function SeatedBreathandPelvicAwareness() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 5</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Seated Breath and Pelvic Awareness</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day5/drill4" 
            currentDay="/week1/day5" 
            nextDrill="/week2/day1/drill1" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit upright in a firm chair, feet flat on the floor.",
                    "Hands gently resting on your belly and lower ribs."
                  ]}
                  instructions={[
                    "Inhale deeply into your belly and ribs.",
                    "Exhale fully while maintaining a neutral pelvis.",
                    "Maintain awareness of rib and pelvis position throughout."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5–8 breath cycles per set",
                    "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
                    "Rest: Between sets or as needed"
                  ]}
                  whatToFeel={[
                    "Awareness of rib expansion and pelvic control",
                    "Smooth, steady breath with minimal upper chest involvement"
                  ]}
                  whatToAvoid={[
                    "Overextending or collapsing posture",
                    "Shallow chest breathing"
                  ]}
                  redFlags={[
                    "Difficulty maintaining breath control"
                  ]}
                  regression={[
                    "Place a pillow behind the lower back for added support."
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
