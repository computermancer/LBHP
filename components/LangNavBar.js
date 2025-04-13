import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LangNavBar({ languages, currentLanguage }) {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-52 bg-zinc-900">
      <div className="max-w-[500px] mx-auto">
        <div className="flex gap-0.5 text-gray-200 py-2 w-full justify-center">
          {languages.map((lang, index) => (
            <Link
              key={lang.code}
              href={lang.code === 'es' ? '/espanol/inicio' : `/${lang.code}`}
              className={`flex-1 bg-zinc-800 px-1.5 py-2 rounded text-base font-semibold text-center whitespace-nowrap flex items-center justify-center border border-zinc-700 hover:bg-zinc-700`}
            >
              <span className="truncate">{lang.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
