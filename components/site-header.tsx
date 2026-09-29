import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="flex min-h-[82px] items-center justify-between gap-6 border-b border-ink max-[760px]:min-h-[68px]">
      <Link className="inline-flex items-center gap-[9px] no-underline" href="/" aria-label="Conn.munity home">
        <span className="[clip-path:polygon(0_0,72%_0,72%_15%,100%_15%,100%_100%,0_100%)] grid size-7 place-items-center bg-ink font-mono text-base font-bold leading-none text-paper" aria-hidden="true">c</span>
        <span className="font-mono text-lg font-extrabold leading-none tracking-[-1px] max-[480px]:text-base">conn<span className="text-poppy">.</span>munity</span>
      </Link>
      <nav className="flex items-center gap-[27px] font-mono text-xs font-semibold leading-none max-[760px]:gap-[14px] max-[760px]:text-[10px] max-[480px]:gap-[10px] max-[480px]:text-[9px]" aria-label="Main navigation">
        <Link className="underline-offset-4 hover:underline" href="/directory">Directory</Link>
        <Link className="border border-ink bg-ink px-[15px] py-3 text-white transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-acid hover:text-ink hover:shadow-[3px_3px_0_#171714] max-[760px]:px-[11px] max-[760px]:py-[10px] max-[480px]:p-[9px]" href="/join">+ Join in</Link>
      </nav>
    </header>
  );
}