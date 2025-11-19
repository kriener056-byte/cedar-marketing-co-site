// src/components/AboutSection.tsx
export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white py-16 sm:py-20 border-t border-gray-100"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">
          About
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          About Cedar Marketing Co.
        </h2>
        <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-700">
          I’ve spent years working directly with business owners to understand
          what actually drives results online. From helping launch new
          businesses to guiding established ones through growth phases, I’ve
          seen firsthand what works, what doesn’t, and what changes make the
          biggest impact.
        </p>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-700">
          My background includes selling and managing digital marketing
          solutions while partnering with clients to review performance, analyze
          trends, and map out the next steps. Those conversations taught me what
          the right strategy looks like depending on the industry, size, and
          goals of the business and how to adjust quickly when something
          isn’t working.
        </p>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-700">
          Today, I use that experience to help businesses build a solid
          foundation, streamline processes, and grow through smarter marketing
          and better decision-making. Whether you need consulting to get
          started, marketing direction to scale, or guidance to fix
          inefficiencies, I bring practical, real-world knowledge to help you
          move forward with confidence.
        </p>
        <p className="mt-6 text-base sm:text-lg font-semibold text-emerald-800">
          Rooted in strategy. Built on experience. Focused on results.
        </p>
      </div>
    </section>
  );
}
