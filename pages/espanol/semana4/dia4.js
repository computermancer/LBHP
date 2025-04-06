import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia4() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 4 - Día 4</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Control de Cadera y Costillas bajo Carga</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana4/dia4/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Desplazamientos de Cadera en Decúbito Supino con Conciencia Costal
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla la movilidad lateral de cadera mientras mantienes la estabilidad costal.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia4/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Alcance de Brazo y Pierna en Cuatro Puntos con Control
              </Link>
              <p className="text-lg text-white mt-2">Mejora el equilibrio y la estabilidad con movimiento controlado.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia4/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Presión de Isquiotibiales en Pared con Enfoque Respiratorio
              </Link>
              <p className="text-lg text-white mt-2">Refuerza la activación de isquiotibiales y el control del core.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia4/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Abducción de Cadera en Decúbito Lateral con Apoyo
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla la fuerza y estabilidad lateral de cadera.</p>
            </div>

            <div>
              <Link href="/espanol/semana4/dia4/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Torsión de Columna Sentado con Alcance de Brazo
              </Link>
              <p className="text-lg text-white mb-4">Desarrolla la rotación torácica y el control.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 