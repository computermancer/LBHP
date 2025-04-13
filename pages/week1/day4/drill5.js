import DrillNavBar from '../../../components/DrillNavBar';
import VideoCard from '../../../components/VideoCard';
import Link from 'next/link';

export default function SeatedBreathWithRibControl() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-4 pb-2">
        <div className="max-w-[500px] mx-auto">
          <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3 mb-3">
            <h1 className="text-orange-300 text-4xl font-bold mb-1">Week 1 - Day 4</h1>
            <h2 className="text-orange-300 text-2xl font-bold mb-0 leading-relaxed" style={{ lineHeight: '1.5em', height: '3em' }}>Drill 5: Seated Breath with Rib Control</h2>
          </div>
          <div className="h-1"></div>
          <DrillNavBar 
            prevDrill="/week1/day4/drill4" 
            currentDay="/week1/day4" 
            nextDrill="/week1/day5/drill1" 
            disableNext={true}
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
                <li>Sit upright on a firm chair, feet flat.</li>
                <li>Hands gently resting on your ribs.</li>
              </ul>
              
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Instructions</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                <li>Inhale into the lower ribs and belly.</li>
                <li>Exhale fully, feeling the ribs drop back.</li>
                <li>Maintain a neutral pelvis throughout.</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <div className="space-y-2">
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Sets:</span> 2
                </div>
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Reps:</span> 5 – 8 breath cycles per set
                </div>
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Breath:</span> Inhale 3–4 seconds, exhale 4–6 seconds
                </div>
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Rest:</span> Between sets or as needed
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <h4 className="text-orange-300 text-xl font-semibold mb-2">What to Feel</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5 mb-4">
                <li>Expansion and contraction of the lower ribs</li>
                <li>Smooth, relaxed breathing</li>
              </ul>
              
              <h4 className="text-orange-300 text-xl font-semibold mb-2">What to Avoid</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5 mb-4">
                <li>Overextending or collapsing posture</li>
              </ul>
              
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Red Flags</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                <li>Difficulty maintaining control</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Regression</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                <li>Place a pillow behind the lower back for support.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
