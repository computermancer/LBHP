import WeekLayout from '../../components/WeekLayout';
import MainEspNavBar from '../../components/MainEspNavBar';

export default function EnProgreso() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavBar />
      <WeekLayout
        title="Trabajo en Progreso"
        subtitle="Actualizaciones de Desarrollo Actual"
      >
        <div className="space-y-6">
          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <h2 className="text-orange-300 text-xl font-semibold mb-4">Evolución Continua</h2>
            <p className="text-lg leading-relaxed">
              Esta versión de LBHP es un trabajo vivo y en constante evolución. Estoy comprometido a mejorar y expandir continuamente el programa basándome en comentarios, experiencia y herramientas en evolución.
            </p>

            <p className="text-lg leading-relaxed">
              Si algo no tiene sentido, te parece confuso, o tienes sugerencias—no dudes en contactarnos. Tu aporte ayuda a dar forma al futuro de este programa.
            </p>
          </section>

          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <h2 className="text-orange-300 text-xl font-semibold mb-4">Qué Viene Siguiente</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
              <li>Utilizando comentarios de usuarios para refinar y mejorar la usabilidad</li>
              <li>Agregando soporte de video para cada ejercicio para ayudar con el aprendizaje y la confianza</li>
              <li>Construyendo un sistema de glosario mejorado para explicar términos y posiciones</li>
              <li>Optimizando la resolución dinámica para una visualización más fluida en tablets y computadoras de escritorio</li>
            </ul>
          </section>
        </div>
      </WeekLayout>
    </div>
  );
}
