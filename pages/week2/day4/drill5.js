import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Week2Day4Drill5() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 5: Seated Breath with Pelvic Awareness</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day4/drill4" 
            currentDay="/week2/day4" 
            nextDrill="/week2/day5/drill1" 
            disableNext={true}
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  title="Drill 5: Seated Breath with Pelvic Awareness"
                  week={2}
                  day={4}
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit upright on a firm chair, feet flat.",
                    "Hands gently on lower ribs or pelvis."
                  ]}
                  instructions={[
                    "Inhale deeply into the belly and ribs.",
                    "Exhale while maintaining pelvic and rib control.",
                    "Repeat with smooth, controlled breathing."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5–8 breath cycles per set",
                    "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
                    "Rest: Between sets or as needed"
                  ]}
                  whatToFeel={[
                    "Connection between breath, pelvis, and ribcage."
                  ]}
                  whatToAvoid={[
                    "Overarching or collapsing posture."
                  ]}
                  redFlags={[
                    "Difficulty maintaining control."
                  ]}
                  regression={[
                    "Use a pillow for lumbar support."
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
