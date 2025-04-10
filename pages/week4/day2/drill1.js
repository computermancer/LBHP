import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill1SeatedThoracicFlexionandExtension() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Seated Thoracic Flexion and Extension</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day1/drill5" 
            currentDay="/week4/day2" 
            nextDrill="/week4/day2/drill2" 
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
                    "Hands resting on thighs or crossed over chest."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and gently flex the thoracic spine forward.",
                    "Inhale and extend the spine back to neutral."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps",
                    "Breath: Exhale to flex, inhale to extend",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Smooth thoracic motion",
                    "Core engagement during flexion and extension"
                  ]}
                  whatToAvoid={[
                    "Overarching or collapsing the spine"
                  ]}
                  redFlags={[
                    "Sharp pain or discomfort"
                  ]}
                  regression={[
                    "Perform smaller movements for better control."
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
