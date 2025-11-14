import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-cedar-900">
      <section className="flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center">
        <Image
          src="/logo.png"
          alt="Cedar Marketing Company logo"
          width={320}
          height={320}
          className="mx-auto mb-8"
          priority
        />

        <p className="text-sm font-medium text-cedar-700 uppercase tracking-wide mb-3">
          Rooted for Growth
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-cedar-900">
          Posters, flyers &amp; social that actually get people in the door.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-cedar-700 leading-relaxed">
          Cedar Marketing Co. builds plug-and-play promo graphics for bars,
          bands, events, and local businesses — built fast, built clean, and
          built to perform on the wall and in the feed.
        </p>

        <div className="mt-10 flex flex-col sm:flx-row gap-4 justify-center">
          {/* BUTTON 1: See our work */}
          <a
            href="/work"
            className="rounded-pill bg-green-700 text-white px-6 py-3 text-sm font-semibold hover:bg-green-900 transition-colors shadow-card"
          >
            See our work
          </a>

          {/* BUTTON 2: Start a project */}
          <a
            href="/contact"
            className="rounded-pill border border-cedar-700/40 text-cedar-700 px-6 py-3 text-sm font-semibold hover:bg-cedar-100 transition-colors"
          >
            Start a project
          </a>
        </div>
      </section>
    </main>
  );
}
