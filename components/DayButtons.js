import { useRouter } from 'next/router';
import Link from 'next/link';

export default function DayButtons({ weekPath }) {
  const router = useRouter();

  return (
    <div className="bg-zinc-900 z-[60]">
      <div className="max-w-[500px] mx-auto">
        <div className="flex gap-0.5 text-gray-200 py-2 w-full justify-center">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((day) => (
            <Link
              key={day}
              href={`${weekPath}/day${day}`}
              className={`flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold text-center whitespace-nowrap ${
                router.pathname === `${weekPath}/day${day}` ? 'bg-zinc-700' : 'hover:bg-zinc-700'
              }`}
            >
              <span className="truncate">Day {day}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
