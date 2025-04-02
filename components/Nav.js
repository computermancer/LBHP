import Link from 'next/link';
export default function Nav() {
  return (
    <div className="flex justify-start bg-zinc-900 px-8">
      <nav className="flex gap-1 text-gray-200 px-2 py-2 max-w-[500px] w-full">
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center" href="/">Home</Link>
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center" href="/week1">Week 1</Link>
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center" href="/week2">Week 2</Link>
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center" href="/week3">Week 3</Link>
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center" href="/week4">Week 4</Link>
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center" href="/week5">Week 5</Link>
      </nav>
    </div>
  );
}