import NavEspanol from '../../components/NavEspanol';
import Link from 'next/link';

export default function EnProgreso() {
  return (
    <>
      <NavEspanol />
      <main className="px-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto py-8">
          <h1 className="text-orange-300 text-4xl font-bold mb-2">Trabajo en Progreso</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Actualizaciones de Desarrollo Actual</h2>

          <section className="space-y-6">
            <p className="text-lg leading-relaxed">
              Esta versión de LBHP es un trabajo vivo y en constante evolución. Estoy comprometido a mejorar y expandir continuamente el programa basándome en comentarios, experiencia y herramientas en evolución.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-orange-300">Estas son algunas cosas actualmente en desarrollo:</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Actualizando instrucciones y señales según sea necesario para mayor claridad y precisión</li>
                <li>Utilizando comentarios de usuarios para refinar y mejorar la usabilidad</li>
                <li>Agregando soporte de video para cada ejercicio para ayudar con el aprendizaje y la confianza</li>
                <li>Creando una versión en español para mayor accesibilidad</li>
                <li>Construyendo un sistema de glosario mejorado para explicar términos y posiciones</li>
                <li>Optimizando la resolución dinámica para una visualización más fluida en tablets y computadoras de escritorio</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              Si algo no tiene sentido, te parece confuso, o tienes sugerencias—no dudes en contactarnos. Tu aporte ayuda a dar forma al futuro de este programa.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
