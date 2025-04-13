import Link from 'next/link';

export default function SimpleCard({ href, text }) {
  return (
    <div className="bg-zinc-900 rounded-lg border border-zinc-700">
      <div className="p-3">
        <Link href={href} className="block">
          <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
            {text}
          </button>
        </Link>
      </div>
    </div>
  );
}
