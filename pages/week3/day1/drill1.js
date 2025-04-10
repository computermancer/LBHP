import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill1HooklyingBreathwithPelvicAwareness() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 3 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Hooklying Breath with Pelvic Awareness</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week3/day1" 
            currentDay="/week3/day1" 
            nextDrill="/week3/day1/drill2" 
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
                    "Hands resting on the lower abdomen and ribcage."
                  ]}
                  instructions={[
                    "Inhale and feel your belly expand gently.",
                    "Exhale fully while maintaining a neutral pelvis.",
                    "Focus on awareness of pelvic movement with each breath."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5–8 breath cycles per set",
                    "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Belly and ribs expanding with breath",
                    "Minimal pelvic movement with controlled breathing"
                  ]}
                  whatToAvoid={[
                    "Over-tilting the pelvis or arching the back"
                  ]}
                  redFlags={[
                    "Dizziness or discomfort during breathing"
                  ]}
                  regression={[
                    "Use a pillow under knees to maintain pelvic neutrality."
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
