import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill3SeatedThoracicFlexionExtension() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Seated Thoracic Flexion/Extension</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day4/drill2" 
            currentDay="/week2/day4" 
            nextDrill="/week2/day4/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  title="Drill 3: Seated Thoracic Flexion/Extension"
                  backButtonText="Week 2 - Day 4"
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit upright on a firm chair, feet flat, hands on your chest."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and gently flex forward through the upper back.",
                    "Inhale and extend through the thoracic spine, lifting the chest.",
                    "Move smoothly between positions."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps",
                    "Breath: Exhale during flexion, inhale to extend",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Controlled flexion and extension through the thoracic spine."
                  ]}
                  whatToAvoid={[
                    "Overarching or collapsing posture."
                  ]}
                  redFlags={[
                    "Pain or discomfort in the spine."
                  ]}
                  regression={[
                    "Perform with arms crossed for less strain."
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
