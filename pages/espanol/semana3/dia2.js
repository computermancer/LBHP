import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia2() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 3 - Día 2</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Coordinación de Costillas y Cadera</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana3/dia2/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Expansión Costal Sentado con Control Respiratorio
              </Link>
              <p className="text-lg text-white mt-2">Promueve la movilidad de la caja torácica y la expansión lateral de la respiración.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia2/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Marcha en Decúbito Supino con Control del Core
              </Link>
              <p className="text-lg text-white mt-2">Refuerza la estabilidad pélvica mientras mueves las piernas.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia2/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Rotación Torácica Sentado con Alcance de Brazo
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla el control y la movilidad rotacional.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia2/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Marcha de Isquiotibiales en Pared con Control Costal
              </Link>
              <p className="text-lg text-white mt-2">Activa la cadena posterior mientras mantienes la estabilidad costal.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia2/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Ejercicio de Rotación Interna y Extensión de Cadera en Decúbito Prono
              </Link>
              <p className="text-lg text-white mb-4">Desarrolla conciencia de la rotación de cadera y la extensión de cadera.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 