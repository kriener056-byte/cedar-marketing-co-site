export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-4xl mx-auto text-center pt-24 pb-16 px-6">
        <p className="text-sm font-medium text-green-700 uppercase tracking-wide mb-3">
          Rooted for Growth
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Marketing that actually grows with you, not just looks pretty.
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Cedar Marketing Co. builds brands, graphics, and promo assets that
          small businesses can actually use — tonight. Posters for your band.
          Social for your bar. Campaigns that fill the room.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
          >
            Start a Project
          </a>

          <a
            href="#work"
            className="border border-green-700 text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition"
          >
            See Our Work
          </a>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Cedar Marketing Co. — Rooted for Growth
      </footer>
    </main>
  );
}
