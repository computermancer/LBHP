import { DrillData } from '../types/drill';

interface DrillTemplateProps extends DrillData {}

export default function DrillTemplate({
  title,
  videoUrl,
  videoTimestamp,
  setup,
  instructions,
  setsReps,
  whatToFeel,
  whatToAvoid,
  redFlags,
  regression
}: DrillTemplateProps) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      
      <div className="mb-6">
        <iframe
          width="100%"
          height="315"
          src={`${videoUrl}?start=${videoTimestamp}`}
          title={title}
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Setup:</h3>
        <ul className="list-disc list-inside">
          {setup.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
        <ul className="list-disc list-inside">
          {instructions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Sets / Reps / Breath / Rest:</h3>
        <ul className="list-disc list-inside">
          {setsReps.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What to Feel:</h3>
        <ul className="list-disc list-inside">
          {whatToFeel.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What to Avoid:</h3>
        <ul className="list-disc list-inside">
          {whatToAvoid.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Red Flags:</h3>
        <ul className="list-disc list-inside">
          {redFlags.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Regression:</h3>
        <ul className="list-disc list-inside">
          {regression.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
} 