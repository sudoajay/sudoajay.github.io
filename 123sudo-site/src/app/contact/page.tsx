import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description: "Contact sudoajay for deScroll support.",
};

export default function ContactPage() {
  return (
    <section className="hero-noise relative min-h-[680px] overflow-hidden py-16 sm:py-24">
      <div className="page-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Support</p>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            How can I help?
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            For deScroll questions, bug reports, account help, or privacy
            requests, contact support using either option below.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          <Link
            href="mailto:sudoajay@gmail.com"
            className="surface-card interactive-card group p-7 sm:p-9"
          >
            <div className="flex items-start justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/[0.04]">
                <Mail className="h-5 w-5" />
              </span>
              <ArrowUpRight className="h-5 w-5 text-white/30 transition group-hover:text-white" />
            </div>
            <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/35">
              Email
            </p>
            <h2 className="mt-3 text-xl font-semibold">sudoajay@gmail.com</h2>
            <p className="mt-3 text-sm leading-6 text-white/45">
              Include “deScroll” and a clear description in your message.
            </p>
          </Link>

          <div className="surface-card p-7 sm:p-9">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-black">
              <MessageSquare className="h-5 w-5" />
            </span>
            <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/35">
              In-app support
            </p>
            <h2 className="mt-3 text-xl font-semibold">Open a support ticket</h2>
            <p className="mt-3 text-sm leading-6 text-white/45">
              In deScroll, open Settings and select Support Tickets to send a
              request connected to your app account.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-4xl items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-sm text-white/50">
          <Clock3 className="h-4 w-4 shrink-0 text-white" />
          <p>Typical response time is 24–48 hours.</p>
        </div>
      </div>
    </section>
  );
}
