import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia5() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 3 - Día 5</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Respiración, Movilidad y Relajación</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana3/dia5/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Respiración de Cocodrilo con Expansión Costal
              </Link>
              <p className="text-lg text-white mt-2">Refuerza la expansión respiratoria de todo el cuerpo.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia5/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Balanceo Pélvico en Decúbito Supino con Enfoque Respiratorio
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla un movimiento pélvico suave guiado por la respiración.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia5/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Torsión de Columna Sentado con Alcance de Brazo
              </Link>
              <p className="text-lg text-white mt-2">Mejora la rotación torácica con respiración y movimiento coordinados.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia5/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Marcha Apoyada en Pared con Control Costal
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla el control de la caja torácica y la estabilidad del core.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia5/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Rotación Interna de Cadera y Respiración en Decúbito Lateral
              </Link>
              <p className="text-lg text-white mb-4">Mejora la rotación interna de cadera y la coordinación respiratoria.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 