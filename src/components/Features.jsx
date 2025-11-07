import { CheckCircle2, Sparkles, Users, BarChart3, BadgeCheck, BookOpen, Video, HelpCircle } from 'lucide-react';

function VisionCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#2C3E8F]/10 text-[#2C3E8F]">
        <Icon size={20} />
      </div>
      <h3 className="mb-1 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
    </div>
  );
}

function CompareRow({ feature, normal, premium }) {
  return (
    <div className="grid grid-cols-3 items-center gap-4 border-b border-neutral-200 py-3 text-sm last:border-0 dark:border-neutral-800">
      <div className="font-medium text-neutral-800 dark:text-neutral-200">{feature}</div>
      <div className="text-neutral-600 dark:text-neutral-300">{normal}</div>
      <div className="flex items-center gap-2 font-medium text-[#2C3E8F]">
        {premium}
        <BadgeCheck size={16} className="text-[#F4C542]" />
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="why-join-mission-isi" className="relative z-10 mx-auto max-w-7xl px-4 py-16">
      {/* Why Mission ISI */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Why MISSION ISI</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">Vision-driven, data-backed, and personalized for your success.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <VisionCard
          icon={Sparkles}
          title="Accessible, quality education for all"
          desc="Beautifully structured content and community-powered learning available anytime."
        />
        <VisionCard
          icon={BarChart3}
          title="Data-driven preparation"
          desc="Smart progress tracking and analytics to optimize your study path."
        />
        <VisionCard
          icon={Users}
          title="Personalized mentorship"
          desc="1:1 guidance, doubt solving, and interview prep from expert mentors."
        />
      </div>

      {/* Stats / Testimonials snapshot */}
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center dark:border-neutral-800 dark:bg-neutral-900">
          <div className="text-3xl font-bold text-[#2C3E8F]">10k+</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-300">Learners empowered</div>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center dark:border-neutral-800 dark:bg-neutral-900">
          <div className="text-3xl font-bold text-[#2C3E8F]">95%</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-300">Positive outcomes</div>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center dark:border-neutral-800 dark:bg-neutral-900">
          <div className="text-3xl font-bold text-[#2C3E8F]">500+</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-300">Mock tests & PYQs</div>
        </div>
      </div>

      {/* Course comparison */}
      <div id="courses" className="mt-16 rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Course Comparison</h3>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2C3E8F]/10 px-3 py-1 text-xs font-medium text-[#2C3E8F]">
            Premium Recommended <CheckCircle2 size={14} />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Feature</div>
          <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Normal</div>
          <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Premium</div>
        </div>
        <div className="mt-2">
          <CompareRow feature="Live Classes" normal="Weekend" premium="Daily + Recordings" />
          <CompareRow feature="Doubt Solving" normal="Group" premium="1:1 Mentor" />
          <CompareRow feature="Mock Tests" normal="Monthly" premium="Weekly + Analytics" />
          <CompareRow feature="PYQs" normal="Static PDFs" premium="Interactive + Solutions" />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
            <BookOpen size={18} /> 200+ lessons
            <Video size={18} /> Live & recorded
            <HelpCircle size={18} /> Dedicated support
          </div>
          <a href="#signup" className="rounded-md bg-[#F4C542] px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition hover:brightness-105">
            Upgrade to Premium
          </a>
        </div>
      </div>
    </section>
  );
}
