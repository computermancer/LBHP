import WeekLayout from '../../components/WeekLayout';
import MainEspNavBar from '../../components/MainEspNavBar';

export default function Contenido() {
  return (
    <>
      <MainEspNavBar />
      <WeekLayout
        title="Resumen del Programa"
        subtitle="Tablas para Semanas 1 - 5"
      >
        <div className="space-y-6">
          {/* Semana 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">
              Semana 1: Conciencia y Activación
            </h2>

            {/* Día 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 1 - Día 1 - Fundamentos y Conciencia</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Inclinación Pélvica Posterior en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar conciencia de la inclinación pélvica y control lumbar.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Posición Hook</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad pélvica y coordinación.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance en Posición 90-90 Supina</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad central y mantener la alineación costillas-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar isquiotibiales para estabilizar pelvis y core.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 2 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 1 - Día 2 - Expansión Costal y Enfoque en Bisagra de Cadera</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Expansión Costal en Posición Lateral</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la expansión lateral de la caja torácica y mecánica respiratoria.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación Torácica Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad torácica y control rotacional.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Bisagra de Cadera de Pie con Alcance a Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar conciencia y control de la bisagra de cadera.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Hacia Atrás en Cuadrupedia con Columna Neutral</td>
                    <td className="border border-gray-600 p-2 text-base">Promover el control pélvico con columna neutral.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Sentadilla con Apoyo en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar confianza en la posición de sentadilla con apoyo en pared.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 3 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 1 - Día 3 - Control de Respiración y Movimiento Rítmico</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Reinicio de Respiración en Posición Lateral</td>
                    <td className="border border-gray-600 p-2 text-base">Promover el reinicio de la caja torácica y diafragma a través de la respiración enfocada.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance y Giro Rítmico</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control rotacional y la coordinación.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Patrones de Respiración con Apoyo</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar el control constante de la respiración y conciencia costal.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Relajado de Columna</td>
                    <td className="border border-gray-600 p-2 text-base">Fomentar el movimiento fluido a través de la pelvis y columna.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Bilateral Suave</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la movilidad pélvica y relajación.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 1 - Día 4 - Control Pélvico y Costal</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Reinicio del Diafragma en Posición Supina</td>
                    <td className="border border-gray-600 p-2 text-base">Establecer un control diafragmático más profundo y relajación.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Posterior Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la conciencia del posicionamiento pélvico.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Extensión Torácica Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Fortalecer la extensión torácica y el posicionamiento costal.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Desplazamiento de Cadera Supino con Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar control de desplazamientos pélvicos e integración central.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración Sentado con Control Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Mantener control de caja torácica y pelvis con respiración constante.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 5 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 1 - Día 5 - Respiración, Flexión Espinal y Control Central</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración Diafragmática en Posición Cocodrilo</td>
                    <td className="border border-gray-600 p-2 text-base">Fomentar la expansión respiratoria tridimensional completa.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Gato-Vaca con Enfoque en Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar conciencia de flexión y extensión espinal.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Giro de Columna Sentado con Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la rotación torácica con respiración controlada.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Marcha Supina con Control Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar la estabilidad pélvica y costal con movimiento de piernas.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración y Conciencia Pélvica Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la conciencia de la respiración y posicionamiento pélvico.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Semana 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">
              Semana 2: Control Costal e Integración de Cadera
            </h2>

            {/* Día 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 2 - Día 1 - Expansión Costal y Control de Cadera</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Expansión Costal Supina con Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la conciencia costal y control diafragmático.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Desplazamientos de Cadera en Posición Hook</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar control y conciencia de patrones de desplazamiento de cadera.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación Interna de Cadera Lateral con Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la rotación interna de cadera y coordinación respiratoria.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Descenso de Piernas 90-90 Supino</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar la estabilidad central y alineación costillas-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Talón con Apoyo en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar isquiotibiales para estabilizar pelvis y reforzar control.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 2 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 2 - Día 2 - Rotación Torácica y Activación de Cadena Posterior</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance en Cuadrupedia con Control Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar rotación torácica con control estable de la caja torácica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Bisagra de Cadera Sentado con Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el patrón de bisagra y mantener control central.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Desplazamiento de Peso Posterior de Pie</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar desplazamiento posterior para control equilibrado de cadera.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Marcha de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar activación de cadena posterior y control pélvico.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Ejercicio de Rotación Interna y Extensión de Cadera Prono</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar conciencia de rotación y extensión de cadera.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 3 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 2 - Día 3 - Control Pélvico y Estabilidad de Cadera</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Reloj Pélvico en Posición Hook</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar conciencia sutil y control de la inclinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Reinicio del Diafragma Supino con Alcance</td>
                    <td className="border border-gray-600 p-2 text-base">Refinar el control respiratorio con alcance activo de brazos.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación de Columna Sentado con Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la rotación torácica con control respiratorio.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Abducción de Cadera Lateral con Apoyo</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la fuerza lateral de cadera y estabilidad pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Sentadilla Profunda con Apoyo en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar confianza en posición de sentadilla profunda manteniendo control.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 2 - Día 4 - Desplazamiento Costal y Movilidad Torácica</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Desplazamiento Costal Supino con Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar conciencia costal y control respiratorio asimétrico.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Posterior Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Mantener conciencia pélvica y mejorar ritmo pélvico.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Flexión/Extensión Torácica Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar conciencia de flexión y extensión espinal.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Desplazamientos de Cadera Supino con Estabilidad Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar estabilidad central y de cadera a través de patrones de desplazamiento.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración Sentado con Conciencia Pélvica</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar control de respiración y posicionamiento pélvico.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 5 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 2 - Día 5 - Respiración, Rotación y Coordinación Pélvica</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración en Cocodrilo con Expansión Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar expansión respiratoria diafragmática completa.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Gato-Vaca con Enfoque Rotacional</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar flexión/extensión espinal e incorporar rotación.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Giro de Columna Sentado con Alcance de Brazo</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar control rotacional y movilidad escapular.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Marcha Supina con Control Pélvico</td>
                    <td className="border border-gray-600 p-2 text-base">Fortalecer coordinación costillas-pelvis y control central.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración Sentado con Desplazamientos de Cadera</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar conciencia de desplazamientos pélvicos manteniendo control respiratorio.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Semana 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">
              Semana 3: Control Pélvico e Integración de la Respiración
            </h2>

            {/* Día 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 3 - Día 1 - Control Pélvico e Integración de la Respiración</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración en Posición Hook con Conciencia Pélvica</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar control respiratorio y establecer conciencia del movimiento pélvico.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Desplazamiento de Cadera Sentado con Estabilidad Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar control de desplazamiento de cadera con movimiento costal mínimo.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Reinicio del Diafragma Supino con Alcance</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar control costal durante ciclos respiratorios.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Hacia Atrás en Cuadrupedia con Enfoque Respiratorio</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar movilidad pélvica y mantener estabilidad central.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Bisagra con Apoyo en Pared con Alcance de Brazo</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar activación de cadena posterior manteniendo control costal.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 2 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 3 - Día 2 - Coordinación de Costillas y Cadera</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Expansión Costal Sentado con Control Respiratorio</td>
                    <td className="border border-gray-600 p-2 text-base">Promover movilidad costal y expansión respiratoria lateral.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Marcha Supina con Control Central</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar estabilidad pélvica durante el movimiento de piernas.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación Torácica Sentado con Alcance de Brazo</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar control rotacional y movilidad.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Marcha de Isquiotibiales en Pared con Control Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Activar la cadena posterior manteniendo estabilidad costal.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Ejercicio de Rotación Interna y Extensión de Cadera Prono</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar conciencia de rotación y extensión de cadera.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 3 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 3 - Día 3 - Movilidad Espinal y Control Central</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Gato-Vaca con Conciencia Respiratoria</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar control de flexión y extensión espinal.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Posterior Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar control pélvico y conciencia del movimiento.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Desplazamiento Costal 90-90 Supino con Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar coordinación costal y pélvica durante la respiración.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Sentadilla con Apoyo en Pared con Alcance</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar confianza en posición de sentadilla con movimiento de tren superior.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Giro de Columna Supino con Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar rotación torácica con control respiratorio.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 3 - Día 4 - Estabilidad de Cadera y Costillas</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Desplazamientos de Cadera Supino con Conciencia Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar movilidad lateral de cadera manteniendo estabilidad costal.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance de Brazo y Pierna en Cuadrupedia con Control</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar equilibrio y estabilidad con movimiento controlado.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared con Enfoque Respiratorio</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar activación de isquiotibiales y control central.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Abducción de Cadera Lateral con Apoyo</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar fuerza lateral de cadera y estabilidad.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Giro de Columna Sentado con Alcance de Brazo</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar control rotacional y movilidad.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 5 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 3 - Día 5 - Respiración, Movilidad y Relajación</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración en Cocodrilo con Expansión Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar la expansión respiratoria de todo el cuerpo.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Supino con Enfoque Respiratorio</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar movimiento pélvico suave con movimiento guiado por respiración.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Conciencia Pélvica Posterior Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control del posicionamiento pélvico en posiciones sentadas.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Marcha con Apoyo en Pared y Estabilidad Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar el control central y costal durante movimientos dinámicos.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación Interna de Cadera Lateral y Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la movilidad de cadera y el control respiratorio.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Semana 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">
              Semana 4: Estabilidad Costal y Pélvica en Movimiento
            </h2>

            {/* Día 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 4 - Día 1 - Estabilidad Costal y Pélvica en Movimiento</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Desplazamiento Costal Supino con Control Respiratorio</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar control costal lateral manteniendo estabilidad pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Desplazamientos de Cadera Sentado con Conciencia Respiratoria</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar control pélvico y conciencia de cadera en posiciones sentadas.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Expansión Costal en Posición Hook con Marcha</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar estabilidad central y costal mientras se añade movimiento dinámico.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Bisagra con Apoyo en Pared con Alcance de Brazo</td>
                    <td className="border border-gray-600 p-2 text-base">Fortalecer cadena posterior manteniendo control costal.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Hacia Atrás en Cuadrupedia con Enfoque en Alcance</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar movilidad pélvica con conciencia costal y respiratoria controlada.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 2 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 4 - Día 2 - Estabilidad Central y Pélvica en Acción</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Flexión y Extensión Torácica Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar movilidad torácica manteniendo control pélvico.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Descenso de Piernas 90-90 con Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar control central al bajar las piernas con estabilidad.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación de Columna Sentado con Alcance de Brazo</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar control rotacional y movilidad torácica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Marcha de Isquiotibiales en Pared con Estabilidad Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar control de cadena posterior manteniendo control costal.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación Interna y Extensión de Cadera Prono con Control</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar conciencia de rotación y extensión de cadera.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 3 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 4 - Día 3 - Control Espinal y Movilidad de Cadera</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Gato-Vaca con Expansión Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar flexión y extensión espinal con control respiratorio.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Posterior Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar conciencia de movimiento pélvico en posiciones sentadas.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Desplazamiento Costal 90-90 Supino con Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar coordinación costal y pélvica durante la respiración.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Sentadilla Profunda con Apoyo en Pared y Alcance</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar estabilidad en sentadilla con conciencia costal y pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Giro de Columna Supino con Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar rotación torácica con respiración controlada.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 4 - Día 4 - Control de Cadera y Costillas Bajo Carga</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Desplazamientos de Cadera Supino con Conciencia Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar movilidad lateral de cadera manteniendo estabilidad costal.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance de Brazo y Pierna en Cuadrupedia con Control</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar equilibrio y estabilidad con movimiento controlado.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared con Enfoque Respiratorio</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar activación de isquiotibiales y control central.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Abducción de Cadera Lateral con Apoyo</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar fuerza lateral de cadera y estabilidad.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Giro de Columna Sentado con Alcance de Brazo</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar control rotacional y movilidad.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 5 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 4 - Día 5 - Respiración, Movilidad y Relajación</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración en Cocodrilo con Expansión Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar la expansión respiratoria de todo el cuerpo.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Supino con Enfoque Respiratorio</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar movimiento pélvico suave con movimiento guiado por respiración.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Conciencia Pélvica Posterior Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control del posicionamiento pélvico en posiciones sentadas.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Marcha con Apoyo en Pared y Estabilidad Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar el control central y costal durante movimientos dinámicos.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación Interna de Cadera Lateral y Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la movilidad de cadera y el control respiratorio.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Semana 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">
              Semana 5: Progresión de Fuerza y Control
            </h2>

            {/* Día 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 5 - Día 1 - Control y Fuerza del Tren Inferior</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Sentadillas con Peso Corporal y Control Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar mecánica de sentadilla con estabilidad central.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Postura de Caballo (Paralelo al Suelo)</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar fuerza isométrica y resistencia en el tren inferior.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">RDL con Apoyo y Control de Cadera</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar cadena posterior y estabilidad de cadera.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Sentadilla Dividida con Apoyo en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Fortalecer glúteos, cuádriceps y core en posición dividida.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Marcha Supina con Control Central</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar estabilidad pélvica durante movimiento dinámico.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 2 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 5 - Día 2 - Control de Pierna Individual y Cadera</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Sentadillas con Postura Escalonada y Estabilidad Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar carga unilateral y control pélvico.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Estocadas Laterales con Control Respiratorio</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar control lateral de cadera y estabilidad costal.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Abducción de Cadera Lateral con Enfoque Respiratorio</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar fuerza lateral de cadera con control respiratorio.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Puente de Glúteos Unilateral con Estabilidad Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar fuerza de cadena posterior y control de cadera.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Desplazamiento Costal Supino con Activación Central</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar control central con desplazamiento costal sutil.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 3 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 5 - Día 3 - Cadena Posterior y Control de Cadera</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">RDL con Postura Escalonada y Conciencia de Cadera</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar fuerza de cadena posterior y control unilateral.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Estocadas Frontales con Control Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar fuerza y estabilidad en patrones de estocada frontal.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared con Estabilidad Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Activar isquiotibiales y reforzar control central.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Puente de Glúteos Bilateral con Control Costal y Pélvico</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar extensión de cadera y estabilidad central.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Giro de Columna Supino con Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar rotación torácica con respiración controlada.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 5 - Día 4 - Control de Tren Superior y Core</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Flexiones en Pared con Estabilidad Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Introducir empuje de tren superior manteniendo control central.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Flexiones en Silla con Estabilidad Pélvica</td>
                    <td className="border border-gray-600 p-2 text-base">Progresar empuje con mayor carga manteniendo control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Flexiones en Suelo con Control Costal y Pélvico</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar fuerza de tren superior y core en posición de plancha.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación de Columna Sentado con Alcance</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar rotación torácica y movimiento escapular.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación Interna de Cadera Lateral y Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar movilidad de cadera y control respiratorio.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 5 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 5 - Día 5 - Movilidad, Respiración y Control</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Postura de Caballo con Control Costal (Mantener Más)</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar resistencia isométrica del tren inferior.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Elevaciones de Talón con Control Costal y Pélvico</td>
                    <td className="border border-gray-600 p-2 text-base">Fortalecer pantorrillas manteniendo alineación neutral.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Elevaciones de Tibia con Conciencia Respiratoria</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar fuerza tibial anterior y equilibrio.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Expansión Costal en Posición Hook con Marcha</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar control central y respiratorio con marcha.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Supino con Control Respiratorio</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar movilidad pélvica y conciencia guiada por respiración.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </WeekLayout>
    </>
  );
}
