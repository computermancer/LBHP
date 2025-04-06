import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Day2() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 1 - Día 2</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Expansión Costal y Enfoque en la Bisagra de Cadera</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana1/dia2/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Expansión Costal en Posición Lateral
              </Link>
              <p className="text-lg text-white mt-2">Mejorar la expansión lateral de la caja torácica y la mecánica respiratoria.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia2/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Rotación Torácica Sentado
              </Link>
              <p className="text-lg text-white mt-2">Aumentar la movilidad torácica y el control rotacional.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia2/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Bisagra de Cadera de Pie con Alcance a la Pared
              </Link>
              <p className="text-lg text-white mt-2">Desarrollar conciencia y control de la bisagra de cadera.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia2/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Balanceo Hacia Atrás en Cuadrupedia con Columna Neutral
              </Link>
              <p className="text-lg text-white mt-2">Promover el control pélvico con columna neutral.</p>
            </div>

            <div>
              <Link href="/espanol/semana1/dia2/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Sostén de Sentadilla con Apoyo en la Pared
              </Link>
              <p className="text-lg text-white mb-4">Construir confianza en la posición de sentadilla con apoyo en la pared.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
