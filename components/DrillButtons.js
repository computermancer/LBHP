import { useRouter } from 'next/router';
import Link from 'next/link';

export default function DrillButtons({ weekPath, dayPath }) {
  const router = useRouter();

  return (
    <div className="bg-zinc-900 z-[60]">
      <div className="max-w-[500px] mx-auto">
        <div className="flex gap-0.5 text-gray-200 py-4 w-full justify-center">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((drill) => (
            <Link
              key={drill}
              href={`${weekPath}${dayPath}/drill${drill}`}
              className={`flex-1 bg-zinc-800 px-2 py-3 rounded text-base font-semibold text-center whitespace-nowrap ${
                router.pathname === `${weekPath}${dayPath}/drill${drill}` ? 'bg-zinc-700' : 'hover:bg-zinc-700'
              }`}
            >
              <span className="truncate">Drill {drill}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
