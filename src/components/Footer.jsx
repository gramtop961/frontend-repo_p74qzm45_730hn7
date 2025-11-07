import { Instagram, Linkedin, Facebook, MessageCircle, Send, Users, Reddit } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#2C3E8F] text-white">M</span>
              <span className="font-semibold text-neutral-900 dark:text-white">MISSION ISI</span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Mission-driven learning for ambitious students preparing for ISI and other competitive exams.</p>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="WhatsApp" href="#" className="rounded-md p-2 text-green-600 transition hover:bg-green-50 dark:hover:bg-green-900/20"><MessageCircle size={18} /></a>
              <a aria-label="Discord" href="#" className="rounded-md p-2 text-indigo-600 transition hover:bg-indigo-50 dark:hover:bg-indigo-900/20"><Users size={18} /></a>
              <a aria-label="Instagram" href="#" className="rounded-md p-2 text-pink-600 transition hover:bg-pink-50 dark:hover:bg-pink-900/20"><Instagram size={18} /></a>
              <a aria-label="Facebook" href="#" className="rounded-md p-2 text-blue-600 transition hover:bg-blue-50 dark:hover:bg-blue-900/20"><Facebook size={18} /></a>
              <a aria-label="LinkedIn" href="#" className="rounded-md p-2 text-sky-700 transition hover:bg-sky-50 dark:hover:bg-sky-900/20"><Linkedin size={18} /></a>
              <a aria-label="Telegram" href="#" className="rounded-md p-2 text-sky-500 transition hover:bg-sky-50 dark:hover:bg-sky-900/20"><Send size={18} /></a>
              <a aria-label="Reddit" href="#" className="rounded-md p-2 text-orange-600 transition hover:bg-orange-50 dark:hover:bg-orange-900/20"><Reddit size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li><a href="#about-us" className="hover:text-[#2C3E8F]">About Us</a></li>
              <li><a href="#courses" className="hover:text-[#2C3E8F]">Courses</a></li>
              <li><a href="#resources" className="hover:text-[#2C3E8F]">Resources</a></li>
              <li><a href="#contact" className="hover:text-[#2C3E8F]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-white">Policies</h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li><a href="#" className="hover:text-[#2C3E8F]">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#2C3E8F]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#2C3E8F]">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-neutral-900 dark:text-white">Contact</h4>
            <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
              <li>Email: hello@missionisi.org</li>
              <li>SMS: +91-90000-00000</li>
              <li>Mobile: +91-90000-00000</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-neutral-200 pt-6 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400 sm:flex-row">
          <p>Copyright © MISSION ISI 2025</p>
          <p>Made with ❤️ for learners</p>
        </div>
      </div>
    </footer>
  );
}
