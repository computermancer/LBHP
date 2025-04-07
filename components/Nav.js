import Link from 'next/link';
export default function Nav() {
  return (
    <div className="sticky top-0 z-50 bg-zinc-900 shadow-md">
      <div className="px-8">
        <nav className="flex gap-0.5 text-gray-200 py-2 max-w-[500px] mx-auto">
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-xl font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/home">Home</Link>
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-xl font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/week1">Week 1</Link>
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-xl font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/week2">Week 2</Link>
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-xl font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/week3">Week 3</Link>
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-xl font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/week4">Week 4</Link>
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-xl font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/week5">Week 5</Link>
        </nav>
      </div>
    </div>
  );
}