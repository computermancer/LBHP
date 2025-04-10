import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import MainNavBar from '../components/MainNavBar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainNavBar />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
