import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Day3() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 1 - Día 3</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Control Respiratorio y Movimiento Rítmico</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana1/dia3/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Reinicio Respiratorio en Posición Lateral
              </Link>
              <p className="text-lg text-white mt-2">Promover el reinicio de la caja torácica y el diafragma a través de la respiración enfocada.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia3/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Alcance y Rodamiento Rítmico
              </Link>
              <p className="text-lg text-white mt-2">Mejorar el control rotacional y la coordinación.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia3/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Patrones Respiratorios con Apoyo
              </Link>
              <p className="text-lg text-white mt-2">Reforzar el control constante de la respiración y la conciencia costal.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia3/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Balanceo de Columna Relajada
              </Link>
              <p className="text-lg text-white mt-2">Fomentar el movimiento fluido a través de la pelvis y la columna.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia3/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Balanceo Bilateral Suave
              </Link>
              <p className="text-lg text-white mb-4">Mejorar la movilidad pélvica y la relajación.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
