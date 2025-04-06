import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia1() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 4 - Día 1</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Estabilidad Costal y Pélvica en Movimiento</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana4/dia1/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Desplazamiento Costal en Decúbito Supino con Control Respiratorio
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla el control lateral de las costillas mientras mantienes la estabilidad pélvica.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia1/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Desplazamientos de Cadera Sentado con Conciencia Respiratoria
              </Link>
              <p className="text-lg text-white mt-2">Refuerza el control pélvico y la conciencia de cadera en posiciones sentadas.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia1/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Expansión Costal en Decúbito Supino con Marcha
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla la estabilidad del core y las costillas mientras agregas movimiento dinámico.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia1/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Bisagra Apoyada en Pared con Alcance de Brazo
              </Link>
              <p className="text-lg text-white mt-2">Fortalece la cadena posterior mientras mantienes el control de la caja torácica.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia1/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Balanceo Hacia Atrás en Cuatro Puntos con Enfoque en Alcance
              </Link>
              <p className="text-lg text-white mb-4">Mejora la movilidad pélvica con control costal y conciencia respiratoria.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 