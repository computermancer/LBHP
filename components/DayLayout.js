import DayNavBar from './DayNavBar';
import Link from 'next/link';

export default function DayLayout({
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
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">{title}</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">{subtitle}</h2>
          <div className="h-2"></div>
          <DayNavBar 
            prevDay={prevDay} 
            currentWeek={currentWeek} 
            nextDay={nextDay}
            disableNext={disableNext}
          />
          <div className="h-8"></div>
          {children}
        </div>
      </main>
    </div>
  );
}
