import NavEspanol from '../../components/NavEspanol';
import Link from 'next/link';

export default function Semana5() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-white min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 5</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Integración y Progresión</h2>
          
          <div className="flex gap-1 mb-8">
            <Link href="/espanol/semana5/dia1" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 1</Link>
            <Link href="/espanol/semana5/dia2" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 2</Link>
            <Link href="/espanol/semana5/dia3" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 3</Link>
            <Link href="/espanol/semana5/dia4" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 4</Link>
            <Link href="/espanol/semana5/dia5" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 5</Link>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Propósito de Esta Semana</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Integrar todos los patrones de movimiento aprendidos.</li>
              <li>Progresar a ejercicios más desafiantes.</li>
              <li>Desarrollar resistencia y fuerza.</li>
              <li>Prepararse para movimientos avanzados.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Objetivos para la Semana 5</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Dominar secuencias de movimiento integradas.</li>
              <li>Completar ejercicios más desafiantes.</li>
              <li>Aumentar la resistencia y fuerza.</li>
              <li>Desarrollar confianza para movimientos avanzados.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Consejos para el Éxito</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Concéntrate en la forma correcta durante todos los ejercicios.</li>
              <li>Desafíate a ti mismo mientras mantienes el control.</li>
              <li>Aumenta gradualmente la intensidad y duración.</li>
              <li>Escucha a tu cuerpo y descansa cuando sea necesario.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
