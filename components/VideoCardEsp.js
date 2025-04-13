import { useState } from 'react';

export default function VideoCardEsp({ videoId, videoStart }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-lg mb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-3 px-4 rounded-t-lg border border-gray-600 flex items-center justify-start"
      >
        {isExpanded ? 'Ocultar Video' : 'Mostrar Video'}
        <span className="ml-2">
          {isExpanded ? '▲' : '▼'}
        </span>
      </button>
      {isExpanded && (
        <div className="p-3">
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?start=${videoStart}&autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
              title="Reproductor de video de YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
