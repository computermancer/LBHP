import { useRouter } from 'next/router';

export default function DayNavigation({ prevDay, nextDay }) {
  const router = useRouter();

  return (
    <div className="flex justify-between mb-6">
      {prevDay && (
        <button
          onClick={() => router.push(prevDay)}
          className="bg-gray-700 hover:bg-gray-600 text-orange-300 font-semibold py-2 px-4 rounded flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Previous Day
        </button>
      )}
      {nextDay && (
        <button
          onClick={() => router.push(nextDay)}
          className="bg-gray-700 hover:bg-gray-600 text-orange-300 font-semibold py-2 px-4 rounded flex items-center gap-2"
        >
          Next Day
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
} 