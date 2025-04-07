import NavEspanol from '../../components/NavEspanol';
import Link from 'next/link';

export default function Inicio() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Programa de Espalda Baja y Caderas</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Una Guía Suave de Reinicio</h2>
          
          <div className="space-y-4">

          <Link href="/" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Selección de Idioma
              </button>
            </Link>



            <Link href="/espanol/sobreLBHP" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Sobre LBHP
              </button>
            </Link>

            <Link href="/espanol/comousar" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Cómo Usar LBHP
              </button>
            </Link>

            <Link href="/espanol/enprogreso" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Trabajo en Progreso
              </button>
            </Link>

            <Link href="/espanol/contenido" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Resumen de Contenidos
              </button>
            </Link>

            <Link href="/espanol/glosario" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Glosario
              </button>
            </Link>

            <Link href="/espanol/descargar" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Descargar PDF's
              </button>
            </Link>



            <Link href="/espanol/comentarios" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Contacto y Comentarios
              </button>
            </Link>

            <Link href="/espanol/mateobravo" className="block">
              <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded w-full sm:w-[500px] text-left">
                Mateo Bravo
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
