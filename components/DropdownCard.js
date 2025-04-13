import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

export default function DropdownCard({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-zinc-900 rounded-lg border border-zinc-700 overflow-hidden">
      <div className="bg-zinc-800 p-3">
        <h2 
          className="text-gray-200 text-xl font-semibold cursor-pointer mb-4 flex items-center justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <FaChevronDown className={`text-gray-200 text-lg ${isOpen ? 'rotate-180' : ''}`} />
        </h2>
      </div>
      {isOpen && (
        <div className="bg-zinc-900 p-3">
          <div className="space-y-4">
            {items.map((item, index) => (
              <Link href={item.href} key={index} className="block">
                <button className="bg-gray-700 hover:bg-gray-600 text-orange-300 text-xl font-semibold py-2 px-4 rounded-lg w-full text-left border border-gray-600">
                  {item.text}
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
