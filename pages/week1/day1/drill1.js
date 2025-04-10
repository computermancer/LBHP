import DrillNavBar from '../../../components/DrillNavBar';
import DrillTemplate from '../../../components/DrillTemplate';
import Link from 'next/link';

export default function PosteriorPelvicTiltonWall() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week 1 - Day 1</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">Drill 1: Posterior Pelvic Tilt on Wall</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            currentDay="/week1/day1" 
            nextDrill="/week1/day1/drill2" 
          />
          <div className="h-8"></div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <DrillTemplate
                  videoId="wn0IyvGBeUI"
                  videoStart={2248}
                  setup={[
                    "Stand with your back against a wall, feet about 6–12 inches away.",
                    "Knees slightly bent, arms resting by your sides."
                  ]}
                  instructions={[
                    "Gently tilt your pelvis backward so your low back flattens into the wall.",
                    "Keep glutes and abs soft; allow the motion to come from pelvic rotation.",
                    "Hold for 3–5 seconds, then release back to neutral.",
                    "Move slowly and with control."
                  ]}
                  setsReps={[
                    "Sets: 2",
                    "Reps: 5 – 8 per set",
                    "Breath: Inhale to prepare, exhale to tilt",
                    "Rest: As needed"
                  ]}
                  whatToFeel={[
                    "Pelvic rotation without glute or abdominal contraction",
                    "Wall contact with low back"
                  ]}
                  whatToAvoid={[
                    "Arching the low back",
                    "Tensing the glutes or abs"
                  ]}
                  redFlags={[
                    "Sharp pain in the low back"
                  ]}
                  regression={[
                    "Reduce range of motion if control is difficult."
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
