import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-orange-300 -mx-8 px-8 py-2">
      <div className="max-w-[500px] mx-auto flex justify-between items-center">
        <Link href="/" className="flex-1 bg-gray-700 px-1.5 py-2 rounded text-xl font-bold hover:bg-gray-600 transition-colors">
          LBHP
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="flex-1 bg-gray-700 px-1.5 py-2 rounded text-base font-semibold hover:bg-gray-600 transition-colors">
            About
          </Link>
          <Link href="/work" className="flex-1 bg-gray-700 px-1.5 py-2 rounded text-base font-semibold hover:bg-gray-600 transition-colors">
            Work
          </Link>
        </div>
      </div>
    </nav>
  );
} 