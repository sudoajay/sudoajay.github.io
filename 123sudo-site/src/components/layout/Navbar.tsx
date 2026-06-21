import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl"><div className="page-shell flex h-16 items-center justify-between">
    <Link href="/" className="flex items-center gap-2.5" aria-label="123sudo home"><span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-xs font-black text-white shadow-lg shadow-primary/25">123</span><span className="text-lg font-bold tracking-tight">sudo<span className="text-primary">.</span></span></Link>
    <nav className="flex items-center gap-4 text-sm font-medium sm:gap-7"><Link href="/#apps" className="hidden text-muted-foreground transition hover:text-white sm:block">Apps</Link><Link href="/apps/descroll" className="text-muted-foreground transition hover:text-white">deScroll</Link><Link href="/contact" className="text-muted-foreground transition hover:text-white">Contact</Link><Link href="https://play.google.com/store/apps/developer?id=sudoajay" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white transition hover:border-primary/50 hover:bg-primary/10">Play Store <ArrowUpRight className="h-3.5 w-3.5" /></Link></nav>
  </div></header>;
}
