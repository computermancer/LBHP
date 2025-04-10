import NavEspanol from '../../components/NavEspanol';
import Link from 'next/link';
import LangNavBar from '../../components/LangNavBar';

export default function Inicio() {
  const languages = [
    { code: 'home', name: 'English' },
    { code: 'espanol/inicio', name: 'Español' }
  ];
  const currentLanguage = 'Español';

  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-20 pb-2">
        <div className="max-w-[500px] mx-auto">
          <NavEspanol />
          <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3 mb-3">
            <h1 className="text-orange-300 text-4xl font-bold mb-1">Espalda Baja y Caderas</h1>
            <h2 className="text-orange-300 text-2xl font-bold mb-0 leading-relaxed" style={{ lineHeight: '1.5em', height: '3em' }}>Una Guía Suave de Reinicio</h2>
          </div>
          <div className="h-1"></div>
          <LangNavBar languages={languages} currentLanguage={currentLanguage} />
          <div className="h-6"></div>

          <div className="space-y-6">
            {/* First Card - About/How/Work */}
            <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
              <div className="space-y-4">
                <Link href="/espanol/sobreLBHP" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    Sobre LBHP
                  </button>
                </Link>

                <Link href="/espanol/comousar" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    Cómo Usar LBHP
                  </button>
                </Link>

                <Link href="/espanol/enprogreso" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    Trabajo en Progreso
                  </button>
                </Link>
              </div>
            </div>

            {/* Second Card - Contents/Glossary/Download */}
            <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
              <div className="space-y-4">
                <Link href="/espanol/contenido" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    Resumen de Contenidos
                  </button>
                </Link>

                <Link href="/espanol/glosario" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    Glosario
                  </button>
                </Link>

                <Link href="/espanol/descargar" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    Descargar PDF's
                  </button>
                </Link>
              </div>
            </div>

            {/* Third Card - Contact/Mateo */}
            <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
              <div className="space-y-4">
                <Link href="/espanol/comentarios" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    Contacto y Comentarios
                  </button>
                </Link>

                <Link href="/espanol/mateobravo" className="block">
                  <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                    Mateo Bravo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
