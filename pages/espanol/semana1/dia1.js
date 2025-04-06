import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Day1() {
  return (
    <div className="flex flex-col items-center w-full">
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans w-full">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 1 - Día 1</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Trabajo Base y Conciencia</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana1/dia1/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 1: Inclinación Pélvica Posterior en la Pared
              </Link>
              <p className="text-lg text-white mt-2">Desarrollar conciencia de la inclinación pélvica y control lumbar.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia1/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 2: Respiración Abdominal en Posición Acostada
              </Link>
              <p className="text-lg text-white mt-2">Mejorar el control de la respiración y la función diafragmática.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia1/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 3: Balanceo Pélvico Sentado
              </Link>
              <p className="text-lg text-white mt-2">Aumentar la movilidad pélvica y la coordinación.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia1/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 4: Alcance 90-90 en Posición Supina
              </Link>
              <p className="text-lg text-white mt-2">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia1/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 5: Presión de Isquiotibiales en la Pared
              </Link>
              <p className="text-lg text-white mt-2">Activar los isquiotibiales para estabilizar la pelvis y el core.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
