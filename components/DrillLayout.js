import Nav from './Nav';
import DrillNavBar from './DrillNavBar';

export default function DrillLayout({
  children,
  week,
  day,
  title,
  prevDrill,
  currentDay,
  nextDrill
}) {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Nav />
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">Week {week} - Day {day}</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">{title}</h2>
          <div className="h-2"></div>
          <DrillNavBar 
            prevDrill={prevDrill} 
            currentDay={currentDay} 
            nextDrill={nextDrill} 
          />
          <div className="h-8"></div>
          {children}
        </div>
      </main>
    </div>
  );
}
