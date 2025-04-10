import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function SupineRibExpansionwithBreath() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <div className="h-24 flex flex-col justify-center">
            <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 1</h1>
            <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Supine Rib Expansion with Breath</h2>
          </div>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day5/drill5" 
            currentDay="/week2/day1" 
            nextDrill="/week2/day1/drill2" 
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
                    "Place hands gently on your lower ribs."
                  ]}
                  instructions={[
                    "Inhale deeply into the lower ribs, feeling lateral expansion.",
                    "Exhale softly, allowing ribs to fall naturally.",
                    "Maintain slow, controlled breaths throughout."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5 – 8 breath cycles per set",
                    "Breath: Inhale 3 – 4 seconds, exhale 4 – 6 seconds",
                    "Rest: Between sets or as needed"
                  ]}
                  whatToFeel={[
                    "Expansion of ribs during inhale.",
                    "Relaxed breath pattern with minimal chest rise."
                  ]}
                  whatToAvoid={[
                    "Breathing only into the upper chest.",
                    "Collapsing the ribcage or losing control."
                  ]}
                  redFlags={[
                    "Dizziness or discomfort with breath control."
                  ]}
                  regression={[
                    "Use a pillow under your head for neck support."
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
