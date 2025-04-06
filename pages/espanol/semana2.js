import NavEspanol from '../../components/NavEspanol';
import Link from 'next/link';

export default function Semana2() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-white min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 2</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Expansión Costal y Control de Cadera</h2>
          
          <div className="flex gap-1 mb-8">
            <Link href="/espanol/semana2/dia1" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 1</Link>
            <Link href="/espanol/semana2/dia2" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 2</Link>
            <Link href="/espanol/semana2/dia3" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 3</Link>
            <Link href="/espanol/semana2/dia4" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 4</Link>
            <Link href="/espanol/semana2/dia5" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 5</Link>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Propósito de Esta Semana</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Expandir la conciencia y control de la caja torácica.</li>
              <li>Desarrollar movilidad y estabilidad de cadera.</li>
              <li>Integrar la respiración con patrones de movimiento.</li>
              <li>Construir una base para movimientos dinámicos.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Objetivos para la Semana 2</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Mejorar la expansión y control de la caja torácica.</li>
              <li>Mejorar la movilidad y estabilidad de cadera.</li>
              <li>Desarrollar patrones coordinados de respiración-movimiento.</li>
              <li>Construir confianza en patrones básicos de movimiento.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Consejos para el Éxito</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Concéntrate en la calidad del movimiento sobre la cantidad.</li>
              <li>Presta atención a los patrones de respiración durante los ejercicios.</li>
              <li>Toma descansos cuando sea necesario para mantener la forma.</li>
              <li>Observa cómo tu cuerpo responde a diferentes movimientos.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
