import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock3, Code2, Mail, MessageSquare, Play } from "lucide-react";

export const metadata: Metadata = { title: "Contact", description: "Contact Ajay Singh, independent app developer and founder of 123sudo." };

const contacts = [
  { label: "Email", value: "sudoajay@gmail.com", href: "mailto:sudoajay@gmail.com", icon: Mail },
  { label: "GitHub", value: "github.com/sudoajay", href: "https://github.com/sudoajay", icon: Code2 },
  { label: "Google Play", value: "Ajay Singh / 123sudo", href: "https://play.google.com/store/apps/developer?id=sudoajay", icon: Play },
];

export default function ContactPage() {
  return <section className="relative overflow-hidden py-20 sm:py-28"><div className="grid-glow absolute inset-0" /><div className="page-shell relative"><div className="mx-auto max-w-3xl text-center"><p className="section-kicker">Contact</p><h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Let&apos;s talk.</h1><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground">Have a question about an app, need support, or want to discuss a collaboration? Send a message anytime.</p></div>
    <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-[1.2fr_.8fr]"><div className="glass-card rounded-2xl p-6 sm:p-8"><p className="text-sm font-semibold">Contact details</p><div className="mt-6 space-y-3">{contacts.map(({label,value,href,icon:Icon})=><Link key={label} href={href} target={href.startsWith("http")?"_blank":undefined} className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-primary/40"><span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary"><Icon className="h-5 w-5" /></span><span className="min-w-0 flex-1"><span className="block text-xs text-muted-foreground">{label}</span><span className="mt-1 block truncate text-sm font-medium">{value}</span></span><ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" /></Link>)}</div></div>
    <div className="space-y-6"><div className="rounded-2xl border border-primary/30 bg-primary/10 p-6"><MessageSquare className="h-6 w-6 text-primary" /><h2 className="mt-5 text-lg font-semibold">App support</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">For bug reports, feature requests, account questions, or privacy requests, include the app name and a clear description.</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"><div className="flex items-center gap-3"><Clock3 className="h-5 w-5 text-primary" /><p className="font-medium">Response time</p></div><p className="mt-3 text-sm text-muted-foreground">Usually within 24–48 hours.</p></div></div></div>
  </div></section>;
}
