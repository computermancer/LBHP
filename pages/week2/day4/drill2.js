import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function Drill2SeatedPosteriorPelvicRocking() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 2 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Seated Posterior Pelvic Rocking</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week2/day4/drill1" 
            currentDay="/week2/day4" 
            nextDrill="/week2/day4/drill3" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Sit upright in a firm chair, feet flat, hands on thighs."
                  ]}
                  instructions={[
                    "Inhale to prepare.",
                    "Exhale and rock pelvis backward (posterior tilt), then forward (anterior tilt).",
                    "Move smoothly and maintain control."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–10 slow reps",
                    "Breath: Exhale during rocking, inhale to return",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Smooth motion through the pelvis and lumbar spine."
                  ]}
                  whatToAvoid={[
                    "Jerky or rushed movements."
                  ]}
                  redFlags={[
                    "Pain or discomfort in the lower back."
                  ]}
                  regression={[
                    "Place hands on hips for additional feedback."
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
