import Link from 'next/link';

export default function NavEspanol() {
  return (
    <div className="sticky top-0 z-50 bg-zinc-900 shadow-md">
      <div className="px-8">
        <nav className="flex gap-0.5 text-gray-200 py-2 max-w-[500px] mx-auto">
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center " href="/espanol/inicio">Inicio</Link>
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center " href="/espanol/semana1">Semana 1</Link>
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center " href="/espanol/semana2">Semana 2</Link>
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center " href="/espanol/semana3">Semana 3</Link>
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center " href="/espanol/semana4">Semana 4</Link>
          <Link className="flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold hover:bg-zinc-700 text-center " href="/espanol/semana5">Semana 5</Link>
        </nav>
      </div>
    </div>
  );
}