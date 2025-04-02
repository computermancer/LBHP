
import Link from 'next/link';
export default function Nav() {
  return (
    <nav className="flex space-x-4 bg-zinc-900 text-gray-200 px-4 py-3">
      <Link className="bg-zinc-800 px-4 py-2 rounded text-lg hover:bg-zinc-700" href="/">Home</Link>


          <Link className="bg-zinc-800 px-4 py-2 rounded text-lg hover:bg-zinc-700" href="/week1">Week 1</Link>
          <Link className="bg-zinc-800 px-4 py-2 rounded text-lg hover:bg-zinc-700" href="/week2">Week 2</Link>
          <Link className="bg-zinc-800 px-4 py-2 rounded text-lg hover:bg-zinc-700" href="/week3">Week 3</Link>
          <Link className="bg-zinc-800 px-4 py-2 rounded text-lg hover:bg-zinc-700" href="/week4">Week 4</Link>
          <Link className="bg-zinc-800 px-4 py-2 rounded text-lg hover:bg-zinc-700" href="/week5">Week 5</Link>

    </nav>
  );
}