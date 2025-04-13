import WeekLayout from '../../components/WeekLayout';
import MainEspNavBar from '../../components/MainEspNavBar';

export default function SobreLBHP() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavBar />
      <WeekLayout
        title="Sobre LBHP"
        subtitle="Entendiendo el Programa"
      >
        <div className="space-y-6">
          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <p className="text-lg leading-relaxed mb-4">
              El Programa de Espalda Baja y Caderas (LBHP) es un programa guiado basado en ejercicios con peso corporal diseñado para ayudar a las personas a moverse mejor y restaurar la confianza en sus caderas, pelvis y espalda baja.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Ya sea que te hayas sentido rígido, estés lidiando con molestias recurrentes o simplemente sepas que algo no está bien en tu movimiento, LBHP te ofrece un camino claro y de apoyo hacia adelante. Cada semana, explorarás ejercicios que mejoran el control, la movilidad y la conexión entre tus caderas, columna vertebral, costillas y respiración.
            </p>

            <p className="text-lg leading-relaxed">
              Este programa es ideal para personas que han sido dadas de alta después de la rehabilitación o que desean mejorar su función, prevenir problemas y construir una relación más profunda con su cuerpo. Si actualmente estás en dolor agudo o te estás recuperando de una cirugía, por favor consulta primero con un proveedor médico autorizado.
            </p>
          </section>
        </div>
      </WeekLayout>
    </div>
  );
}
