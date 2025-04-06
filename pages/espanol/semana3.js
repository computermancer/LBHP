import NavEspanol from '../../components/NavEspanol';
import Link from 'next/link';

export default function Semana3() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-white min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Semana 3</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Control Pélvico e Integración Respiratoria</h2>
          
          <div className="flex gap-1 mb-8">
            <Link href="/espanol/semana3/dia1" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 1</Link>
            <Link href="/espanol/semana3/dia2" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 2</Link>
            <Link href="/espanol/semana3/dia3" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 3</Link>
            <Link href="/espanol/semana3/dia4" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 4</Link>
            <Link href="/espanol/semana3/dia5" className="flex-1 bg-gray-700 hover:bg-gray-600 text-orange-300 text-lg font-bold py-2 px-2 rounded text-center">Día 5</Link>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Propósito de Esta Semana</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Reforzar la coordinación pélvica y costal durante movimientos más dinámicos.</li>
              <li>Continuar desarrollando el control en la bisagra de cadera y la movilidad espinal.</li>
              <li>Introducir patrones rotacionales adicionales para la movilidad torácica.</li>
              <li>Mejorar la conciencia respiratoria para apoyar la estabilidad y el control.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Objetivos para la Semana 3</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Construir confianza en movimientos más profundos de cadera y flexión/extensión espinal.</li>
              <li>Mejorar la fuerza y movilidad rotacional a través de la integración torácica y lumbar.</li>
              <li>Desarrollar un mayor control de la respiración mientras se realizan movimientos dinámicos.</li>
              <li>Refinar la conciencia de la postura y alineación en diferentes posiciones.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Consejos para el Éxito</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Concéntrate en mantener una pelvis y caja torácica estables durante cada movimiento.</li>
              <li>Muévete con control—prioriza la calidad sobre la cantidad.</li>
              <li>Continúa usando la respiración como guía para mejorar la eficiencia del movimiento.</li>
              <li>Monitorea cualquier asimetría entre los lados y ajusta según sea necesario.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
