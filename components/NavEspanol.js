import Link from 'next/link';

export default function NavEspanol() {
  return (
    <div className="sticky top-0 z-50 flex justify-center bg-zinc-900 px-8 shadow-md">
      <nav className="flex gap-1 text-gray-200 px-2 py-2 max-w-[500px] w-full mx-auto">
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center min-h-[2.5rem]" href="/espanol/inicio">Inicio</Link>
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center min-h-[2.5rem]" href="/espanol/semana1">Semana 1</Link>
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center min-h-[2.5rem]" href="/espanol/semana2">Semana 2</Link>
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center min-h-[2.5rem]" href="/espanol/semana3">Semana 3</Link>
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center min-h-[2.5rem]" href="/espanol/semana4">Semana 4</Link>
        <Link className="flex-1 bg-zinc-800 px-2 py-1.5 rounded text-base hover:bg-zinc-700 text-center min-h-[2.5rem]" href="/espanol/semana5">Semana 5</Link>
      </nav>
    </div>
  );
} 