import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2ChairPushupswithPelvicStability() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 5 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Chair Pushups with Pelvic Stability</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week5/day4/drill1" 
            currentDay="/week5/day4" 
            nextDrill="/week5/day4/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Place hands on the edge of a sturdy chair, feet extended behind in plank position.",
                    "Maintain a straight line from head to heels."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and lower chest toward the chair, keeping ribs aligned.",
                    "Inhale and push back to start."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 reps",
                    "Breath: Exhale to push, inhale to lower",
                    "Rest: 30–45 seconds between sets"
                  ]}
                  whatToFeel={[
                    "Chest, shoulders, and core engaged",
                    "Controlled movement with rib stability"
                  ]}
                  whatToAvoid={[
                    "Allowing hips to drop or arching back"
                  ]}
                  redFlags={[
                    "Pain or discomfort in shoulders"
                  ]}
                  regression={[
                    "Perform pushups against a higher surface."
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
