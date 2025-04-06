import NavEspanol from '../../components/NavEspanol';
import Link from 'next/link';

export default function SobreLBHP() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Sobre LBHP</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Entendiendo el Programa</h2>

          <section className="space-y-6">
            <p className="text-lg leading-relaxed">
              El Programa de Espalda Baja y Caderas (LBHP) es un programa guiado basado en ejercicios con peso corporal diseñado para ayudar a las personas a moverse mejor y restaurar la confianza en sus caderas, pelvis y espalda baja.
            </p>

            <p className="text-lg leading-relaxed">
              Ya sea que te hayas sentido rígido, estés lidiando con molestias recurrentes o simplemente sepas que algo no está bien en tu movimiento, LBHP te ofrece un camino claro y de apoyo hacia adelante. Cada semana, explorarás ejercicios que mejoran el control, la movilidad y la conexión entre tus caderas, columna vertebral, costillas y respiración.
            </p>

            <p className="text-lg leading-relaxed">
              Este programa es ideal para personas que han sido dadas de alta después de la rehabilitación o que desean mejorar su función, prevenir problemas y construir una relación más profunda con su cuerpo. Si actualmente estás en dolor agudo o te estás recuperando de una cirugía, por favor consulta primero con un proveedor médico autorizado.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
