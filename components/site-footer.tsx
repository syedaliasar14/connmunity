import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-18 border-t border-ink">
      <div className="flex min-h-18 items-center justify-between gap-4.5 font-mono text-[10px] leading-[1.5] text-subtle max-mobile:flex-col max-mobile:items-start max-mobile:justify-center max-mobile:py-4">
        <span>CONN.MUNITY<br />// CONNECTING CONNECTICUT CREATIVES</span>
        <nav className="flex items-center gap-4.5 text-ink" aria-label="Footer navigation">
          <Link className="underline-offset-4 hover:underline" href="/directory">DIRECTORY</Link>
          <Link className="underline-offset-4 hover:underline" href="/join">JOIN</Link>
        </nav>
        <span>© {new Date().getFullYear()} Conn.munity. All rights reserved.</span>
      </div>
    </footer>
  );
}
