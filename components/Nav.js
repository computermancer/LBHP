import Link from 'next/link';
export default function Nav() {
  return (
    <nav className="flex flex-nowrap overflow-x-auto bg-zinc-900 text-gray-200 px-2 py-2">
      <Link className="bg-zinc-800 px-3 py-1.5 rounded text-base hover:bg-zinc-700 whitespace-nowrap" href="/">Home</Link>
      <Link className="bg-zinc-800 px-3 py-1.5 rounded text-base hover:bg-zinc-700 whitespace-nowrap ml-2" href="/week1">Week 1</Link>
      <Link className="bg-zinc-800 px-3 py-1.5 rounded text-base hover:bg-zinc-700 whitespace-nowrap ml-2" href="/week2">Week 2</Link>
      <Link className="bg-zinc-800 px-3 py-1.5 rounded text-base hover:bg-zinc-700 whitespace-nowrap ml-2" href="/week3">Week 3</Link>
      <Link className="bg-zinc-800 px-3 py-1.5 rounded text-base hover:bg-zinc-700 whitespace-nowrap ml-2" href="/week4">Week 4</Link>
      <Link className="bg-zinc-800 px-3 py-1.5 rounded text-base hover:bg-zinc-700 whitespace-nowrap ml-2" href="/week5">Week 5</Link>
    </nav>
  );
}