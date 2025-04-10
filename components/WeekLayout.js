import Nav from './Nav';

export default function WeekLayout({
  children,
  title,
  subtitle
}) {
  return (
    <div className="min-h-screen bg-zinc-900">
      <main className="px-8 text-gray-200 font-sans pt-0 pb-8">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-orange-300 text-4xl font-bold mb-4">{title}</h1>
          <h2 className="text-orange-300 text-2xl font-bold mb-4">{subtitle}</h2>
          <div className="h-2"></div>
          {children}
        </div>
      </main>
    </div>
  );
}
