import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function NavEspanol() {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      console.log('Semana 1 button dimensions:', {
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      });
    }
  }, []);

  return (
    <div className="sticky top-0 z-50 flex justify-center bg-zinc-900 px-8 shadow-md">
      <nav className="flex gap-1 text-gray-200 py-2 max-w-[500px] w-full mx-auto">
        <Link className="flex-1 bg-zinc-800 px-4 py-2 rounded text-xl hover:bg-zinc-700 text-center" href="/espanol/inicio">Inicio</Link>
        <Link ref={buttonRef} className="flex-1 bg-zinc-800 px-4 py-2 rounded text-xl hover:bg-zinc-700 text-center" href="/espanol/semana1">S 1</Link>
        <Link className="flex-1 bg-zinc-800 px-4 py-2 rounded text-xl hover:bg-zinc-700 text-center" href="/espanol/semana2">S 2</Link>
        <Link className="flex-1 bg-zinc-800 px-4 py-2 rounded text-xl hover:bg-zinc-700 text-center" href="/espanol/semana3">S 3</Link>
        <Link className="flex-1 bg-zinc-800 px-4 py-2 rounded text-xl hover:bg-zinc-700 text-center" href="/espanol/semana4">S 4</Link>
        <Link className="flex-1 bg-zinc-800 px-4 py-2 rounded text-xl hover:bg-zinc-700 text-center" href="/espanol/semana5">S 5</Link>
      </nav>
    </div>
  );
} 