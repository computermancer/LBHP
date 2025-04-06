import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia2() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 2 - Día 2</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Control Rotacional y Estabilidad</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana2/dia2/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 1: Rotación Torácica en Decúbito Lateral
              </Link>
              <p className="text-lg text-white mt-2">Mejorar la movilidad y control de la rotación torácica.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia2/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 2: Puente con Marcha
              </Link>
              <p className="text-lg text-white mt-2">Desarrollar estabilidad pélvica durante el movimiento.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia2/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 3: Rotación de Cadera en Posición Cuadrúpeda
              </Link>
              <p className="text-lg text-white mt-2">Mejorar el control rotacional y la estabilidad de la cadera.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia2/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 4: Plancha con Rotación
              </Link>
              <p className="text-lg text-white mt-2">Reforzar la estabilidad del core durante la rotación.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia2/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 5: Bisagra de Cadera con Rotación
              </Link>
              <p className="text-lg text-white mt-2">Integrar la rotación con el movimiento de bisagra de cadera.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 