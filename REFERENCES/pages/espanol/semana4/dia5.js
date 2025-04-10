import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia5() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 4 - Día 5</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Integración de Movimientos y Control Respiratorio</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana4/dia5/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Bisagra de Cadera con Control Costal
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla la bisagra de cadera mientras mantienes el control costal y pélvico.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia5/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Sentadilla con Control Respiratorio
              </Link>
              <p className="text-lg text-white mt-2">Mejora la sentadilla con enfoque en la respiración y el control del core.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia5/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Rotación de Columna con Alcance
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla la rotación torácica con control pélvico.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia5/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Marcha de Isquiotibiales con Estabilidad
              </Link>
              <p className="text-lg text-white mt-2">Refuerza la cadena posterior mientras mantienes la estabilidad del core.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia5/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Respiración Diafragmática con Movimiento
              </Link>
              <p className="text-lg text-white mb-4">Integra la respiración diafragmática con movimientos dinámicos.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 