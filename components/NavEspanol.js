import Link from 'next/link';

export default function NavEspanol() {
  return (
    <div className="sticky top-0 z-50 flex justify-center bg-zinc-900 shadow-md">
      <nav className="flex gap-0.5 text-gray-200 py-2 px-1 max-w-[500px] w-full mx-auto">
        <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/espanol/inicio">Inicio</Link>
        <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/espanol/semana1">S 1</Link>
        <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/espanol/semana2">S 2</Link>
        <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/espanol/semana3">S 3</Link>
        <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/espanol/semana4">S 4</Link>
        <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center whitespace-nowrap" href="/espanol/semana5">S 5</Link>
      </nav>
    </div>
  );
} 