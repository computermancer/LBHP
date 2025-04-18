import { useRouter } from 'next/router';
import Link from 'next/link';

export default function DrillNavBar({ prevDrill, currentDay, nextDrill, disablePrevious = false, disableNext = false, disableDay = false }) {
  const router = useRouter();

  return (
    <div>
      <div className="max-w-[500px] mx-auto">
        <div className="flex gap-0.5 text-gray-200 py-2 w-full justify-center">
          <button
            onClick={() => prevDrill && router.push(prevDrill)}
            className={`flex-1 bg-zinc-800 px-2 py-2 rounded text-base font-semibold text-center whitespace-nowrap flex items-center justify-center border border-zinc-700 ${!disablePrevious ? 'hover:bg-zinc-700' : 'opacity-50 cursor-not-allowed'}`}
            disabled={disablePrevious}
          >
            <svg className="w-4 h-4 mr-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="truncate">Drill</span>
          </button>
          
          <button
            onClick={() => currentDay && router.push(currentDay)}
            className={`flex-1 bg-zinc-800 px-2 py-2 rounded text-base font-semibold text-center whitespace-nowrap border border-zinc-700 ${!disableDay ? 'hover:bg-zinc-700' : 'opacity-50 cursor-not-allowed'}`}
            disabled={disableDay}
          >
            <span className="truncate">Day</span>
          </button>
          
          <button
            onClick={() => nextDrill && router.push(nextDrill)}
            className={`flex-1 bg-zinc-800 px-2 py-2 rounded text-base font-semibold text-center whitespace-nowrap flex items-center justify-center border border-zinc-700 ${!disableNext ? 'hover:bg-zinc-700' : 'opacity-50 cursor-not-allowed'}`}
            disabled={disableNext}
          >
            <span className="truncate">Drill</span>
            <svg className="w-4 h-4 ml-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}