import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#050505]/80 backdrop-blur-2xl">
      <div className="page-shell flex h-[68px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="sudoajay home">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white text-xs font-black text-black shadow-lg shadow-white/5">
            &gt;_
          </span>
          <span className="font-semibold tracking-[-0.02em]">sudoajay</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm sm:gap-6">
          <Link href="/" className="hidden text-white/55 transition hover:text-white md:block">
            Home
          </Link>
          <Link href="/#apps" className="hidden text-white/55 transition hover:text-white sm:block">
            Apps
          </Link>
          <Link href="/contact" className="hidden text-white/55 transition hover:text-white sm:block">
            Contact
          </Link>
          <Link
            href="/apps/descroll"
            className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-4 font-semibold text-black transition hover:bg-white/85"
          >
            deScroll <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
