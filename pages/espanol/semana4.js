import NavEspanol from '../../components/NavEspanol';
import Link from 'next/link';

export default function Semana4() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-white min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 4</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Movimiento Dinámico y Control</h2>
          
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
              <li>Introducir patrones de movimiento más dinámicos.</li>
              <li>Fortalecer la estabilidad durante las transiciones.</li>
              <li>Desarrollar coordinación entre segmentos corporales.</li>
              <li>Construir confianza en movimientos fluidos.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Objetivos para la Semana 4</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Dominar secuencias de movimiento dinámico.</li>
              <li>Mejorar la estabilidad durante las transiciones.</li>
              <li>Mejorar la coordinación entre partes del cuerpo.</li>
              <li>Desarrollar fluidez en patrones de movimiento.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-orange-300">Consejos para el Éxito</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Concéntrate en transiciones suaves entre movimientos.</li>
              <li>Mantén la forma adecuada durante los ejercicios.</li>
              <li>Comienza lentamente y aumenta la velocidad gradualmente.</li>
              <li>Escucha a tu cuerpo y descansa cuando sea necesario.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
