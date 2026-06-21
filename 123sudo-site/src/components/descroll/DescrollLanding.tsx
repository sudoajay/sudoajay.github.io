import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BellOff,
  Bot,
  Check,
  ChevronRight,
  Clock3,
  EyeOff,
  Focus,
  Gauge,
  Play,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { AppIcon, AppScreenshot } from "./AppVisual";

const playStore =
  "https://play.google.com/store/apps/details?id=com.sudoajay.descroll";

const features = [
  {
    title: "Minimal launcher",
    text: "A calm, text-first home screen that keeps essential apps close and visual noise out.",
    icon: Smartphone,
  },
  {
    title: "Advanced insights",
    text: "See app activity, time spent, and short-video scroll patterns in clear daily views.",
    icon: BarChart3,
  },
  {
    title: "App Shield",
    text: "Restrict distracting apps using rules you choose, including schedules and limits.",
    icon: ShieldCheck,
  },
  {
    title: "Usage Guardian",
    text: "Set daily app limits and receive timely warnings before a quick check becomes an hour.",
    icon: Clock3,
  },
  {
    title: "Focus Enhancer",
    text: "Create protected focus sessions that make attention-grabbing apps harder to reach.",
    icon: Focus,
  },
  {
    title: "Notification control",
    text: "Quiet selected alerts and review notification history without constant interruptions.",
    icon: BellOff,
  },
  {
    title: "Scroll counter",
    text: "Measure supported short-video scrolling so an invisible habit becomes visible.",
    icon: Gauge,
  },
  {
    title: "AI Helper",
    text: "Get optional guidance based on the context you choose to share with the assistant.",
    icon: Bot,
  },
];

const screenshots = [
  ["Minimalistic UI", "A distraction-free launcher built around the information and apps you need."],
  ["deScroll Protect", "One place for App Shield, Usage Guardian, Focus Enhancer, insights, and notification controls."],
  ["App Usage Tracker", "Understand how time is distributed across apps with direct, readable analytics."],
  ["Scroll Counter", "Track supported short-video scrolling and review the pattern over time."],
  ["Usage Guardian", "Set daily boundaries and get a clear warning when a configured limit is reached."],
  ["App Shield", "Block selected apps during the hours and situations where focus matters most."],
] as const;

export function DescrollLanding() {
  return (
    <>
      <section className="hero-noise relative overflow-hidden border-b border-white/10">
        <div className="page-shell relative grid min-h-[720px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_.92fr] lg:py-24">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <AppIcon className="h-16 w-16" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                  Android digital wellbeing
                </p>
                <p className="mt-1 text-xl font-semibold">deScroll</p>
              </div>
            </div>

            <h1 className="max-w-3xl text-balance text-[3.25rem] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
              Your phone,
              <br />
              without the pull.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              A minimalist launcher and focus toolkit that helps you block
              distractions, understand screen time, and interrupt doomscrolling.
            </p>

            <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center">
              <Link href={playStore} target="_blank" rel="noreferrer" className="button-primary">
                <Play className="h-4 w-4 fill-current" />
                Get it on Google Play
              </Link>
              <Link href="#features" className="button-secondary">
                Explore features <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-white/45">
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-white" /> Free to download</span>
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-white" /> Core controls run on device</span>
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-white" /> Built for Android</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute inset-10 rounded-full bg-white/10 blur-[100px]" />
            <div className="relative mx-auto max-w-[350px] rotate-[2deg] transition duration-500 hover:rotate-0">
              <AppScreenshot
                number={1}
                alt="deScroll minimalist launcher home screen"
                priority
              />
            </div>
            <div className="absolute left-0 top-24 hidden rounded-2xl border border-white/15 bg-black/80 p-4 shadow-2xl backdrop-blur sm:block">
              <EyeOff className="h-5 w-5" />
              <p className="mt-3 text-sm font-medium">Less visual noise</p>
              <p className="mt-1 text-xs text-white/45">More intentional choices</p>
            </div>
            <div className="absolute bottom-20 right-0 hidden rounded-2xl border border-white/15 bg-black/80 p-4 text-white shadow-2xl backdrop-blur-xl sm:block">
              <ShieldCheck className="h-5 w-5" />
              <p className="mt-3 text-sm font-semibold">Protection active</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.025]">
        <div className="page-shell grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            ["01", "Simplify", "Replace visual clutter with a clean launcher."],
            ["02", "Protect", "Set boundaries around distracting apps."],
            ["03", "Understand", "Review usage and scrolling patterns."],
          ].map(([number, title, text]) => (
            <div key={number} className="px-5 py-7 sm:px-8">
              <p className="text-xs text-white/35">{number}</p>
              <p className="mt-4 font-semibold">{title}</p>
              <p className="mt-2 text-sm leading-6 text-white/45">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="scroll-mt-20 py-20 sm:py-28">
        <div className="page-shell">
          <div className="max-w-2xl">
            <p className="section-kicker">Built for attention</p>
            <h2 className="section-title">Practical controls, not guilt.</h2>
            <p className="section-copy">
              deScroll gives you several ways to change the environment around
              a habit. Enable only the controls that fit how you use your phone.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ title, text, icon: Icon }) => (
              <article key={title} className="surface-card interactive-card group p-6">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="screens" className="scroll-mt-20 overflow-hidden border-y border-white/10 bg-[#0b0b0b] py-20 sm:py-28">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="section-kicker">Inside deScroll</p>
              <h2 className="section-title">The real app. No concept mockups.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/45">
              These screens come directly from the onboarding experience included
              in deScroll.
            </p>
          </div>

          <div className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-7 sm:px-7 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
            {screenshots.map(([title, text], index) => (
              <article key={title} className="min-w-[82vw] snap-center sm:min-w-[330px] lg:min-w-0">
                <div className="flex h-[500px] items-center overflow-hidden rounded-3xl border border-white/10 bg-black p-4 shadow-2xl shadow-black/20">
                  <AppScreenshot number={index + 1} alt={`${title} screen in deScroll`} />
                </div>
                <p className="mt-5 font-semibold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-white/45">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-20 py-20 sm:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="section-kicker">Pricing</p>
            <h2 className="section-title">Start free. Upgrade when the extra controls matter.</h2>
            <p className="section-copy">
              deScroll is free to download. Optional premium plans are offered
              monthly, every six months, and yearly.
            </p>
          </div>
          <div className="surface-card p-7 sm:p-9">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm text-white/45">Localized billing</p>
                <p className="mt-2 text-2xl font-semibold">See current prices in Google Play</p>
              </div>
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-black">
                <Play className="h-4 w-4 fill-current" />
              </div>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-white/60 sm:grid-cols-3">
              {["Monthly plan", "6-month plan", "Yearly plan"].map((plan) => (
                <div key={plan} className="rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3.5">
                  {plan}
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-5 text-white/35">
              Google Play displays the current price, currency, trial eligibility,
              renewal terms, and available offers before purchase.
            </p>
            <Link href={playStore} target="_blank" rel="noreferrer" className="button-primary mt-7 w-full justify-center">
              View plans on Google Play <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20 sm:py-24">
        <div className="page-shell">
          <div className="surface-card relative overflow-hidden px-7 py-14 text-center text-white sm:px-12 sm:py-20">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white/[0.035]" />
            <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />
            <AppIcon className="relative mx-auto h-16 w-16" />
            <h2 className="relative mx-auto mt-7 max-w-2xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Make your phone easier to put down.
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50">
              Download deScroll and build a setup that protects your attention
              without taking away the tools you need.
            </p>
            <Link href={playStore} target="_blank" rel="noreferrer" className="relative mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/85">
              Get deScroll <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
