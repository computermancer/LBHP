import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia1() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 5 - Día 1</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Control y Fuerza de la Parte Inferior del Cuerpo</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana5/dia1/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Sentadillas con Peso Corporal y Control Costal
              </Link>
              <p className="text-lg text-white mt-2">Refuerza la mecánica de la sentadilla con estabilidad del core.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia1/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Mantenimiento de Postura de Caballo (Paralelo al Suelo)
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla fuerza isométrica y resistencia en la parte inferior del cuerpo.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia1/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: RDL con Apoyo y Control de Cadera
              </Link>
              <p className="text-lg text-white mt-2">Mejora la cadena posterior y la estabilidad de cadera.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia1/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Mantenimiento de Sentadilla Dividida Apoyada en Pared
              </Link>
              <p className="text-lg text-white mt-2">Fortalece glúteos, cuádriceps y core en posición dividida.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia1/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Marcha en Decúbito Supino con Control del Core
              </Link>
              <p className="text-lg text-white mb-4">Refuerza la estabilidad pélvica durante el movimiento dinámico.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 