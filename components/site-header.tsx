import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="flex min-h-20.5 items-center justify-between gap-6 border-b border-ink max-tablet:min-h-17">
      <Link className="inline-flex items-center gap-2.25 no-underline" href="/" aria-label="Conn.munity home">
        <span className="[clip-path:polygon(0_0,72%_0,72%_15%,100%_15%,100%_100%,0_100%)] grid size-7 place-items-center bg-ink font-mono text-base font-bold leading-none text-paper" aria-hidden="true">c</span>
        <span className="font-mono text-lg font-extrabold leading-none tracking-[-1px] max-mobile:text-base">
          conn<span className="text-poppy">.</span>munity
        </span>
      </Link>
      <nav className="flex items-center gap-6.75 font-mono text-xs font-semibold leading-none max-tablet:gap-3.5 max-tablet:text-[10px] max-mobile:gap-2.5 max-mobile:text-[9px]" aria-label="Main navigation">
        <Link className="underline-offset-4 hover:underline" href="/directory">Directory</Link>
        <Link className="border border-ink bg-ink px-3.75 py-3 text-white transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-acid hover:text-ink hover:shadow-[3px_3px_0_#171714] max-tablet:px-2.75 max-tablet:py-2.5 max-mobile:p-2.25" href="/join">
          + Join in
        </Link>
      </nav>
    </header>
  );
}