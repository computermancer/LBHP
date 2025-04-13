import MainEspNavBar from '../../components/MainEspNavBar';
import Link from 'next/link';
import LangNavBar from '../../components/LangNavBar';
import WeekLayout from '../../components/WeekLayout';

export default function Inicio() {
  const languages = [
    { code: 'home', name: 'English' },
    { code: 'espanol/inicio', name: 'Español' }
  ];
  const currentLanguage = 'Español';

  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavBar />
      <WeekLayout
        title="Espalda Baja y Caderas"
        subtitle="Una Guía Suave de Reinicio"
      >
        <div className="space-y-6">
          <LangNavBar languages={languages} currentLanguage={currentLanguage} />

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
      </WeekLayout>
    </div>
  );
}
