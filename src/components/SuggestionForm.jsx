import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SuggestionForm() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      (e.target).reset();
    }, 1200);
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Have a suggestion?</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Help us improve by sharing your feedback.</p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="rounded-md bg-[#2C3E8F] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:brightness-110"
          >
            Open Suggestion Form
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-neutral-600 dark:text-neutral-300">Username</label>
                    <input className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#2C3E8F] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100" required />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-neutral-600 dark:text-neutral-300">Email</label>
                    <input type="email" className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#2C3E8F] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100" required />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-neutral-600 dark:text-neutral-300">Contact Number</label>
                    <input type="tel" className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#2C3E8F] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-neutral-600 dark:text-neutral-300">DOB</label>
                    <input type="date" className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#2C3E8F] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100" />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-neutral-600 dark:text-neutral-300">Academic Status</label>
                    <select className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#2C3E8F] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
                      <option>College Student</option>
                      <option>Drop Year</option>
                      <option>12th Pass</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-neutral-600 dark:text-neutral-300">Year of Passing</label>
                    <input className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#2C3E8F] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-neutral-600 dark:text-neutral-300">School / College</label>
                    <input className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#2C3E8F] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100" />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-neutral-600 dark:text-neutral-300">State</label>
                    <input className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#2C3E8F] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-neutral-600 dark:text-neutral-300">District</label>
                    <input className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#2C3E8F] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-neutral-600 dark:text-neutral-300">Block</label>
                    <input className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#2C3E8F] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100" />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-neutral-600 dark:text-neutral-300">Message</label>
                  <textarea rows={4} className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#2C3E8F] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100" />
                </div>
                <button type="submit" className="w-full rounded-md bg-[#F4C542] px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition hover:brightness-105">
                  Submit
                </button>
              </form>

              <div className="flex items-center justify-center">
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="flex h-40 w-full max-w-sm items-center justify-center rounded-xl border border-green-200 bg-green-50 text-green-700 shadow-sm dark:border-green-900/40 dark:bg-green-900/30 dark:text-green-200"
                    >
                      Thank you! Your suggestion has been received.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
