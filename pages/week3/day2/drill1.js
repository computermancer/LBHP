import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill1SeatedRibExpansionwithBreathControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 3 - Day 2</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Seated Rib Expansion with Breath Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week3/day1/drill5" 
            currentDay="/week3/day2" 
            nextDrill="/week3/day2/drill2" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit on a chair with feet flat on the floor.",
                    "Place hands on your lower ribs for feedback."
                  ]}
                  instructions={[
                    "Inhale deeply through your nose, focusing on expanding your ribs.",
                    "Exhale slowly, allowing ribs to fall naturally.",
                    "Maintain controlled breathing throughout."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5–8 breath cycles per set",
                    "Breath: Inhale 3–4 seconds, exhale 4–6 seconds",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Expansion of the ribs during inhale",
                    "Relaxed, controlled breathing"
                  ]}
                  whatToAvoid={[
                    "Chest dominance or shallow breathing"
                  ]}
                  redFlags={[
                    "Dizziness or discomfort during breathing"
                  ]}
                  regression={[
                    "Use a back support if needed"
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
