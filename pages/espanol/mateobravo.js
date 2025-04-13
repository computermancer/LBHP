import WeekLayout from '../../components/WeekLayout';
import MainEspNavbar from '../../components/MainEspNavbar';
import { FaGlobe, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function MateoBravo() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavbar />
      <WeekLayout
        title="Mateo Bravo"
        subtitle="Sobre el Creador"
      >
        <div className="space-y-6">
          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <h2 className="text-orange-300 text-xl font-semibold mb-4">¿Quién Soy?</h2>
            <p className="text-lg leading-relaxed mb-4">
              Este programa fue creado por mí, Mateo Bravo.
            </p>
            <p className="text-lg leading-relaxed">
              Soy un entrenador personal que enfatiza la educación del movimiento y el desarrollo de la fuerza. Puedo ayudar con los objetivos usuales de fitness como construir músculo o perder peso, pero lo que realmente me gusta es trabajar con personas cuyos problemas de movimiento afectan su vida diaria y calidad de vida. Me encanta ayudar a las personas a recuperar la confianza y la fuerza mientras reducen su dolor y miedo.
            </p>
          </section>

          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <h2 className="text-orange-300 text-xl font-semibold mb-4">Mi Viaje</h2>
            <p className="text-lg leading-relaxed">
              Cuando tenía 20 años, tuve dos discos herniados y ciática. Los métodos estándar de recuperación no proporcionaron beneficios duraderos. Lo intenté todo; fisioterapia, masajes, quiropráctico, acupuntura, ventosas, estimulación eléctrica, percusión, yoga, pilates, rodillo de espuma... ¡lo que se te ocurra!
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Resulta que sin la educación del movimiento y entender cómo mi cuerpo debería moverse y sentirse durante el ejercicio y la vida diaria, muchos de estos esfuerzos pueden terminar en un callejón sin salida. Una vez que aprendí a moverme bien y añadí resistencia para desarrollar fuerza en esos movimientos, mi dolor de espalda se convirtió en cosa del pasado.
            </p>
          </section>

          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <h2 className="text-orange-300 text-xl font-semibold mb-4">Sobre Este Programa</h2>
            <p className="text-lg leading-relaxed mb-4">
              Creé este programa para compartir ejercicios y movimientos simples y suaves de los que casi cualquiera puede beneficiarse. Es muy simple, de baja intensidad, bajo impacto, con requisitos mínimos. Es mi primer intento de crear un programa de múltiples semanas con un objetivo específico en mente que incluye PDFs y una aplicación.
            </p>
            <p className="text-lg leading-relaxed">
              A medida que mejoro mis recursos y métodos de trabajo, espero crear muchos más programas para algunas de las solicitudes más comunes; como "Introducción a Ejercicios con Peso Corporal para Principiantes" y una versión intermedia de seguimiento, y después de esos estaría la transición a "Ejercicios Fundamentales Usando Resistencia y Carga"... y por supuesto "Cómo Perder Peso".
            </p>
          </section>

          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <h2 className="text-orange-300 text-xl font-semibold mb-4">Mirando al Futuro</h2>
            <p className="text-lg leading-relaxed mb-4">
              Mi esperanza es que la retroalimentación que reciba de las personas que usen este programa me ayude a crear más de estos materiales para las personas en un futuro próximo.
            </p>
            <p className="text-lg leading-relaxed">
              ¡Gracias por leer!
            </p>
          </section>

          <section className="bg-zinc-900 rounded-lg border border-zinc-700 p-3">
            <h2 className="text-orange-300 text-xl font-semibold mb-4">Conéctate Conmigo</h2>
            <p className="text-lg leading-relaxed mb-8">Puedes encontrar enlaces a mi sitio web y redes sociales a continuación.</p>
            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-1">
                  <FaGlobe className="text-white mr-3 text-2xl" />
                  <span className="text-amber-300 text-xl font-semibold">Sitio Web</span>
                </div>
                <div className="ml-8">
                  <a
                    href="https://www.mateobravo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg leading-relaxed text-blue-500 hover:text-blue-300"
                  >
                    mateobravo.com
                  </a>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-1">
                  <FaFacebook className="text-[#1877F2] mr-3 text-2xl" />
                  <span className="text-amber-300 text-xl font-semibold">Facebook</span>
                </div>
                <div className="ml-8">
                  <a
                    href="https://www.facebook.com/mateobravo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg leading-relaxed text-blue-500 hover:text-blue-300"
                  >
                    facebook.com/mateobravo
                  </a>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-1">
                  <FaYoutube className="text-[#FF0000] mr-3 text-2xl" />
                  <span className="text-amber-300 text-xl font-semibold">Youtube</span>
                </div>
                <div className="ml-8">
                  <a
                    href="https://www.youtube.com/@MateoBravoPersonalTraining"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg leading-relaxed text-blue-500 hover:text-blue-300"
                  >
                    youtube.com/@MateoBravoPersonalTraining
                  </a>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-1">
                  <FaInstagram className="text-[#E4405F] mr-3 text-2xl" />
                  <span className="text-amber-300 text-xl font-semibold">Instagram</span>
                </div>
                <div className="ml-8">
                  <a
                    href="https://www.instagram.com/flatfootmatt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg leading-relaxed text-blue-500 hover:text-blue-300"
                  >
                    instagram.com/flatfootmatt
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </WeekLayout>
    </div>
  );
}
