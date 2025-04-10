import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Day5() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 1 - Día 5</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Respiración, Flexión Espinal y Control del Core</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana1/dia5/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 1: Respiración Diafragmática en Posición de Cocodrilo
              </Link>
              <p className="text-lg text-white mt-2">Fomentar la expansión respiratoria completa en 3D.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia5/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 2: Gato-Vaca con Enfoque en la Respiración
              </Link>
              <p className="text-lg text-white mt-2">Desarrollar conciencia de la flexión y extensión espinal.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia5/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 3: Torsión de Columna Sentada con Respiración
              </Link>
              <p className="text-lg text-white mt-2">Mejorar la rotación torácica con respiración controlada.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia5/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 4: Marcha en Posición Supina con Control Costal
              </Link>
              <p className="text-lg text-white mt-2">Reforzar la estabilidad pélvica y costal con movimiento de piernas.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia5/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 5: Respiración Sentada y Conciencia Pélvica
              </Link>
              <p className="text-lg text-white mt-2">Aumentar la conciencia de la respiración y la posición pélvica.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
