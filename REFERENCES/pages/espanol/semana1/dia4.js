import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Day4() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 1 - Día 4</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Control Pélvico y Costal</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana1/dia4/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Reinicio Diafragmático en Posición Supina
              </Link>
              <p className="text-lg text-white mt-2">Establecer un control diafragmático más profundo y relajación.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia4/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Balanceo Pélvico Posterior Sentado
              </Link>
              <p className="text-lg text-white mt-2">Mejorar la conciencia de la posición pélvica.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia4/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Extensión Torácica Sentada
              </Link>
              <p className="text-lg text-white mt-2">Fortalecer la extensión torácica y la posición costal.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia4/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Desplazamiento de Cadera en Posición Supina con Respiración
              </Link>
              <p className="text-lg text-white mt-2">Desarrollar control de los desplazamientos pélvicos e integración del core.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia4/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Respiración Sentada con Control Costal
              </Link>
              <p className="text-lg text-white mb-4">Mantener el control de la caja torácica y la pelvis con respiración constante.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
