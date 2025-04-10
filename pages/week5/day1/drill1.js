import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill1BodyweightSquatswithRibControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Bodyweight Squats with Rib Control</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day5/drill5" 
            currentDay="/week5/day1" 
            nextDrill="/week5/day1/drill2" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand with feet shoulder-width apart, toes slightly pointed outward.",
                    "Arms extended forward or hands clasped in front of chest."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and lower your hips down and back, keeping the ribs aligned over pelvis.",
                    "Inhale to return to standing."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 10–12 slow, controlled reps",
                    "Breath: Exhale to lower, inhale to rise",
                    "Rest: 30–45 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Engagement of glutes, quads, and core",
                    "Rib control and pelvis stability throughout"
                  ]}
                  whatToAvoid={[
                    "Collapsing the chest or overarching the lower back"
                  ]}
                  redFlags={[
                    "Knee or lower back pain"
                  ]}
                  regression={[
                    "Perform squats to a chair or elevated surface."
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
