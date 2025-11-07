import { useEffect, useMemo, useState } from 'react';
import { Menu, X, Search, Sun, Moon, LogIn } from 'lucide-react';

const navItems = [
  'Home',
  'Courses',
  'Study Material',
  'Resources',
  'Exam Info',
  'Blog',
  'Free Resources',
  'Mentorship',
  'Community',
  'Contact',
];

const suggestions = [
  'ISI Entrance',
  'IISER Aptitude Test',
  'NISER NEST Exam',
  'JEE Main & Advanced',
  'NEET UG',
  'CUET (UG)',
  'Foundation Courses',
  'Syllabus',
  'Previous Year Papers',
  'Mock Tests',
  'Notes & Formula Sheets',
  'NCERT Solutions',
  'Daily Quiz',
  'Video Lectures',
  'Live Classes',
  'Revision Notes',
  'Question Banks',
  'Doubt Forum',
  'Exam Calendar',
  'Eligibility & Pattern',
  'Cutoffs',
  'Admit Cards',
  'Important Dates',
  'Tips & Strategy',
  'Success Stories',
  'News',
  'PDFs',
  'Sample Tests',
  'Question of the Day',
  'Career Guides',
  'Personal Mentor',
  'Counselling',
  'College Predictor',
  'Discussion Forum',
  'Groups',
  'Doubt Sessions',
  'Leaderboard',
  'Helpdesk',
  'Feedback',
  'FAQs',
];

export default function Navbar({ onOpenSearch }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
      applyTheme(stored);
    } else {
      applyTheme('system');
    }
  }, []);

  const applyTheme = (val) => {
    const root = document.documentElement;
    if (val === 'dark') {
      root.classList.add('dark');
    } else if (val === 'light') {
      root.classList.remove('dark');
    } else {
      // system
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      if (media.matches) root.classList.add('dark');
      else root.classList.remove('dark');
    }
  };

  const cycleTheme = () => {
    const next = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    applyTheme(next);
  };

  const filtered = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    return suggestions
      .filter((s) => s.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-neutral-900/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 md:hidden"
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#2C3E8F] text-white">M</span>
            <span className="text-neutral-900 dark:text-white">MISSION ISI</span>
          </a>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm text-neutral-700 transition-colors hover:text-[#2C3E8F] dark:text-neutral-300 dark:hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden items-center md:flex">
            <Search size={18} className="pointer-events-none absolute left-3 text-neutral-400" />
            <input
              aria-label="Search"
              type="text"
              placeholder="Search courses, materials..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => onOpenSearch?.()}
              className="w-56 rounded-md border border-neutral-200 bg-white py-2 pl-9 pr-3 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-[#2C3E8F] focus:ring-0 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            />
            {filtered.length > 0 && (
              <div className="absolute top-10 z-50 w-72 rounded-md border border-neutral-200 bg-white p-2 shadow-xl dark:border-neutral-700 dark:bg-neutral-800">
                {filtered.map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="block rounded px-2 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-700"
                  >
                    {s}
                  </a>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={cycleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
            aria-label="Toggle theme"
            title={`Theme: ${theme}`}
          >
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a
            href="#login"
            className="inline-flex items-center gap-2 rounded-md bg-[#2C3E8F] px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:brightness-110"
          >
            <LogIn size={16} />
            Login / Sign Up
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900 md:hidden">
          <div className="mb-3 flex items-center rounded-md border border-neutral-200 bg-white px-3 dark:border-neutral-700 dark:bg-neutral-800">
            <Search size={18} className="text-neutral-400" />
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="ml-2 w-full bg-transparent py-2 text-sm outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
