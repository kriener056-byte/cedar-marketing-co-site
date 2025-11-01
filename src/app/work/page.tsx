export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-4xl mx-auto pt-24 pb-16 px-6">
        <p className="text-sm font-medium text-green-700 uppercase tracking-wide mb-3">
          Portfolio
        </p>

        <h1 className="text-4xl font-bold leading-tight text-gray-900">
          Things we’ve actually shipped.
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Real promos, real posters, real brand kits — built for real people,
          not fake mockups. Here’s a sample of what’s already out in the wild:
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold text-gray-900">
              Tricky’s Bar &amp; Grill
            </div>
            <div className="text-xs font-medium text-green-700 uppercase tracking-wide mt-1">
              Live Band / Event Promo
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              High-visibility posters and social graphics for upcoming bands,
              kitchen hours, and specials. Built for print AND Instagram story.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold text-gray-900">
              USPS Retirement Event
            </div>
            <div className="text-xs font-medium text-green-700 uppercase tracking-wide mt-1">
              Celebration Flyer
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Clean announcement design for Tina Shatek’s retirement from
              the U.S. Postal Service. Print-friendly and post-friendly.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold text-gray-900">
              Union Fair / Live Music
            </div>
            <div className="text-xs font-medium text-green-700 uppercase tracking-wide mt-1">
              Event Poster
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Promo layout for a live band set, including time block,
              callout of performance hours, and punchy color that stands out.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold text-gray-900">
              Cedar Marketing Co.
            </div>
            <div className="text-xs font-medium text-green-700 uppercase tracking-wide mt-1">
              Brand System
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              The cedar tree / upward arrow mark, tagline lockups
              (“Rooted for Growth”), light-on-dark variants,
              and rules for consistent usage in print and digital.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
