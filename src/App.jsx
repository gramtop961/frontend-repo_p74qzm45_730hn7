import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SuggestionForm from './components/SuggestionForm';
import Footer from './components/Footer';

export default function App() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-consent');
    if (!accepted) setShowCookie(true);
  }, []);

  const acceptCookies = (val) => {
    localStorage.setItem('cookie-consent', val ? 'accepted' : 'rejected');
    setShowCookie(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SuggestionForm />
      </main>
      <Footer />

      {showCookie && (
        <div className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-5xl p-4">
          <div className="rounded-xl border border-neutral-200 bg-white/95 p-4 shadow-xl backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/95">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                We use cookies to enhance your experience. By clicking Accept, you consent to our use of cookies.
              </p>
              <div className="flex gap-2">
                <button onClick={() => acceptCookies(false)} className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800">Reject</button>
                <button onClick={() => acceptCookies(true)} className="rounded-md bg-[#2C3E8F] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110">Accept</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
