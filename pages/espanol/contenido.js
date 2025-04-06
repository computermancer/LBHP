import NavEspanol from '../../components/NavEspanol';
import Link from 'next/link';

export default function Contenido() {
  return (
    <>
      <NavEspanol />

      <main className="pt-20 p-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Resumen del Programa</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Tablas para las Semanas 1 - 5</h2>

          {/* Semana 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-200">
              Semana 1: Conciencia y Activación
            </h2>

            {/* Día 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 1 - Día 1 - Trabajo Base y Conciencia</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad y coordinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance 90-90 en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar los isquiotibiales para estabilizar la pelvis y el core.</td>
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
                    <td className="border border-gray-600 p-2 text-base">Mejorar la expansión lateral de la caja torácica y la mecánica respiratoria.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación Torácica Sentada</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad torácica y el control rotacional.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Bisagra de Cadera de Pie con Alcance a la Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar el patrón de bisagra de cadera y la estabilidad del core.</td>
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
                    <td className="border border-gray-600 p-2 text-base">Respiración Reset en Decúbito Lateral</td>
                    <td className="border border-gray-600 p-2 text-base">Promover el reset de la caja torácica y el diafragma a través de la respiración enfocada.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance y Rollo Rítmico</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control rotacional y la coordinación.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración Apoyada con Patrón</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar el control de la respiración y la conciencia de la caja torácica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Espinal Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Encourajar el movimiento fluido a través de la pelvis y la espina.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Bilateral Suave</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la movilidad pélvica y la relajación.</td>
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
                    <td className="border border-gray-600 p-2 text-base">Reset Diáfragma Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Establecer un control diáfragmatico más profundo y relajado.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la conciencia de la posición pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Extensión Torácica Sentada</td>
                    <td className="border border-gray-600 p-2 text-base">Fortalecer la extensión torácica y la alineación costal.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Desplazamiento Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Construir el control de los desplazamientos pélvicos y la integración del core.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración Sentado con Control Costal</td>
                    <td className="border border-gray-600 p-2 text-base">Mantener el control de la caja torácica y pélvica con la respiración estable.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 5 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 1 - Día 5 - Respiración, Flexión Espinal y Control del Core</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Nombre del Ejercicio</th>
                    <th className="border border-gray-600 p-2 text-base">Propósito/Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración Diáfragmica en Posición Crocodilo</td>
                    <td className="border border-gray-600 p-2 text-base">Encourajar la expansión completa 3D del aire.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Vaca-Vacas con Enfoque de Respiración</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar la flexión y extensión espinal y la conciencia.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Espinal Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la rotación torácica con respiración controlada.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Marcha Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Reforzar la estabilidad pélvica y costal con movimiento de pierna.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración y Conciencia Pélvica</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la conciencia de la respiración y la posición pélvica.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Semana 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-200">
              Semana 2: Control de Costal y Integración de Cadera
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
                    <td className="border border-gray-600 p-2 text-base">Expansión Costal en Posición Lateral</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la expansión lateral de la caja torácica y la mecánica respiratoria.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación Torácica Sentada</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad torácica y el control rotacional.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Bisagra de Cadera de Pie con Alcance a la Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar el patrón de bisagra de cadera y la estabilidad del core.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Espinal Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Promover el control del core con espina neutra.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Construir confianza en la posición de pie con apoyo de pared.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 2 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 2 - Día 2 - Rotación Torácica y Activación de Cadera Posterior</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Mejorar la expansión lateral de la caja torácica y la mecánica respiratoria.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación Torácica Sentada</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad torácica y el control rotacional.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Bisagra de Cadera de Pie con Alcance a la Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar el patrón de bisagra de cadera y la estabilidad del core.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Espinal Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Promover el control del core con espina neutra.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Construir confianza en la posición de pie con apoyo de pared.</td>
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
                    <td className="border border-gray-600 p-2 text-base">Expansión Costal en Posición Lateral</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la expansión lateral de la caja torácica y la mecánica respiratoria.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación Torácica Sentada</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad torácica y el control rotacional.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Bisagra de Cadera de Pie con Alcance a la Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar el patrón de bisagra de cadera y la estabilidad del core.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Espinal Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Promover el control del core con espina neutra.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Construir confianza en la posición de pie con apoyo de pared.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 2 - Día 4 - Desplazamiento de Costal y Movilidad Torácica</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Mejorar la expansión lateral de la caja torácica y la mecánica respiratoria.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación Torácica Sentada</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad torácica y el control rotacional.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Bisagra de Cadera de Pie con Alcance a la Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar el patrón de bisagra de cadera y la estabilidad del core.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Espinal Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Promover el control del core con espina neutra.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Construir confianza en la posición de pie con apoyo de pared.</td>
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
                    <td className="border border-gray-600 p-2 text-base">Expansión Costal en Posición Lateral</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la expansión lateral de la caja torácica y la mecánica respiratoria.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación Torácica Sentada</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad torácica y el control rotacional.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Bisagra de Cadera de Pie con Alcance a la Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar el patrón de bisagra de cadera y la estabilidad del core.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Espinal Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Promover el control del core con espina neutra.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Construir confianza en la posición de pie con apoyo de pared.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Semana 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-200">
              Semana 3: Control Pélvico y Integración de Respiración
            </h2>

            {/* Día 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 3 - Día 1 - Control Pélvico y Integración de Respiración</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad y coordinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance 90-90 en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar los isquiotibiales para estabilizar la pelvis y el core.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 2 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 3 - Día 2 - Coordinación de Costal y Cadera</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Mejorar la expansión lateral de la caja torácica y la mecánica respiratoria.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rotación Torácica Sentada</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad torácica y el control rotacional.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Bisagra de Cadera de Pie con Alcance a la Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar el patrón de bisagra de cadera y la estabilidad del core.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Espinal Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Promover el control del core con espina neutra.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Construir confianza en la posición de pie con apoyo de pared.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 3 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 3 - Día 3 - Movilidad Espinal y Control del Core</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad y coordinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance 90-90 en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar los isquiotibiales para estabilizar la pelvis y el core.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 3 - Día 4 - Estabilidad de Cadera y Costal</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad y coordinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance 90-90 en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar los isquiotibiales para estabilizar la pelvis y el core.</td>
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
                    <td className="border border-gray-600 p-2 text-base">Inclinación Pélvica Posterior en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar conciencia de la inclinación pélvica y control lumbar.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad y coordinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance 90-90 en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar los isquiotibiales para estabilizar la pelvis y el core.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Semana 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-200">
              Semana 4: Estabilidad Pélvica y Costal en Movimiento
            </h2>

            {/* Día 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 4 - Día 1 - Estabilidad Pélvica y Costal</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad y coordinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance 90-90 en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar los isquiotibiales para estabilizar la pelvis y el core.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 2 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 4 - Día 2 - Core y Estabilidad Pélvica en Acción</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad y coordinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance 90-90 en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar los isquiotibiales para estabilizar la pelvis y el core.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 3 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 4 - Día 3 - Estabilidad de Cadera y Costal</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad y coordinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance 90-90 en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar los isquiotibiales para estabilizar la pelvis y el core.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 4 - Día 4 - Estabilidad de Cadera y Costal</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad y coordinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance 90-90 en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar los isquiotibiales para estabilizar la pelvis y el core.</td>
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
                    <td className="border border-gray-600 p-2 text-base">Inclinación Pélvica Posterior en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Desarrollar conciencia de la inclinación pélvica y control lumbar.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad y coordinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance 90-90 en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar los isquiotibiales para estabilizar la pelvis y el core.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Semana 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-200">
              Semana 5: Progresión de Fuerza y Control
            </h2>

            {/* Día 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 5 - Día 1 - Progresión de Fuerza y Control</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad y coordinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance 90-90 en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar los isquiotibiales para estabilizar la pelvis y el core.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 2 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 5 - Día 2 - Estabilidad de Cadera y Costal</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad y coordinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance 90-90 en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar los isquiotibiales para estabilizar la pelvis y el core.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 3 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 5 - Día 3 - Estabilidad de Cadera y Costal</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad y coordinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance 90-90 en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar los isquiotibiales para estabilizar la pelvis y el core.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 5 - Día 4 - Estabilidad de Cadera y Costal</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad y coordinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance 90-90 en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar los isquiotibiales para estabilizar la pelvis y el core.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Día 5 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Semana 5 - Día 5 - Respiración, Movilidad y Relajación</h3>
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
                    <td className="border border-gray-600 p-2 text-base">Respiración Abdominal en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar el control de la respiración y la función diafragmática.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Balanceo Pélvico Sentado</td>
                    <td className="border border-gray-600 p-2 text-base">Aumentar la movilidad y coordinación pélvica.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Alcance 90-90 en Decúbito</td>
                    <td className="border border-gray-600 p-2 text-base">Mejorar la estabilidad del core y mantener la alineación costilla-pelvis.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Presión de Isquiotibiales en Pared</td>
                    <td className="border border-gray-600 p-2 text-base">Activar los isquiotibiales para estabilizar la pelvis y el core.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
