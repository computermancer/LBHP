import DrillNavBar from '../../../components/DrillNavBar';
import VideoCard from '../../../components/VideoCard';
import Link from 'next/link';

export default function Drill2SeatedHipShiftswithBreathAwareness() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-4 pb-2">
        <div className="max-w-[500px] mx-auto">
          <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3 mb-3">
            <h1 className="text-orange-300 text-4xl font-bold mb-1">Week 4 - Day 1</h1>
            <h2 className="text-orange-300 text-2xl font-bold mb-0 leading-relaxed" style={{ lineHeight: '1.5em', height: '3em' }}>Drill 2: Seated Hip Shifts with Breath Awareness</h2>
          </div>
          <div className="h-1"></div>
          <DrillNavBar 
            prevDrill="/week4/day1/drill1" 
            currentDay="/week4/day1" 
            nextDrill="/week4/day1/drill3" 
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
                <li>Sit upright in a firm chair, feet flat on the floor.</li>
                <li>Hands resting on your thighs.</li>
              </ul>
              
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Instructions</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                <li>Inhale to prepare.</li>
                <li>Exhale and gently shift one hip forward while maintaining rib stability.</li>
                <li>Return to neutral and alternate sides.</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <div className="space-y-2">
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Sets:</span> 2 – 3
                </div>
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Reps:</span> 8 – 10 slow reps per side
                </div>
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Breath:</span> Exhale to shift, inhale to return
                </div>
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Rest:</span> As needed
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <h4 className="text-orange-300 text-xl font-semibold mb-2">What to Feel</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5 mb-4">
                <li>Smooth, controlled hip shifting</li>
                <li>Ribcage remaining neutral and stable</li>
              </ul>
              
              <h4 className="text-orange-300 text-xl font-semibold mb-2">What to Avoid</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5 mb-4">
                <li>Leaning or twisting the torso</li>
              </ul>
              
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Red Flags</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                <li>Pain or discomfort in the hips or lower back</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Regression</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                <li>Perform with smaller shifts for better control.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
