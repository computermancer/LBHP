import MainEspNavbar from './MainEspNavbar';
import EspDrillNavBar from './EspDrillNavBar';
import { useRouter } from 'next/router';
import { useState } from 'react';
import VideoCard from './VideoCard';
import Link from 'next/link';

export default function EspDrillBarTemplate({
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
  regression,
  children,
  prevDrill,
  currentDay,
  nextDrill,
  disablePrevious = false,
  disableNext = false
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MainEspNavbar />
      <main className="px-8 text-white font-sans pt-4 pb-2">
        <div className="max-w-[500px] mx-auto">
          <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3 mb-3">
            <h1 className="text-orange-300 text-4xl font-bold mb-1">{backButtonText}</h1>
            <h2 className="text-orange-300 text-2xl font-bold mb-0 leading-relaxed" style={{ lineHeight: '1.5em', height: '3em' }}>{title}</h2>
          </div>
          <div className="h-1"></div>
          {children}
          <div className="h-6"></div>
          <div className="space-y-6">
            <VideoCard
              videoId={videoId}
              videoStart={videoStart}
            />

            {/* Setup and Instructions Section */}
            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <div className="mb-4">
                <h4 className="text-orange-300 text-xl font-semibold mb-2">Configuración</h4>
                <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                  {setup.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-orange-300 text-xl font-semibold mb-2">Instrucciones</h4>
                <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                  {instructions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sets and Reps Section */}
            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <div className="space-y-2">
                {setsReps.map((item, index) => {
                  const label = item.split(':')[0];
                  const value = item.split(':')[1];
                  return (
                    <div key={index} className="text-lg text-white leading-relaxed">
                      <span className="font-bold text-orange-300">{label}: </span>
                      {value}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What to Feel, What to Avoid, Red Flags Section */}
            <div className="bg-zinc-900 border border-zinc-700 p-2 pb-5 rounded-lg mb-4">
              <div className="mb-4">
                <h4 className="text-orange-300 text-xl font-semibold mb-2">Qué sentir</h4>
                <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                  {whatToFeel.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="text-orange-300 text-xl font-semibold mb-2">Lo que hay que evitar</h4>
                <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                  {whatToAvoid.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-orange-300 text-xl font-semibold mb-2">Banderas rojas</h4>
                <ul className="text-lg text-white leading-relaxed list-disc pl-5">
                  {redFlags.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Regression Section */}
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
      <EspDrillNavBar 
        prevDrill={prevDrill}
        currentDay={currentDay}
        nextDrill={nextDrill}
        disablePrevious={disablePrevious}
        disableNext={disableNext}
      />
    </>
  );
}
