import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function RelaxedSpineRocking() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 4: Relaxed Spine Rocking</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day3/drill3" 
            currentDay="/week1/day3" 
            nextDrill="/week1/day3/drill5" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Begin in a quadruped position, hands under shoulders, knees under hips."
                  ]}
                  instructions={[
                    "Gently rock back and forth, allowing the spine to move naturally.",
                    "Focus on maintaining a smooth, rhythmic motion.",
                    "Breathe steadily throughout the movement."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–12 slow rocks",
                    "Breath: Inhale as you rock forward, exhale as you rock back",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Gentle stretch through hips and lower back",
                    "Relaxed and fluid motion"
                  ]}
                  whatToAvoid={[
                    "Tensing the shoulders or bracing excessively"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the low back"
                  ]}
                  regression={[
                    "Use a folded towel under knees for added comfort."
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
