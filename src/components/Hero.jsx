import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Dynamic gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_10%_10%,rgba(44,62,143,0.25),transparent),radial-gradient(800px_600px_at_90%_10%,rgba(244,197,66,0.25),transparent)]" />

      {/* Spline area */}
      <div className="relative h-[520px] w-full">
        <Spline
          style={{ width: '100%', height: '100%' }}
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white dark:from-neutral-900/40 dark:via-neutral-900/20 dark:to-neutral-900" />
      </div>

      {/* Heading content */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl px-6 text-center"
        >
          <h1 className="pointer-events-auto text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
            Crack ISI Entrance with Confidence.
          </h1>
          <p className="pointer-events-auto mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            Expert-guided courses, study materials, and mentorship for B.Stat aspirants.
          </p>
          <div className="pointer-events-auto mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#courses"
              className="rounded-md bg-[#2C3E8F] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:brightness-110"
            >
              Start Learning
            </a>
            <a
              href="#courses"
              className="rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              Explore Courses
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
