import { useRouter } from 'next/router';
import Link from 'next/link';

export default function EspDayNavBar({ prevDay, currentWeek, nextDay, disableNext }) {
  const router = useRouter();
  
  // Extract current week number from the currentWeek path
  const currentWeekNum = parseInt(currentWeek.split('/').pop().replace('semana', ''));
  
  // Calculate next week's path
  const nextWeekPath = `/espanol/semana${currentWeekNum + 1}/dia1`;
  // Calculate previous week's last day path
  const prevWeekPath = `/espanol/semana${currentWeekNum - 1}/dia5`;
  
  return (
    <div className="bg-zinc-900 z-[60]">
      <div className="max-w-[500px] mx-auto">
        <div className="flex gap-0.5 text-gray-200 py-2 w-full justify-center">
          <button
            onClick={() => prevDay && router.push(prevDay)}
            className={`flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold text-center whitespace-nowrap flex items-center justify-center border border-zinc-700 ${prevDay ? 'hover:bg-zinc-700' : 'opacity-50 cursor-not-allowed'}`}
            disabled={!prevDay}
          >
            <svg className="w-4 h-4 mr-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="truncate">Día Anterior</span>
          </button>
          
          <Link
            href={currentWeek}
            className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center whitespace-nowrap border border-zinc-700"
          >
            <span className="truncate">Semana Actual</span>
          </Link>
          
          <button
            onClick={() => nextDay && router.push(nextDay)}
            className={`flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold text-center whitespace-nowrap flex items-center justify-center border border-zinc-700 ${nextDay && !disableNext ? 'hover:bg-zinc-700' : 'opacity-50 cursor-not-allowed'}`}
            disabled={!nextDay || disableNext}
          >
            <span className="truncate">Siguiente Día</span>
            <svg className="w-4 h-4 ml-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
