import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia1() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 3 - Día 1</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Control Pélvico e Integración Respiratoria</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana3/dia1/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Respiración en Decúbito Supino con Conciencia Pélvica
              </Link>
              <p className="text-lg text-white mt-2">Mejora el control respiratorio y establece conciencia del movimiento pélvico.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia1/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Desplazamiento de Cadera Sentado con Estabilidad Costal
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla el control del desplazamiento de cadera con movimiento mínimo de la caja torácica.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia1/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Reinicio del Diafragma en Decúbito Supino con Alcance
              </Link>
              <p className="text-lg text-white mt-2">Refuerza el control de la caja torácica durante los ciclos respiratorios.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia1/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Balanceo Hacia Atrás en Posición Cuadrúpeda con Enfoque Respiratorio
              </Link>
              <p className="text-lg text-white mt-2">Mejora la movilidad pélvica y mantiene la estabilidad del core.</p>
            </div>

            <div>
              <Link href="/espanol/semana3/dia1/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Bisagra de Cadera con Apoyo en Pared y Alcance de Brazo
              </Link>
              <p className="text-lg text-white mb-4">Desarrolla la activación de la cadena posterior mientras mantiene el control costal.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 