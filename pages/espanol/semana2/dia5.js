import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia5() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 2 - Día 5</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Integración y Progresión</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana2/dia5/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 1: Respiración con Movimiento Completo
              </Link>
              <p className="text-lg text-white mt-2">Coordinar la respiración con movimientos integrados.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia5/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 2: Rotación con Bisagra de Cadera
              </Link>
              <p className="text-lg text-white mt-2">Integrar la rotación con la bisagra de cadera.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia5/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 3: Movimiento de Brazos y Piernas
              </Link>
              <p className="text-lg text-white mt-2">Coordinar el movimiento de extremidades.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia5/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 4: Plancha con Movimiento Completo
              </Link>
              <p className="text-lg text-white mt-2">Mantener la estabilidad durante movimientos complejos.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia5/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 5: Integración de Movimientos
              </Link>
              <p className="text-lg text-white mt-2">Combinar todos los elementos aprendidos.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 