import NavEspanol from '../../components/NavEspanol';
import Link from 'next/link';

export default function Semana5() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-white min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 5</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Progresión de Fuerza y Control</h2>
          
          <div className="flex gap-1 mb-8">
            <Link href="/espanol/semana5/dia1" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 1</Link>
            <Link href="/espanol/semana5/dia2" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 2</Link>
            <Link href="/espanol/semana5/dia3" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 3</Link>
            <Link href="/espanol/semana5/dia4" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 4</Link>
            <Link href="/espanol/semana5/dia5" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 5</Link>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Propósito de Esta Semana</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Integrar trabajo de fuerza fundamental usando movimientos con peso corporal.</li>
              <li>Reforzar el equilibrio, control y estabilidad pélvica/costal durante posiciones más desafiantes.</li>
              <li>Preparar el cuerpo para tolerar futura progresión de carga.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Objetivos para la Semana 5</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Desarrollar fuerza y resistencia en posturas y zancadas de la parte inferior del cuerpo.</li>
              <li>Construir fuerza en la cadena posterior a través de variaciones de puente de glúteos.</li>
              <li>Introducir variaciones progresivas de empuje de la parte superior del cuerpo.</li>
              <li>Mejorar el equilibrio y control de una sola pierna a través de postura escalonada y zancadas.</li>
              <li>Reforzar la estabilidad costal y pélvica durante movimientos más complejos.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Consejos para el Éxito</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Concéntrate en el movimiento controlado sobre la velocidad.</li>
              <li>Mantén el control respiratorio y la estabilidad del core durante todo el ejercicio.</li>
              <li>Progresa gradualmente—escucha a tu cuerpo.</li>
              <li>Enfatiza la calidad del movimiento a medida que aumenta la intensidad.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
