import NavEspanol from '../../components/NavEspanol';
import Link from 'next/link';

export default function Semana2() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-white min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 2</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Control Costal e Integración de Cadera</h2>
          
          <div className="flex gap-1 mb-8">
            <Link href="/espanol/semana2/dia1" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 1</Link>
            <Link href="/espanol/semana2/dia2" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 2</Link>
            <Link href="/espanol/semana2/dia3" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 3</Link>
            <Link href="/espanol/semana2/dia4" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 4</Link>
            <Link href="/espanol/semana2/dia5" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 5</Link>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Propósito de Esta Semana</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Aumentar el control pélvico y costal a través de posiciones dinámicas.</li>
              <li>Introducir movimientos rotacionales básicos y refinar la conexión costilla-pelvis.</li>
              <li>Desarrollar comodidad con la bisagra de cadera y mejorar la extensión torácica.</li>
              <li>Reforzar el control de la respiración y el feedback interoceptivo.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Objetivos para la Semana 2</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Refinar la conciencia de la alineación pélvica y torácica durante el movimiento.</li>
              <li>Mejorar el control rotacional a través de la columna torácica.</li>
              <li>Mejorar la estabilidad y el control en posiciones transicionales.</li>
              <li>Desarrollar una mejor coordinación entre la respiración y el movimiento.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Consejos para el Éxito</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Concéntrate en mantener la pelvis y las costillas neutrales durante el movimiento.</li>
              <li>Muévete deliberadamente y evita apresurarte en los ejercicios.</li>
              <li>Presta atención a cualquier asimetría entre los lados.</li>
              <li>Prioriza el control de la respiración y la coordinación del tiempo.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
