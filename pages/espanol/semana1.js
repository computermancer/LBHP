import NavEspanol from '../../components/NavEspanol';
import Link from 'next/link';

export default function Week1() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-white min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 1</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Conciencia y Activación</h2>
          
          <div className="flex gap-1 mb-8">
            <Link href="/espanol/semana1/dia1" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 1</Link>
            <Link href="/espanol/semana1/dia2" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 2</Link>
            <Link href="/espanol/semana1/dia3" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 3</Link>
            <Link href="/espanol/semana1/dia4" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 4</Link>
            <Link href="/espanol/semana1/dia5" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 5</Link>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Propósito de Esta Semana</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Introducir la conciencia de la pelvis, costillas y diafragma.</li>
              <li>Desarrollar control fundamental sobre la flexión y extensión lumbar.</li>
              <li>Aumentar la conciencia interoceptiva y mejorar el control de la respiración.</li>
              <li>Comenzar a construir confianza en el posicionamiento de la pelvis y la caja torácica.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Objetivos para la Semana 1</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Desarrollar conciencia de la inclinación pélvica posterior y anterior.</li>
              <li>Controlar los patrones de respiración mientras se mantiene la pelvis y las costillas neutrales.</li>
              <li>Mejorar el feedback sensorial a través de movimientos lentos y controlados.</li>
              <li>Establecer una base para sentadillas y bisagras seguras y sin dolor.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Consejos para el Éxito</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Muévete lenta y deliberadamente—calidad sobre cantidad.</li>
              <li>Concéntrate en la conciencia y el control de la respiración.</li>
              <li>Toma descansos si te sientes fatigado o pierdes el enfoque.</li>
              <li>Presta atención a cómo tu cuerpo responde a diferentes movimientos.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
