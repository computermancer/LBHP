import Link from 'next/link';
export default function Nav() {
  return (
    <div className="sticky top-0 z-50 flex justify-center bg-zinc-900 px-8 shadow-md">
      <nav className="flex gap-1 text-gray-200 py-2 max-w-[500px] w-full mx-auto">
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center" href="/home">Home</Link>
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center" href="/week1">W 1</Link>
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center" href="/week2">W 2</Link>
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center" href="/week3">W 3</Link>
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center" href="/week4">W 4</Link>
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center" href="/week5">W 5</Link>
      </nav>
    </div>
  );
}