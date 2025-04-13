import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import MainEspNavBar from '../../components/MainEspNavBar';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainEspNavBar />
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
      <Analytics />
    </div>
  );
}
