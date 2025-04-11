import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-zinc-900 text-gray-200 pt-32">
      <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 w-full max-w-md">
        <h1 className="text-orange-300 text-2xl font-bold mb-8 text-center">Low Back and Hips Program</h1>
        <div className="space-y-8 w-full">
          <Link href="/home" className="block">
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-2xl font-bold py-6 px-4 rounded-lg transition-colors border border-gray-600">
              English Version
            </button>
          </Link>
        </div>
      </div>
      
      <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 w-full max-w-md mt-8">
        <div>
          <Link href="/espanol/inicio" className="block">
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-2xl font-bold py-6 px-4 rounded-lg transition-colors border border-gray-600">
              Versión en Español
            </button>
          </Link>
          <h2 className="text-orange-300 text-2xl font-bold mt-8 text-center">Programa de Espalda Baja y Caderas</h2>
        </div>
      </div>
    </main>
  );
}
