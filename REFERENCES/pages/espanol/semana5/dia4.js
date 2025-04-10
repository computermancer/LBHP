import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia4() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 5 - Día 4</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Control de Cuerpo Superior y Core</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana5/dia4/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Flexiones en Pared con Estabilidad Costal
              </Link>
              <p className="text-lg text-white mt-2">Introduce el empuje del cuerpo superior mientras mantienes el control del core.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia4/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Flexiones en Silla con Estabilidad Pélvica
              </Link>
              <p className="text-lg text-white mt-2">Progresa el empuje con mayor carga mientras mantienes el control.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia4/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Flexiones en Suelo con Control Costal y Pélvico
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla la fuerza del cuerpo superior y core en posición de plancha.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia4/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Rotación de Columna Sentado con Alcance
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla la rotación torácica y el movimiento escapular.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia4/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Rotación Interna de Cadera y Respiración en Decúbito Lateral
              </Link>
              <p className="text-lg text-white mb-4">Mejora la movilidad de cadera y el control respiratorio.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 