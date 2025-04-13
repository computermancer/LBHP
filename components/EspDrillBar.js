import EspDrillNavBar from './EspDrillNavBar';
import VideoCard from './VideoCard';
import Link from 'next/link';

export default function EspDrillBar({ 
  title,
  backButtonText,
  videoId, 
  videoStart,
  setup,
  instructions,
  setsReps,
  whatToFeel,
  whatToAvoid,
  redFlags,
  regression
}) {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-4 pb-2">
        <div className="max-w-[500px] mx-auto">
          <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3 mb-3">
            <h1 className="text-orange-300 text-4xl font-bold mb-1">{backButtonText}</h1>
            <h2 className="text-orange-300 text-2xl font-bold mb-0 leading-relaxed" style={{ lineHeight: '1.5em', height: '3em' }}>{title}</h2>
          </div>
          <div className="h-1"></div>
          <EspDrillNavBar 
            prevDrill="/espanol/semana1/dia1" 
            currentDay="/espanol/semana1/dia1" 
            nextDrill="/espanol/semana1/dia1/ejercicio2" 
            disablePrevious={true}
          />
          <div className="h-6"></div>
          <div className="space-y-6">
            <VideoCard
              videoId={videoId}
              videoStart={videoStart}
            />

            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Preparación</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5 mb-4">
                {setup.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Instrucciones</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                {instructions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <div className="space-y-2">
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Series:</span> {setsReps[0]}
                </div>
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Repeticiones:</span> {setsReps[1]}
                </div>
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Respiración:</span> {setsReps[2]}
                </div>
                <div className="text-lg text-white leading-relaxed">
                  <span className="text-orange-300 font-semibold text-xl">Descanso:</span> {setsReps[3]}
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Qué Debes Sentir</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5 mb-4">
                {whatToFeel.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Qué Debes Evitar</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5 mb-4">
                {whatToAvoid.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Señales de Alerta</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                {redFlags.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <h4 className="text-orange-300 text-xl font-semibold mb-2">Regresión</h4>
              <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                {regression.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
