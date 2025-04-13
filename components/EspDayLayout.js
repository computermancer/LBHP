import EspDayNavBar from './EspDayNavBar';
import Link from 'next/link';

export default function EspDayLayout({
  children,
  title,
  subtitle,
  prevDay,
  currentWeek,
  nextDay,
  disableNext = false
}) {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-4 pb-2">
        <div className="max-w-[500px] mx-auto">
          <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3 mb-3">
            <h1 className="text-orange-300 text-4xl font-bold mb-1">{title}</h1>
            <h2 className="text-orange-300 text-2xl font-bold mb-0 leading-relaxed" style={{ lineHeight: '1.5em', height: '3em' }}>{subtitle}</h2>
          </div>
          <div className="h-1"></div>
          <EspDayNavBar 
            prevDay={prevDay} 
            currentWeek={currentWeek} 
            nextDay={nextDay}
            disableNext={disableNext}
          />
          <div className="h-6"></div>
          {children}
        </div>
      </main>
    </div>
  );
}
