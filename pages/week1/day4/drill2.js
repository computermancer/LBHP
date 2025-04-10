import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function SeatedPosteriorPelvicRocking() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 4</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 2: Seated Posterior Pelvic Rocking</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill="/week1/day4/drill1" 
            currentDay="/week1/day4" 
            nextDrill="/week1/day4/drill3" 
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
                    "Hands resting gently on your thighs."
                  ]}
                  instructions={[
                    "Tilt pelvis backward (flattening low back) and then forward (arching low back).",
                    "Move slowly and smoothly between positions.",
                    "Use breath to guide the rhythm."
                  ]}
                  setsReps={[
                    "Sets: 2–3",
                    "Reps: 8–12 controlled reps",
                    "Breath: Inhale forward, exhale backward",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Gentle rocking motion through pelvis",
                    "Coordination of breath with movement"
                  ]}
                  whatToAvoid={[
                    "Excessive arching or collapsing posture"
                  ]}
                  redFlags={[
                    "Pain or discomfort in the low back"
                  ]}
                  regression={[
                    "Use hands on hips to increase body awareness."
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
