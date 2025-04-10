import { useRouter } from 'next/router';
import Link from 'next/link';

export default function DrillNavBar({ prevDrill, currentDay, nextDrill }) {
  const router = useRouter();

  return (
    <div className="fixed top-16 left-0 right-0 bg-zinc-900 z-[60]">
      <div className="px-8">
        <div className="flex gap-0.5 text-gray-200 py-2 max-w-[500px] mx-auto">
          <button
            onClick={() => prevDrill && router.push(prevDrill)}
            className={`flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold text-center whitespace-nowrap flex items-center justify-center ${prevDrill ? 'hover:bg-zinc-700' : 'opacity-50 cursor-not-allowed'}`}
            disabled={!prevDrill}
          >
            <svg className="w-4 h-4 mr-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="truncate">Previous Drill</span>
          </button>
          
          <button
            onClick={() => currentDay && router.push(currentDay)}
            className={`flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold text-center whitespace-nowrap ${currentDay ? 'hover:bg-zinc-700' : 'opacity-50 cursor-not-allowed'}`}
            disabled={!currentDay}
          >
            <span className="truncate">Current Day</span>
          </button>
          
          <button
            onClick={() => nextDrill && router.push(nextDrill)}
            className={`flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold text-center whitespace-nowrap flex items-center justify-center ${nextDrill ? 'hover:bg-zinc-700' : 'opacity-50 cursor-not-allowed'}`}
            disabled={!nextDrill}
          >
            <span className="truncate">Next Drill</span>
            <svg className="w-4 h-4 ml-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 