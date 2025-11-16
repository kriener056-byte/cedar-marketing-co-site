// src/components/ServicesSection.tsx
type Service = {
  name: string;
  tag?: string;
  perfectFor?: string;
  bullets: string[];
};

const services: Service[] = [
  {
    name: "Business Consulting",
    tag: "Foundation & Direction",
    perfectFor: "New businesses, owners feeling stuck, or anyone needing structure.",
    bullets: [
      "Business planning & launch strategy",
      "Pricing and revenue model review",
      "Process and efficiency improvements",
      "Customer journey mapping",
      "Competitive analysis",
      "Brand positioning & identity direction",
      "Recommendations based on what actually works in your industry",
    ],
  },
  {
    name: "Digital Marketing Strategy",
    tag: "Smart, Focused Growth",
    perfectFor: "Businesses ready to grow but unsure where to focus.",
    bullets: [
      "Full digital audit (website, social, listings, ads, SEO, content)",
      "Strategy tailored to your industry and stage of growth",
      "Clear, step-by-step roadmap",
      "Fixes for underperforming marketing",
      "Recommendations based on real client performance insights",
    ],
  },
  {
    name: "Paid Advertising",
    tag: "Google, Meta & More",
    perfectFor: "Businesses that want leads, calls, and sales — not just clicks.",
    bullets: [
      "Campaign setup or rebuild",
      "Audience targeting based on proven patterns",
      "Budget allocation guidance",
      "Performance monitoring & optimization",
      "Monthly reporting in plain English",
    ],
  },
  {
    name: "Social Media & Content",
    tag: "Tell Your Story",
    perfectFor: "Brands that want a consistent, professional presence.",
    bullets: [
      "Platform strategy (Facebook, Instagram, TikTok, LinkedIn where it makes sense)",
      "Monthly content planning",
      "Post creation (graphics, captions, short-form video direction)",
      "Engagement & community building",
      "Consistency plan for long-term growth",
    ],
  },
  {
    name: "Website Review & Conversion",
    tag: "Turn Traffic Into Customers",
    perfectFor: "Anyone with a site that looks nice but doesn’t convert.",
    bullets: [
      "Full website evaluation",
      "Fixes for weak messaging, layout, or user experience",
      "Recommendations to convert more visitors into customers",
      "Landing page strategy for ad campaigns",
      "Suggested tools, plugins, and upgrades",
    ],
  },
  {
    name: "Local Business Growth",
    tag: "For Restaurants & Local Services",
    perfectFor: "Restaurants, contractors, shops, and other local businesses.",
    bullets: [
      "Google Business Profile optimization",
      "Reputation and review strategy",
      "Local SEO & map ranking improvements",
      "Local-focused ad strategy",
      "Seasonal promotions and event marketing",
    ],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-16 sm:py-20 border-t border-slate-100"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">
          Services
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          What Cedar Marketing Co. Can Help With
        </h2>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-700">
          I mix real-world experience with strategy that’s actually practical.
          Every engagement starts with understanding where your business is
          today and where you want it to go next.
        </p>

        <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  {service.tag && (
                    <p className="mt-1 text-sm font-medium text-emerald-700">
                      {service.tag}
                    </p>
                  )}
                </div>
              </div>

              {service.perfectFor && (
                <p className="mt-3 text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">
                    Perfect for:
                  </span>{" "}
                  {service.perfectFor}
                </p>
              )}

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {service.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm sm:text-base text-gray-700">
          Need something more custom? I can combine consulting, marketing, and
          ongoing support into a package that fits exactly where your business
          is right now.
        </p>
      </div>
    </section>
  );
}
