import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="page-shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.25fr_1fr_1fr]">
          <div>
            <p className="text-lg font-semibold tracking-[-0.02em]">sudoajay</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
              Independent software developer Ajay Singh, building focused
              Android and desktop applications from India.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/#apps" className="hover:text-white">Apps</Link>
            <Link href="/apps/descroll" className="hover:text-white">deScroll</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/descroll/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/descroll/terms-and-conditions" className="hover:text-white">Terms</Link>
          </div>

          <div className="flex items-start gap-3 md:justify-end">
            <Link
              href="mailto:sudoajay@gmail.com"
              aria-label="Email sudoajay"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/50 transition hover:bg-white hover:text-black"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} sudoajay. All rights reserved.</p>
          <p>123sudo.com</p>
        </div>
      </div>
    </footer>
  );
}
