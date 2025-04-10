import Link from 'next/link';

export default function Nav() {
  return (
    <div className="sticky top-0 z-50 bg-zinc-900">
      <div className="max-w-[500px] mx-auto">
        <nav className="flex gap-0.5 text-gray-200 py-2 w-full justify-center">
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/home">Home</Link>
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/week1">W 1</Link>
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/week2">W 2</Link>
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/week3">W 3</Link>
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/week4">W 4</Link>
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/week5">W 5</Link>
        </nav>
        <div className="h-8"></div>
      </div>
    </div>
  );
}