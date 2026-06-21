import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Mail,
  MapPin,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { AppIcon, AppScreenshot } from "@/components/descroll/AppVisual";

export const metadata: Metadata = {
  title: "sudoajay — Independent App Developer",
  description:
    "Ajay Singh builds focused Android and desktop applications under the name sudoajay.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero-noise relative overflow-hidden border-b border-white/10">
        <div className="page-shell relative grid min-h-[700px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/55 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Independent app developer · India
            </div>
            <p className="text-sm font-medium tracking-wide text-white/50">
              Hi, I&apos;m Ajay Singh — sudoajay.
            </p>
            <h1 className="mt-5 max-w-3xl text-balance text-[3.25rem] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
              I build apps with a clear purpose.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Focused Android and desktop tools for digital wellbeing,
              productivity, and everyday problems—designed without unnecessary
              complexity.
            </p>
            <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row">
              <Link href="#apps" className="button-primary">
                View my apps <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="button-secondary">
                Contact me <Mail className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-white/45">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white" /> India
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-white" /> Privacy-conscious
              </span>
              <span className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-white" /> Building since 2022
              </span>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[500px] lg:block">
            <div className="absolute inset-16 rounded-full bg-white/10 blur-[100px]" />
            <div className="relative mx-auto max-w-[310px] rotate-[3deg] transition duration-500 hover:rotate-0">
              <AppScreenshot
                number={1}
                alt="deScroll minimalist launcher by sudoajay"
                priority
              />
            </div>
            <div className="absolute left-0 top-28 rounded-2xl border border-white/10 bg-black/75 p-4 shadow-2xl backdrop-blur-xl">
              <p className="text-xs text-white/40">Featured app</p>
              <p className="mt-1 font-semibold">deScroll</p>
            </div>
          </div>
        </div>
      </section>

      <section id="apps" className="scroll-mt-20 py-20 sm:py-28">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="section-kicker">Featured app</p>
              <h2 className="section-title">Technology that respects your attention.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/45">
              Each product begins with a real problem and aims for a direct,
              useful solution.
            </p>
          </div>

          <Link
            href="/apps/descroll"
            className="surface-card interactive-card group mt-12 grid overflow-hidden lg:grid-cols-[.9fr_1.1fr]"
          >
            <div className="flex flex-col justify-center p-7 sm:p-12">
              <div className="flex items-center gap-4">
                <AppIcon className="h-16 w-16" />
                <div>
                  <p className="text-2xl font-semibold">deScroll</p>
                  <p className="mt-1 text-sm text-white/40">
                    Android digital wellbeing
                  </p>
                </div>
              </div>
              <h3 className="mt-10 text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Your phone, without the pull.
              </h3>
              <p className="mt-5 max-w-lg leading-7 text-white/50">
                A minimalist launcher with app blocking, focus controls, usage
                insights, notification management, and scroll tracking.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold">
                Explore deScroll
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </div>
            <div className="relative flex min-h-[430px] items-end justify-center overflow-hidden border-t border-white/10 bg-gradient-to-b from-white/[0.045] to-transparent px-6 pt-8 sm:min-h-[520px] sm:px-10 sm:pt-10 lg:border-l lg:border-t-0">
              <div className="absolute inset-20 rounded-full bg-white/[0.06] blur-[90px]" />
              <AppScreenshot
                number={2}
                alt="deScroll Protect app screen"
                className="relative max-w-[340px] translate-y-6"
              />
            </div>
          </Link>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="page-shell">
          <div className="surface-card flex flex-col items-start justify-between gap-8 p-7 sm:flex-row sm:items-center sm:p-10">
            <div>
              <Smartphone className="h-6 w-6" />
              <h2 className="mt-5 text-2xl font-semibold">Need help with an app?</h2>
              <p className="mt-2 text-sm text-white/45">
                Contact me by email or use the support ticket option inside deScroll.
              </p>
            </div>
            <Link href="/contact" className="button-primary shrink-0">
              Open support <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
