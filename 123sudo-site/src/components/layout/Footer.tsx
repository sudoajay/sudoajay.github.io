import Link from "next/link";
import { Code2, Mail, Play } from "lucide-react";

export function Footer() {
  const socials = [{ href: "mailto:sudoajay@gmail.com", label: "Email", icon: Mail },{ href: "https://github.com/sudoajay", label: "GitHub", icon: Code2 },{ href: "https://play.google.com/store/apps/developer?id=sudoajay", label: "Play Store", icon: Play }];
  return <footer className="border-t border-white/10 bg-[#080808]"><div className="page-shell py-10"><div className="grid gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
    <div><p className="text-lg font-bold">123sudo</p><p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">Independent software studio by Ajay Singh, building focused Android and desktop apps from India.</p></div>
    <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground"><Link href="/" className="hover:text-white">Home</Link><Link href="/apps/descroll" className="hover:text-white">deScroll</Link><Link href="/descroll/privacy-policy" className="hover:text-white">Privacy</Link><Link href="/descroll/terms-and-conditions" className="hover:text-white">Terms</Link><Link href="/contact" className="hover:text-white">Contact</Link></div>
    <div className="flex gap-3 md:justify-end">{socials.map(({href,label,icon:Icon})=><Link key={label} href={href} target={href.startsWith("http")?"_blank":undefined} rel={href.startsWith("http")?"noreferrer":undefined} aria-label={label} className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition hover:border-primary/50 hover:text-white"><Icon className="h-4 w-4" /></Link>)}</div>
  </div><div className="mt-9 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} 123sudo · Built by Ajay Singh</p><p>Building apps that solve real problems.</p></div></div></footer>;
}
