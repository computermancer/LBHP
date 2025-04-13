import MainEspNavBar from '../../components/MainEspNavBar';
import Link from 'next/link';
import LangNavBar from '../../components/LangNavBar';
import WeekLayout from '../../components/WeekLayout';
import Icono from '../../components/icono';
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
      <WeekLayout
        title="Espalda Baja y Caderas"
        subtitle="Una Guía Suave de Reinicio"
      >
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

            <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-4">
              <Icono />
            </div>
          </div>
        </div>
      </WeekLayout>
    </div>
  );
}