import Card from './Card';
import Link from 'next/link';

export default function EspDrillCard({ number, title, description, href }) {
  return (
    <Card>
      <div className="space-y-2">
        <Link 
          href={href} 
          className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-3 px-4 rounded text-left leading-relaxed h-[120px] border border-gray-600"
        >
          Ejercicio {number}: {title}
          <br />
          <br />
        </Link>
        <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[50px]">
          {description}
        </p>
      </div>
    </Card>
  );
}
