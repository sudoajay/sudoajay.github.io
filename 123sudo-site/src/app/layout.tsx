import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sudoajay.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Ajay Singh — Android App Developer | 123sudo", template: "%s | 123sudo" },
  description: "Independent Android and desktop app developer from India building focused productivity and digital wellbeing tools.",
  applicationName: "123sudo",
  authors: [{ name: "Ajay Singh", url: "https://github.com/sudoajay" }],
  creator: "Ajay Singh",
  openGraph: { type: "website", locale: "en_IN", siteName: "123sudo", title: "Ajay Singh — Android App Developer | 123sudo", description: "Independent Android and desktop app developer from India building focused productivity and digital wellbeing tools.", url: siteUrl },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={inter.variable}><body className="min-h-screen bg-background font-sans text-foreground antialiased"><Navbar /><main className="min-h-[70vh]">{children}</main><Footer /></body></html>;
}
