import NavEspanol from '../../components/NavEspanol';
import Link from 'next/link';

export default function Glosario() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Glosario</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Términos y Conceptos Clave</h2>
          
          <section className="mb-6">
            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Posiciones y Orientaciones</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-blue-500">Decúbito Supino:</span> <span className="text-lg leading-relaxed">Acostado sobre la espalda con la cara hacia arriba. (Piensa: descansando sobre la espalda.)</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Decúbito Prono:</span> <span className="text-lg leading-relaxed">Acostado sobre el estómago con la cara hacia abajo. (Piensa: acostado boca abajo.)</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Decúbito con Rodillas Flexionadas:</span> <span className="text-lg leading-relaxed">Acostado sobre la espalda con las rodillas dobladas y los pies apoyados en el suelo.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Posición Cuadrúpeda:</span> <span className="text-lg leading-relaxed">Sobre las cuatro extremidades con las manos y rodillas en el suelo. (Piensa: posición de gateo.)</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Decúbito Lateral:</span> <span className="text-lg leading-relaxed">Acostado de lado, generalmente con las rodillas dobladas para estabilidad.</span></li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Movimientos y Patrones</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-blue-500">Inclinación Pélvica Posterior:</span> <span className="text-lg leading-relaxed">Meter la pelvis hacia adentro, aplanando la parte baja de la espalda contra el suelo o la pared.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Inclinación Pélvica Anterior:</span> <span className="text-lg leading-relaxed">Inclinar la pelvis hacia adelante, causando que la parte baja de la espalda se arquee.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Desplazamiento de Cadera:</span> <span className="text-lg leading-relaxed">Mover las caderas ligeramente hacia un lado mientras se mantiene el control de la pelvis.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Bisagra de Cadera:</span> <span className="text-lg leading-relaxed">Doblar hacia adelante desde las caderas mientras se mantiene la columna neutral, comúnmente usado en sentadillas y peso muerto.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Balanceo Pélvico:</span> <span className="text-lg leading-relaxed">Movimiento suave hacia adelante y atrás de la pelvis, a menudo usado para aumentar la movilidad y conciencia.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Zancada:</span> <span className="text-lg leading-relaxed">Un paso hacia adelante, atrás o lateral donde una pierna se dobla por la rodilla mientras la otra permanece extendida, usado para fortalecer caderas, glúteos y muslos.</span></li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Variaciones de Ejercicios</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-blue-500">Posición de Apoyo:</span> <span className="text-lg leading-relaxed">Una postura escalonada donde un pie está ligeramente detrás del otro, a menudo usado para reducir la carga o proporcionar equilibrio extra durante el bisagra o la zancada.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Postura Escalonada:</span> <span className="text-lg leading-relaxed">Una postura dividida donde un pie está ligeramente adelante del otro, permitiendo carga en una sola pierna o trabajo de equilibrio.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Sentadilla Dividida:</span> <span className="text-lg leading-relaxed">Una variación de zancada donde un pie permanece estacionario mientras el otro se mueve durante el ejercicio.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Marcha:</span> <span className="text-lg leading-relaxed">Elevación alternada de una pierna mientras se mantiene la estabilidad a través del core y la pelvis.</span></li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Conceptos de Respiración y Core</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-blue-500">Respiración Diafragmática:</span> <span className="text-lg leading-relaxed">Respiración profunda que involucra el diafragma, expandiendo el vientre en lugar de levantar el pecho.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Expansión Costal:</span> <span className="text-lg leading-relaxed">Permitir que la caja torácica se mueva hacia afuera durante la inhalación para una capacidad respiratoria completa.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Control de la Respiración:</span> <span className="text-lg leading-relaxed">La capacidad de mantener una respiración constante e intencional durante el movimiento.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Estabilidad del Core:</span> <span className="text-lg leading-relaxed">Mantener un core sólido y estable para prevenir movimientos no deseados durante el ejercicio.</span></li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Control y Conciencia</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-blue-500">Propiocepción:</span> <span className="text-lg leading-relaxed">La capacidad del cuerpo para sentir su posición, movimiento y orientación en el espacio.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Conciencia Cinestésica:</span> <span className="text-lg leading-relaxed">Entender cómo se mueve y siente tu cuerpo durante el ejercicio.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Movimiento Consciente:</span> <span className="text-lg leading-relaxed">Prestar atención a cómo se siente y mueve tu cuerpo, en lugar de simplemente seguir los movimientos.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Conciencia Corporal:</span> <span className="text-lg leading-relaxed">Entender cómo diferentes partes de tu cuerpo se conectan y mueven juntas.</span></li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Terminología de Músculos y Cadenas</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-blue-500">Cadena Posterior:</span> <span className="text-lg leading-relaxed">El grupo de músculos a lo largo de la parte posterior del cuerpo, incluyendo isquiotibiales, glúteos y espalda baja.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Abducción de Cadera:</span> <span className="text-lg leading-relaxed">Mover la pierna alejándola de la línea media del cuerpo, a menudo fortaleciendo los músculos laterales de la cadera.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Rotación Interna de Cadera (RI):</span> <span className="text-lg leading-relaxed">Rotar el muslo hacia adentro hacia la línea media del cuerpo.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Extensión de Cadera:</span> <span className="text-lg leading-relaxed">Mover la pierna hacia atrás o extender la cadera, a menudo involucrando los glúteos y los isquiotibiales.</span></li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Estabilidad y Posiciones Isométricas</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-blue-500">Postura del Caballo:</span> <span className="text-lg leading-relaxed">Una sentadilla ancha y baja donde los muslos están paralelos al suelo, comúnmente usada para desarrollar fuerza isométrica en la parte inferior del cuerpo.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Sostén con Apoyo en Pared:</span> <span className="text-lg leading-relaxed">Una posición donde el cuerpo se estabiliza usando una pared para equilibrio y retroalimentación.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Sostén Isométrico:</span> <span className="text-lg leading-relaxed">Mantener una posición sin movimiento para construir fuerza y resistencia.</span></li>
            </ul>

            <h2 className="text-orange-300 text-2xl font-semibold mb-4">Términos Misceláneos</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><span className="font-semibold text-xl text-blue-500">Peso Muerto Rumano (RDL):</span> <span className="text-lg leading-relaxed">Un ejercicio de bisagra de cadera que se enfoca en la fuerza de la cadena posterior, realizado con una ligera flexión en las rodillas.</span></li>
              <li><span className="font-semibold text-xl text-blue-500">Puente de Glúteos:</span> <span className="text-lg leading-relaxed">Un movimiento donde las caderas se elevan del suelo mientras se está acostado sobre la espalda, involucrando los glúteos y el core.</span></li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
