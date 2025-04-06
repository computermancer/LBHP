import NavEspanol from '../../components/NavEspanol';

export default function ComoUsar() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Cómo Usar LBHP</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Guía del Programa</h2>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-orange-300 text-xl font-semibold mb-4">Resumen</h3>
              <p className="text-lg leading-relaxed mb-4">
                Este programa se construye sobre una base flexible que respeta el punto de partida de cada usuario. Está diseñado para servir a una amplia gama de individuos—desde aquellos que recuperan fuerza y control después de molestias hasta aquellos que buscan reconstruir una conciencia más profunda y conexión con sus caderas, columna vertebral y respiración.
              </p>
              <p className="text-lg leading-relaxed">
                Hay un camino sugerido, pero no estás obligado a seguirlo. En su lugar, el marco fomenta la curiosidad, la exploración y la adaptabilidad. No estás simplemente siguiendo una rutina—estás desarrollando una relación con tu cuerpo.
              </p>
            </section>

            <section>
              <h3 className="text-orange-300 text-xl font-semibold mb-4">Exploración y Progresión Dirigida por el Usuario</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>Sigue la estructura diaria recomendada o mezcla y combina según cómo se sienta tu cuerpo ese día.</li>
                <li>Omite ejercicios que te parezcan inaccesibles o innecesarios, y vuelve a visitar aquellos que te parezcan particularmente valiosos.</li>
                <li>No hay expectativa de completar todos los ejercicios todos los días—unas pocas repeticiones intencionales pueden ser muy efectivas.</li>
                <li>Usa los ejercicios como una herramienta para lograr la calma del sistema nervioso, relajando músculos que pueden sentirse demasiado comprometidos, restrictivos o generalmente tensos.</li>
                <li>Los movimientos más avanzados pueden usar los ejercicios para mejorar el control motor fino, la fuerza de los estabilizadores profundos y la conciencia intersegmental.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-orange-300 text-xl font-semibold mb-4">La Estructura se Encuentra con la Libertad</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>Cambia el orden de los ejercicios</li>
                <li>Combina ejercicios de diferentes días</li>
                <li>Extiende un día favorito en múltiples sesiones</li>
                <li>Repite una semana si sientes que aún te está sirviendo</li>
              </ul>
            </section>

            <section>
              <h3 className="text-orange-300 text-xl font-semibold mb-4">Diseño de Ejercicios para Aprendizaje Autoguiado</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li><span className="font-semibold">Configuración</span> – para que sepas cómo posicionarte</li>
                <li><span className="font-semibold">Instrucciones</span> – guía paso a paso incluyendo repeticiones, ciclos de respiración y descanso</li>
                <li><span className="font-semibold">Qué Sentir</span> – para ayudarte a notar si lo estás haciendo bien</li>
                <li><span className="font-semibold">Qué Evitar</span> – para mantenerte seguro y alineado</li>
                <li><span className="font-semibold">Señales de Alerta</span> – para alertarte sobre posibles problemas o la necesidad de modificación</li>
                <li><span className="font-semibold">Regresión (Alternativa)</span> – cuando sea aplicable, para una versión más simple o accesible</li>
              </ul>
            </section>

            <section>
              <h3 className="text-orange-300 text-xl font-semibold mb-4">Construyendo Autonomía y Confianza</h3>
              <p className="text-lg leading-relaxed mb-4">
                El objetivo no es la perfección—es la confianza. Confianza en que puedes escuchar a tu cuerpo y tomar decisiones informadas.
              </p>
              <p className="text-lg leading-relaxed mb-2">Este programa desarrollará tu:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
                <li>Conciencia</li>
                <li>Capacidad de autoevaluación</li>
                <li>Disposición a adaptarse</li>
                <li>Confianza para moverse con intención</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
