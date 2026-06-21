import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://123sudo.com";
const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "sudoajay — Independent App Developer",
    template: "%s | sudoajay",
  },
  description:
    "Independent Android and desktop app developer building focused productivity and digital wellbeing tools.",
  applicationName: "sudoajay",
  authors: [{ name: "Ajay Singh" }],
  creator: "Ajay Singh",
  icons: {
    icon: "/descroll/app-logo.webp",
    apple: "/descroll/app-logo.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "sudoajay",
    title: "sudoajay — Independent App Developer",
    description:
      "Focused Android and desktop applications built by Ajay Singh.",
    url: siteUrl,
    images: ["/descroll/play-store-icon.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
