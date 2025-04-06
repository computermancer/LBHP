import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia3() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 4 - Día 3</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Control Espinal y Movilidad de Cadera</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana4/dia3/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Gato-Vaca con Expansión Costal
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla la flexión y extensión espinal con control respiratorio.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia3/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Balanceo Pélvico Posterior Sentado
              </Link>
              <p className="text-lg text-white mt-2">Mejora la conciencia del movimiento pélvico en posiciones sentadas.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia3/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Desplazamiento Costal 90-90 en Decúbito Supino con Respiración
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla la coordinación costal y pélvica durante la respiración.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia3/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Sentadilla Profunda Apoyada en Pared con Alcance
              </Link>
              <p className="text-lg text-white mt-2">Aumenta la estabilidad en la sentadilla con conciencia costal y pélvica.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia3/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Torsión Espinal en Decúbito Supino con Respiración
              </Link>
              <p className="text-lg text-white mb-4">Mejora la rotación torácica con respiración controlada.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 