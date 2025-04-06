import NavEspanol from '../../../components/NavEspanol';
import Link from 'next/link';

export default function Dia2() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 5 - Día 2</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Control de Pierna Única y Cadera</h2>

          <div className="space-y-4">
            <div>
              <Link href="/espanol/semana5/dia2/ejercicio1" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 1: Sentadillas en Postura Escalonada con Estabilidad Costal
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla la carga en una sola pierna y el control pélvico.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia2/ejercicio2" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 2: Zancadas Laterales con Control Respiratorio
              </Link>
              <p className="text-lg text-white mt-2">Mejora el control lateral de cadera y la estabilidad costal.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia2/ejercicio3" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 3: Abducción de Cadera en Decúbito Lateral con Enfoque Respiratorio
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla la fuerza lateral de cadera con control respiratorio.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia2/ejercicio4" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded">
                Ejercicio 4: Puente de Glúteos con Una Pierna y Estabilidad Costal
              </Link>
              <p className="text-lg text-white mt-2">Desarrolla la fuerza de la cadena posterior y el control de cadera.</p>
            </div>

            <div>
              <Link href="/espanol/semana5/dia2/ejercicio5" className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2">
                Ejercicio 5: Desplazamiento Costal en Decúbito Supino con Activación Core
              </Link>
              <p className="text-lg text-white mb-4">Desarrolla el control del core con desplazamiento sutil de costillas.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 