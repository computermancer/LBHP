import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2SeatedPosteriorPelvicRocking() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 4 - Day 3</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Seated Posterior Pelvic Rocking</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week4/day3/drill1" 
            currentDay="/week4/day3" 
            nextDrill="/week4/day3/drill3" 
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
                    "Hands resting on thighs."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and gently rock your pelvis backward, flattening the low back.",
                    "Inhale and return to neutral."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps",
                    "Breath: Exhale to rock, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Smooth pelvic motion",
                    "Engagement of core during movement"
                  ]}
                  whatToAvoid={[
                    "Overarching or collapsing the spine"
                  ]}
                  redFlags={[
                    "Sharp pain or discomfort"
                  ]}
                  regression={[
                    "Limit the range of motion for better control."
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
