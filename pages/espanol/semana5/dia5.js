import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia5() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 5 - Día 5</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Movilidad, Respiración y Control</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana5/dia5/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Postura de Caballo con Control Costal (Mantenimiento Prolongado)
              </Link>
              <p className="text-lg text-white mt-2">Refuerza la resistencia isométrica de la parte inferior del cuerpo.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia5/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Elevación de Talones con Control Costal y Pélvico
              </Link>
              <p className="text-lg text-white mt-2">Fortifica las pantorrillas mientras mantienes una alineación neutral.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia5/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Elevación Tibial con Conciencia Respiratoria
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla la fuerza anterior de la espinilla y el equilibrio.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia5/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Expansión Costal en Decúbito Supino con Marcha
              </Link>
              <p className="text-lg text-white mt-2">Refuerza el control del core y la respiración con marcha.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia5/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Balanceo Pélvico en Decúbito Supino con Control Respiratorio
              </Link>
              <p className="text-lg text-white mb-4">Mejora la movilidad pélvica y la conciencia guiada por la respiración.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 