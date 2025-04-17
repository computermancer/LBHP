import MainEspNavBar from '../../components/MainEspNavBar';
import Link from 'next/link';
import LangNavBar from '../../components/LangNavBar';
import Icono from '../../components/espicono';
import DropdownCardEsp from '../../components/DropdownCardEsp';
import LanguageCardEsp from '../../components/LanguageCardEsp';

export default function Inicio() {
  const languages = [
    { code: '/home', name: 'English' },
    { code: 'espanol/inicio', name: 'Español' }
  ];
  const currentLanguage = 'Español';

  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavBar />
      <div className="min-h-screen bg-zinc-900">
        <main className="px-8 text-gray-200 font-sans pt-4 pb-2">
          <div className="max-w-[500px] mx-auto">
            <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-3 mb-4">
              <h1 className="text-orange-300 text-4xl font-bold mb-1">Espalda Baja y Caderas</h1>
              <h2 className="text-orange-300 text-2xl font-bold mb-0 leading-relaxed" style={{ lineHeight: '1.5em', height: '2em' }}>Una Guía Suave de Reinicio</h2>
            </div>
            <div className="h-2"></div>
            <div className="max-w-[500px] mx-auto">
              <div className="space-y-6">
                <div className="mt-2">
                  <LanguageCardEsp />
                </div>

                <DropdownCardEsp
                  title="Información"
                  items={[
                    { href: "/espanol/sobreLBHP", text: "Sobre LBHP" },
                    { href: "/espanol/comousar", text: "Cómo Usar LBHP" },
                    { href: "/espanol/enprogreso", text: "Trabajo en Progreso" },
                    { href: "/espanol/mateobravo", text: "Mateo Bravo" }
                  ]}
                />

                <DropdownCardEsp
                  title="Recursos"
                  items={[
                    { href: "/espanol/contenido", text: "Contenido Resumen" },
                    { href: "/espanol/glosario", text: "Glosario" },
                    { href: "/espanol/descargar", text: "Descargar PDF's" },
                    { href: "/espanol/comentarios", text: "Contacto y Retroalimentación" }
                  ]}
                />
              </div>
              <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-4">
                <Icono />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}