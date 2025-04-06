import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia1() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 2 - Día 1</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Expansión Costal y Control de Cadera</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana2/dia1/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 1: Expansión Costal Supina con Respiración
              </Link>
              <p className="text-lg text-white mt-2">Aumentar la conciencia de la caja torácica y el control diafragmático.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia1/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 2: Desplazamientos de Cadera en Decúbito Supino
              </Link>
              <p className="text-lg text-white mt-2">Desarrollar control y conciencia de los patrones de desplazamiento de cadera.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia1/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 3: Rotación Interna de Cadera en Decúbito Lateral con Respiración
              </Link>
              <p className="text-lg text-white mt-2">Mejorar la rotación interna de cadera y la coordinación respiratoria.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia1/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 4: Descenso de Piernas 90-90 en Decúbito Supino
              </Link>
              <p className="text-lg text-white mt-2">Reforzar la estabilidad del core y la alineación costilla-pelvis.</p>
            </div>

            <div>
              <Link href="/espanol/semana2/dia1/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left">
                Ejercicio 5: Presión de Talón con Apoyo en Pared
              </Link>
              <p className="text-lg text-white mt-2">Activar los isquiotibiales para estabilizar la pelvis y reforzar el control.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 