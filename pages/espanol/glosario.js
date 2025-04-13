import WeekLayout from '../../components/WeekLayout';
import MainEspNavbar from '../../components/MainEspNavbar';

export default function Glosario() {
  return (
    <>
      <MainEspNavbar />
      <WeekLayout
        title="Glosario"
        subtitle="Términos y Conceptos Clave"
      >
        <div className="space-y-6">
          {/* Posiciones y Orientaciones */}
          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <h2 className="text-orange-300 text-xl font-semibold mb-4">Posiciones y Orientaciones</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-lg text-blue-400">Decúbito Supino:</span> <span className="text-lg leading-relaxed">Acostado sobre la espalda con la cara hacia arriba. (Piensa: descansando sobre la espalda.)</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Decúbito Prono:</span> <span className="text-lg leading-relaxed">Acostado sobre el estómago con la cara hacia abajo. (Piensa: acostado boca abajo.)</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Decúbito con Rodillas Flexionadas:</span> <span className="text-lg leading-relaxed">Acostado sobre la espalda con las rodillas dobladas y los pies apoyados en el suelo.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Posición Cuadrúpeda:</span> <span className="text-lg leading-relaxed">Sobre las cuatro extremidades con las manos y rodillas en el suelo. (Piensa: posición de gateo.)</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Decúbito Lateral:</span> <span className="text-lg leading-relaxed">Acostado de lado, generalmente con las rodillas dobladas para estabilidad.</span></li>
            </ul>
          </section>

          {/* Movimientos y Patrones */}
          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <h2 className="text-orange-300 text-xl font-semibold mb-4">Movimientos y Patrones</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-lg text-blue-400">Inclinación Pélvica Posterior:</span> <span className="text-lg leading-relaxed">Meter la pelvis hacia adentro, aplanando la parte baja de la espalda contra el suelo o la pared.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Inclinación Pélvica Anterior:</span> <span className="text-lg leading-relaxed">Inclinar la pelvis hacia adelante, causando que la parte baja de la espalda se arquee.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Desplazamiento de Cadera:</span> <span className="text-lg leading-relaxed">Mover las caderas ligeramente hacia un lado mientras se mantiene el control de la pelvis.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Bisagra de Cadera:</span> <span className="text-lg leading-relaxed">Doblar hacia adelante desde las caderas mientras se mantiene la columna neutral, comúnmente usado en sentadillas y peso muerto.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Balanceo Pélvico:</span> <span className="text-lg leading-relaxed">Movimiento suave hacia adelante y atrás de la pelvis, a menudo usado para aumentar la movilidad y conciencia.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Zancada:</span> <span className="text-lg leading-relaxed">Un paso hacia adelante, atrás o lateral donde una pierna se dobla por la rodilla mientras la otra permanece extendida, usado para fortalecer caderas, glúteos y muslos.</span></li>
            </ul>
          </section>

          {/* Variaciones de Ejercicios */}
          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <h2 className="text-orange-300 text-xl font-semibold mb-4">Variaciones de Ejercicios</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-lg text-blue-400">Posición de Apoyo:</span> <span className="text-lg leading-relaxed">Una postura escalonada donde un pie está ligeramente detrás del otro, a menudo usado para reducir la carga o proporcionar equilibrio extra durante el bisagra o la zancada.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Postura Escalonada:</span> <span className="text-lg leading-relaxed">Una postura dividida donde un pie está ligeramente adelante del otro, permitiendo carga en una sola pierna o trabajo de equilibrio.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Sentadilla Dividida:</span> <span className="text-lg leading-relaxed">Una variación de zancada donde un pie permanece estacionario mientras el otro se mueve durante el ejercicio.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Marcha:</span> <span className="text-lg leading-relaxed">Elevación alternada de una pierna mientras se mantiene la estabilidad a través del core y pelvis.</span></li>
            </ul>
          </section>

          {/* Conceptos de Respiración y Core */}
          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <h2 className="text-orange-300 text-xl font-semibold mb-4">Conceptos de Respiración y Core</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-lg text-blue-400">Respiración Diáfragmática:</span> <span className="text-lg leading-relaxed">Respiración que se enfoca en el movimiento ascendente y descendente del abdomen, permitiendo una mejor oxigenación y relajación del cuerpo.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Respiración Parietal:</span> <span className="text-lg leading-relaxed">Respiración que se enfoca en el movimiento lateral del tórax, mejorando la expansión de los pulmones y la movilidad de las costillas.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Activación del Core:</span> <span className="text-lg leading-relaxed">Contraer los músculos del abdomen y la pelvis para estabilizar la columna vertebral y mejorar el control corporal.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Respiración 360°:</span> <span className="text-lg leading-relaxed">Respiración que busca expandir el tórax en todas direcciones, mejorando la movilidad de las costillas y la capacidad pulmonar.</span></li>
            </ul>
          </section>

          {/* Control y Conciencia */}
          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <h2 className="text-orange-300 text-xl font-semibold mb-4">Control y Conciencia</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-lg text-blue-400">Propiocepción:</span> <span className="text-lg leading-relaxed">La capacidad del cuerpo para sentir su posición, movimiento y orientación en el espacio.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Conciencia Cinestésica:</span> <span className="text-lg leading-relaxed">Entender cómo se mueve y siente tu cuerpo durante el ejercicio.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Movimiento Consciente:</span> <span className="text-lg leading-relaxed">Prestar atención a cómo se siente y mueve tu cuerpo, en lugar de simplemente seguir los movimientos.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Conciencia Corporal:</span> <span className="text-lg leading-relaxed">Entender cómo diferentes partes de tu cuerpo se conectan y mueven juntas.</span></li>
            </ul>
          </section>

          {/* Terminología de Músculos y Cadenas */}
          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <h2 className="text-orange-300 text-xl font-semibold mb-4">Terminología de Músculos y Cadenas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-lg text-blue-400">Cadena Posterior:</span> <span className="text-lg leading-relaxed">El grupo de músculos a lo largo de la parte posterior del cuerpo, incluyendo isquiotibiales, glúteos y espalda baja.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Abducción de Cadera:</span> <span className="text-lg leading-relaxed">Mover la pierna alejándola de la línea media del cuerpo, a menudo fortaleciendo los músculos laterales de la cadera.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Rotación Interna de Cadera (RI):</span> <span className="text-lg leading-relaxed">Rotar el muslo hacia adentro hacia la línea media del cuerpo.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Extensión de Cadera:</span> <span className="text-lg leading-relaxed">Mover la pierna hacia atrás o extender la cadera, a menudo involucrando los glúteos y los isquiotibiales.</span></li>
            </ul>
          </section>

          {/* Estabilidad y Posiciones Isométricas */}
          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <h2 className="text-orange-300 text-xl font-semibold mb-4">Estabilidad y Posiciones Isométricas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-lg text-blue-400">Postura del Caballo:</span> <span className="text-lg leading-relaxed">Una sentadilla ancha y baja donde los muslos están paralelos al suelo, comúnmente usada para desarrollar fuerza isométrica en la parte inferior del cuerpo.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Sostén con Apoyo en Pared:</span> <span className="text-lg leading-relaxed">Una posición donde el cuerpo se estabiliza usando una pared para equilibrio y retroalimentación.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Sostén Isométrico:</span> <span className="text-lg leading-relaxed">Mantener una posición sin movimiento para construir fuerza y resistencia.</span></li>
            </ul>
          </section>

          {/* Términos Misceláneos */}
          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <h2 className="text-orange-300 text-xl font-semibold mb-4">Términos Misceláneos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold text-lg text-blue-400">Peso Muerto Rumano (RDL):</span> <span className="text-lg leading-relaxed">Un ejercicio de bisagra de cadera que se enfoca en la fuerza de la cadena posterior, realizado con una ligera flexión en las rodillas.</span></li>
              <li><span className="font-semibold text-lg text-blue-400">Puente de Glúteos:</span> <span className="text-lg leading-relaxed">Un movimiento donde las caderas se elevan del suelo mientras se está acostado sobre la espalda, involucrando los glúteos y el core.</span></li>
            </ul>
          </section>
        </div>
      </WeekLayout>
    </>
  );
}
