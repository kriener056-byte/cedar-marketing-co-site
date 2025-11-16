import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-6">
      {/* Cedar Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Cedar Marketing Co. logo"
          width={160}
          height={60}
          className="h-auto w-auto"
          priority
        />
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-8 text-sm font-medium text-cedar-900">
        <Link href="/work" className="hover:text-cedar-700 transition-colors">
          Work
        </Link>
        <Link href="/about" className="hover:text-cedar-700 transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-cedar-700 transition-colors">
          Contact
        </Link>
      </nav>
    </header>
  );
}
