export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white text-cedar-900">
      <section className="max-w-4xl mx-auto pt-24 pb-16 px-6">
        <p className="text-sm font-medium text-cedar-700 uppercase tracking-wide mb-3">
          Recent work
        </p>

        <h1 className="text-4xl font-bold leading-tight text-cedar-900">
          Promo design that fills the room.
        </h1>

        <p className="mt-6 text-lg text-cedar-700 leading-relaxed">
          We create fast-turn posters, flyers, and social graphics for bars, bands,
          and local events. Below are a few recent projects we produced.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-card border border-gray-200 bg-white p-6 shadow-card">
            <div className="text-base font-semibold text-cedar-900">
              Tricky’s Bar &amp; Grill
            </div>
            <div className="text-xs font-medium text-cedar-700 uppercase tracking-wide mt-1">
              Live Music & Specials
            </div>
            <p className="mt-4 text-sm text-cedar-700 leading-relaxed">
              Weekly posters and IG Story assets for band nights, Wing Wednesday,
              and Taco Tuesday. Print-ready + social-ready.
            </p>
          </div>

          <div className="rounded-card border border-gray-200 bg-white p-6 shadow-card">
            <div className="text-base font-semibold text-cedar-900">
              USPS Retirement Celebration
            </div>
            <div className="text-xs font-medium text-cedar-700 uppercase tracking-wide mt-1">
              Event Flyer
            </div>
            <p className="mt-4 text-sm text-cedar-700 leading-relaxed">
              Clean announcement design for Tina Shatek’s retirement. Optimized
              for 8.5×11 print and feed posts.
            </p>
          </div>

          <div className="rounded-card border border-gray-200 bg-white p-6 shadow-card">
            <div className="text-base font-semibold text-cedar-900">
              Union Fair
            </div>
            <div className="text-xs font-medium text-cedar-700 uppercase tracking-wide mt-1">
              Live Music Promo
            </div>
            <p className="mt-4 text-sm text-cedar-700 leading-relaxed">
              Headline-first poster with bold time blocks and a layout that pops
              on a crowded wall.
            </p>
          </div>

          <div className="rounded-card border border-gray-200 bg-white p-6 shadow-card">
            <div className="text-base font-semibold text-cedar-900">
              Cedar Marketing Co.
            </div>
            <div className="text-xs font-medium text-cedar-700 uppercase tracking-wide mt-1">
              Brand System
            </div>
            <p className="mt-4 text-sm text-cedar-700 leading-relaxed">
              Cedar tree / upward-arrow mark, “Rooted for Growth” lockups, and
              a simple palette for fast, consistent assets.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block rounded-pill bg-cedar-700 px-5 py-3 text-sm font-semibold text-white hover:bg-cedar-900 transition-colors shadow-card"
          >
            Start a project
          </a>
        </div>
      </section>
    </main>
  );
}
