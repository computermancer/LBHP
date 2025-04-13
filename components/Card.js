import { useState } from 'react';

export default function Card({ title, children }) {
  return (
    <div className="bg-zinc-900 rounded-lg border border-zinc-700 p-2 pb-5 mb-4">
      <h2 className="text-orange-300 text-xl font-semibold mb-2">{title}</h2>
      <div className="text-gray-300 space-y-2">
        {children}
      </div>
    </div>
  );
}
