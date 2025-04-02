
import Nav from '../components/Nav';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="p-8 text-gray-200 min-h-screen font-sans">
        <h1 className="text-orange-300 text-3xl font-bold mb-6">About LBHP</h1>
        

        <section className="mb-6 max-w-2xl">
          <h2 className="text-2xl font-semibold mb-2">About LBHP</h2>
          <p className="text-lg">
                This is where information about LBHP goes.
          </p>
        </section>



      </main>
    </>
  );
}
