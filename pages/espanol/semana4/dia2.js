import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia2() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 4 - Día 2</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Estabilidad del Core y Pélvica en Acción</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana4/dia2/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Flexión y Extensión Torácica Sentado
              </Link>
              <p className="text-lg text-white mt-2">Mejora la movilidad torácica mientras mantienes el control pélvico.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia2/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Descenso de Piernas 90-90 en Decúbito Supino con Respiración
              </Link>
              <p className="text-lg text-white mt-2">Refuerza el control del core mientras bajas las piernas con estabilidad.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia2/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Rotación de Columna Sentado con Alcance de Brazo
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla el control rotacional y la movilidad torácica.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia2/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Marcha de Isquiotibiales en Pared con Estabilidad Costal
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla el control de la cadena posterior mientras mantienes el control costal.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia2/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Rotación Interna y Extensión de Cadera en Decúbito Prono con Control
              </Link>
              <p className="text-lg text-white mb-4">Desarrolla la conciencia de la rotación y extensión de cadera.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 