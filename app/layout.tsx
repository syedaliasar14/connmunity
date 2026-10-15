import type { Metadata } from "next";
import { Geist, Geist_Mono, Lilita_One } from "next/font/google";
import SiteFooter from "@/components/site-footer";
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

const lilitaOne = Lilita_One({
  weight: "400",
  variable: "--font-lilita-one",
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
      className={`${geistSans.variable} ${geistMono.variable} ${lilitaOne.variable}`}
    >
      <body className="overflow-x-hidden">
        <div className="mx-auto flex min-h-screen w-[calc(100%_-_3rem)] max-w-[1180px] flex-col max-mobile:w-[calc(100%_-_1.5rem)]">
          <SiteHeader />
          <main className="min-h-[calc(100vh-154px)] flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
