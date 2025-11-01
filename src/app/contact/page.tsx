export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900" id="contact">
      <section className="max-w-xl mx-auto pt-24 pb-16 px-6 text-left">
        <p className="text-sm font-medium text-green-700 uppercase tracking-wide mb-3">
          Let’s build
        </p>

        <h1 className="text-4xl font-bold leading-tight text-gray-900">
          Tell us what you need made.
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Posters for your band night. Promo flyers. Retirement parties. Seasonal
          menu boards. Social graphics that don’t look like they were made in Word.
        </p>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="text-sm text-gray-600">
            For now, just email:
          </div>

          <div className="mt-2 text-lg font-semibold text-gray-900">
            cody.kriener@gmail.com
          </div>

          <div className="mt-4 text-xs text-gray-500 leading-relaxed">
            Soon this page will have a request form so you can upload details
            (like event time, ticket price, kitchen hours, etc.) and get a quote fast.
          </div>
        </div>
      </section>
    </main>
  );
}
