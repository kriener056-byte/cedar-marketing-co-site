import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Cedar Marketing Co. — Rooted for Growth",
  description:
    "Cedar Marketing Co. builds brand systems, event promos, and marketing assets that actually move people.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white text-cedar-900">
      <body className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 bg-white text-cedar-900">
        {/* HEADER */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 border-b border-gray-200">
          {/* Brand block */}
          <Link href="/" className="flex items-start gap-3">
             {/* Crisp Cedar Tree Logo */}
    <div className="flex-shrink-0">
      <Image
        src="/tree-logo.png"
        alt="Cedar Marketing Co. tree logo"
        width={40}
        height={40}
        className="h-10 w-auto"
        priority
      />
    </div>

    <div className="flex flex-col leading-tight">
      <span className="text-base font-semibold text-cedar-900">
        Cedar Marketing Co.
      </span>
      <span className="text-[11px] uppercase tracking-wide font-medium text-cedar-400">
        Rooted for Growth
      </span>
    </div>

  </Link>

          {/* Nav */}
          <nav className="flex flex-wrap gap-4 mt-4 sm:mt-0 text-sm font-medium text-cedar-900">
            <Link href="/work" className="hover:text-cedar-400">
              Work
            </Link>
            <Link href="/about" className="hover:text-cedar-400">
              About
            </Link>
            <Link href="/contact" className="hover:text-cedar-400">
              Contact
            </Link>

            <Link
              href="/contact"
              className="ml-auto sm:ml-4 rounded-pill bg-cedar-700 px-4 py-2 text-sm font-semibold text-white shadow-card hover:bg-cedar-900 transition-colors"
            >
              Lets Talk
            </Link>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="mt-24 border-t border-gray-200 py-12 text-center text-sm text-cedar-700">
          <div className="font-semibold text-cedar-900">
            Cedar Marketing Co.
          </div>
          <div className="text-[11px] text-cedar-400 font-medium uppercase tracking-wide">
            Rooted for Growth
          </div>
          <div className="mt-4 text-[11px] text-cedar-400">
            @Cedar Marketing Co. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}

