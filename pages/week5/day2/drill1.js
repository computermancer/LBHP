import DrillNavBar from '../../../components/DrillNavBar';
import VideoCard from '../../../components/VideoCard';
import Link from 'next/link';

export default function Drill1StaggeredStanceSquatswithRibStability() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-4 pb-2">
        <div className="max-w-[500px] mx-auto">
          <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3 mb-3">
            <h1 className="text-orange-300 text-4xl font-bold mb-1">Week 5 - Day 2</h1>
            <h2 className="text-orange-300 text-2xl font-bold mb-0 leading-relaxed" style={{ lineHeight: '1.5em', height: '3em' }}>Drill 1: Staggered Stance Squats with Rib Stability</h2>
          </div>
          <div className="h-1"></div>
          <DrillNavBar 
            prevDrill="/week5/day1/drill5" 
            currentDay="/week5/day2" 
            nextDrill="/week5/day2/drill2" 
          />
          <div className="h-6"></div>
          <div className="space-y-6">
            <VideoCard
              videoId="wn0IyvGBeUI"
              videoStart={2248}
            />

            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Setup</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5 mb-4">
                <li>Stand with feet staggered, one foot slightly in front of the other.</li>
                <li>Arms extended forward or hands on hips.</li>
              </ul>
              
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Instructions</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                <li>Inhale to prepare.</li>
                <li>Exhale and lower into a squat, keeping ribs aligned with pelvis.</li>
                <li>Inhale and return to standing.</li>
                <li>Switch sides and repeat.</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <div className="space-y-2">
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Sets:</span> 2 – 3
                </div>
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Reps:</span> 8 – 10 per side
                </div>
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Breath:</span> Exhale to lower, inhale to rise
                </div>
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Rest:</span> 30 – 45 seconds between sets
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <h4 className="text-orange-300 text-xl font-semibold mb-2">What to Feel</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5 mb-4">
                <li>Glute, quad, and core engagement</li>
                <li>Stability in the pelvis and ribcage</li>
              </ul>
              
              <h4 className="text-orange-300 text-xl font-semibold mb-2">What to Avoid</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5 mb-4">
                <li>Knees collapsing inward or arching the back</li>
              </ul>
              
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Red Flags</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                <li>Sharp pain or discomfort in knees</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Regression</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                <li>Perform a smaller range of motion.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
