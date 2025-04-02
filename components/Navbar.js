import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-orange-300 -mx-8 px-8 py-4">
      <div className="max-w-[500px] mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-orange-400 transition-colors">
          LBHP
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="hover:text-orange-400 transition-colors">
            About
          </Link>
          <Link href="/work" className="hover:text-orange-400 transition-colors">
            Work
          </Link>
        </div>
      </div>
    </nav>
  );
} 