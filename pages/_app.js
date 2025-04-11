import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import MainNavBar from '../components/MainNavBar';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isEnglishPage = !router.pathname.startsWith('/espanol');

  return (
    <>
      {isEnglishPage && <MainNavBar />}
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
