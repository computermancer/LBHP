import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia4() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 3 - Día 4</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Estabilidad de Cadera y Caja Torácica</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana3/dia4/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Desplazamientos de Cadera en Decúbito Supino con Control Costal
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla el control de los desplazamientos pélvicos mientras mantienes la estabilidad costal.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia4/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Flexión y Extensión Torácica Sentado
              </Link>
              <p className="text-lg text-white mt-2">Mejora la movilidad de la columna torácica y el control postural.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia4/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Alcance de Brazo y Pierna en Cuatro Puntos con Control
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla la estabilidad del core y los hombros mientras mantienes la columna neutral.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia4/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Presión de Isquiotibiales en Pared con Conciencia de Cadera
              </Link>
              <p className="text-lg text-white mt-2">Refuerza la activación de los isquiotibiales y el control pélvico.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia4/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Abducción de Cadera en Decúbito Lateral con Apoyo
              </Link>
              <p className="text-lg text-white mb-4">Desarrolla la fuerza y estabilidad lateral de la cadera.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 