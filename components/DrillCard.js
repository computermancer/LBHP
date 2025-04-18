import Card from './Card';
import Link from 'next/link';

export default function DrillCard({ number, title, description, href }) {
  return (
    <Card>
      <div className="space-y-2">
        <Link 
          href={href} 
          className="block w-full bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded text-left leading-relaxed h-[90px] border border-gray-600"
        >
          Drill {number}: {title}
          <br />
        </Link>
        <p className="text-lg text-white mt-2 mb-4 leading-relaxed h-[50px]">
          {description}
        </p>
      </div>
    </Card>
  );
}
