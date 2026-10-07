import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "@/components/site-header";
import "./globals.css";
import { config } from "@/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: config.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <div className="mx-auto flex min-h-screen w-[calc(100%_-_3rem)] max-w-[1180px] flex-col max-mobile:w-[calc(100%_-_1.5rem)]">
          <SiteHeader />
          <main className="min-h-[calc(100vh-154px)] flex-1">{children}</main>
          <footer className="mt-18 border-t border-ink">
            <div className="flex min-h-18 items-center justify-between gap-4.5 font-mono text-[10px] leading-[1.5] text-subtle max-mobile:flex-col max-mobile:items-start max-mobile:justify-center max-mobile:py-4">
              <span>CONN.MUNITY // MADE OF PEOPLE, NOT ALGORITHMS</span>
              <a className="text-ink" href="mailto:hello@conn.munity">SAY HELLO ↗</a>
              <span>CONNECTICUT, USA · 2026</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
