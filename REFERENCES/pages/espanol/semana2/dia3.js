import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia3() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 2 - Día 3</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Integración de Movimiento y Control</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana2/dia3/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 1: Respiración con Movimiento de Brazos
              </Link>
              <p className="text-lg text-white mt-2">Coordinar la respiración con el movimiento de los brazos.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia3/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 2: Rotación de Tronco en Posición Sentada
              </Link>
              <p className="text-lg text-white mt-2">Mejorar el control rotacional en posición vertical.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia3/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 3: Bisagra de Cadera con Rotación de Brazos
              </Link>
              <p className="text-lg text-white mt-2">Integrar el movimiento de brazos con la bisagra de cadera.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia3/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 4: Plancha con Movimiento de Brazos
              </Link>
              <p className="text-lg text-white mt-2">Mantener la estabilidad durante el movimiento de brazos.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia3/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 5: Rotación con Paso Lateral
              </Link>
              <p className="text-lg text-white mt-2">Integrar la rotación con el movimiento de paso.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 