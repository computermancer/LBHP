import NavEspanol from '../../components/NavEspanol';
import Link from 'next/link';

export default function Semana4() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-white min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 4</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Estabilidad Costal y Pélvica en Movimiento</h2>
          
          <div className="flex gap-1 mb-8">
            <Link href="/espanol/semana4/dia1" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 1</Link>
            <Link href="/espanol/semana4/dia2" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 2</Link>
            <Link href="/espanol/semana4/dia3" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 3</Link>
            <Link href="/espanol/semana4/dia4" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 4</Link>
            <Link href="/espanol/semana4/dia5" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 5</Link>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Propósito de Esta Semana</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Integrar patrones de movimiento dinámico con el control respiratorio y costal.</li>
              <li>Reforzar la fuerza y estabilidad durante movimientos más complejos.</li>
              <li>Desarrollar confianza en patrones avanzados de bisagra y sentadilla.</li>
              <li>Preparar el cuerpo para movimientos más progresivos con carga en programas futuros.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Objetivos para la Semana 4</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Mejorar la eficiencia del movimiento combinando la respiración y el control del core.</li>
              <li>Mejorar el control de las posiciones pélvicas y costales durante movimientos con carga.</li>
              <li>Desarrollar fuerza en patrones de bisagra, sentadilla y rotación.</li>
              <li>Aumentar la conciencia del equilibrio, estabilidad y control bajo condiciones dinámicas.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Consejos para el Éxito</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Mantén una respiración constante mientras realizas movimientos más complejos.</li>
              <li>Concéntrate en transiciones suaves y controladas entre posiciones.</li>
              <li>Usa la respiración para estabilizar la caja torácica y la pelvis durante cada movimiento.</li>
              <li>Ten en cuenta la fatiga—la calidad del movimiento es más importante que la cantidad.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
