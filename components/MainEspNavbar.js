import Link from 'next/link';

export default function MainEspNavbar() {
  return (
    <nav className="bg-zinc-900 border border-zinc-700 rounded-lg text-orange-300 -mx-8 px-8 py-2">
      <div className="max-w-[500px] mx-auto flex justify-between items-center">
        <Link href="/espanol" className="flex-1 bg-gray-700 px-1.5 py-2 rounded text-xl font-bold hover:bg-gray-600 transition-colors border border-zinc-700">
          LBHP
        </Link>
        <div className="space-x-4">
          <Link href="/espanol/inicio" className="flex-1 bg-gray-700 px-1.5 py-2 rounded text-base font-semibold hover:bg-gray-600 transition-colors border border-zinc-700">
            Inicio
          </Link>
          <Link href="/espanol/comentarios" className="flex-1 bg-gray-700 px-1.5 py-2 rounded text-base font-semibold hover:bg-gray-600 transition-colors border border-zinc-700">
            Comentarios
          </Link>
        </div>
      </div>
    </nav>
  );
}
