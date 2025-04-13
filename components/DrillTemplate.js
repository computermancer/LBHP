import { useState } from 'react';

export default function DrillTemplate({ 
  videoId, 
  videoStart,
  setup,
  instructions,
  setsReps,
  whatToFeel,
  whatToAvoid,
  redFlags,
  regression,
  tips
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Collapsible Video Section */}
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded mb-2"
        >
          {isOpen ? 'Hide Video' : 'Show Video'}
        </button>
        {isOpen && videoId && (
          <div className="mt-4 relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?si=ag7LzQN-vqxK0DbX&amp;start=${videoStart || 0}`}
              title="Drill Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      {setup && (
        <section>
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Setup:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            {setup.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {instructions && (
        <section>
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Instructions:</h3>
          <ol className="list-decimal list-inside text-white text-lg">
            {instructions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </section>
      )}

      {setsReps && (
        <section>
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Sets & Reps:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            {setsReps.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {whatToFeel && (
        <section>
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Feel:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            {whatToFeel.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {whatToAvoid && (
        <section>
          <h3 className="text-xl text-orange-300 font-semibold mb-2">What to Avoid:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            {whatToAvoid.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {redFlags && (
        <section>
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Red Flags:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            {redFlags.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {regression && (
        <section>
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Regression:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            {regression.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {tips && (
        <section>
          <h3 className="text-xl text-orange-300 font-semibold mb-2">Tips:</h3>
          <ul className="list-disc list-inside text-white text-lg">
            {tips.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}