import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia3() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 5 - Día 3</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Cadena Posterior y Control de Cadera</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana5/dia3/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: RDL en Postura Escalonada con Conciencia de Cadera
              </Link>
              <p className="text-lg text-white mt-2">Mejora la fuerza de la cadena posterior y el control de una sola pierna.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia3/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Zancadas Adelante con Control Costal
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla fuerza y estabilidad en patrones de zancada hacia adelante.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia3/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Presión de Isquiotibiales en Pared con Estabilidad Costal
              </Link>
              <p className="text-lg text-white mt-2">Activa los isquiotibiales y refuerza el control del core.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia3/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Puente de Glúteos Bilateral con Control Costal y Pélvico
              </Link>
              <p className="text-lg text-white mt-2">Refuerza la extensión de cadera y la estabilidad del core.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia3/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Torsión de Columna en Decúbito Supino con Respiración
              </Link>
              <p className="text-lg text-white mb-4">Mejora la rotación torácica con respiración controlada.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 