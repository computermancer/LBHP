import Link from 'next/link';

export default function MainEspNavBar() {
  return (
    <nav className="bg-zinc-900 border border-zinc-700 rounded-lg text-orange-300 -mx-8 px-8 py-2">
      <div className="max-w-[500px] mx-auto">
        <div className="flex justify-between items-center mb-2">
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
        
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <Link href="/espanol/semana1" className="flex-1 bg-gray-700 px-1.5 py-2 rounded text-base font-semibold hover:bg-gray-600 transition-colors border border-zinc-700">
              Semana 1
            </Link>
          </div>
          <div className="flex-1">
            <Link href="/espanol/semana2" className="flex-1 bg-gray-700 px-1.5 py-2 rounded text-base font-semibold hover:bg-gray-600 transition-colors border border-zinc-700">
              Semana 2
            </Link>
          </div>
          <div className="flex-1">
            <Link href="/espanol/semana3" className="flex-1 bg-gray-700 px-1.5 py-2 rounded text-base font-semibold hover:bg-gray-600 transition-colors border border-zinc-700">
              Semana 3
            </Link>
          </div>
          <div className="flex-1">
            <Link href="/espanol/semana4" className="flex-1 bg-gray-700 px-1.5 py-2 rounded text-base font-semibold hover:bg-gray-600 transition-colors border border-zinc-700">
              Semana 4
            </Link>
          </div>
          <div className="flex-1">
            <Link href="/espanol/semana5" className="flex-1 bg-gray-700 px-1.5 py-2 rounded text-base font-semibold hover:bg-gray-600 transition-colors border border-zinc-700">
              Semana 5
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
