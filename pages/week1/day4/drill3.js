import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function SeatedThoracicExtension() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 3: Seated Thoracic Extension</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day4/drill2" 
            currentDay="/week1/day4" 
            nextDrill="/week1/day4/drill4" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit on a firm chair, feet flat, hands behind your head."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and gently extend through the upper back.",
                    "Maintain contact between lower ribs and pelvis.",
                    "Return to neutral and repeat."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow, controlled reps",
                    "Breath: Exhale during extension, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Opening through the chest and upper back",
                    "Engagement of the upper back muscles"
                  ]}
                  whatToAvoid={[
                    "Arching lower back or flaring ribs"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the spine"
                  ]}
                  regression={[
                    "Perform with arms crossed if mobility is limited."
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
