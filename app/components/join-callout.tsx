import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function JoinCallout() {
  return (
    <section className="mt-14 flex items-center justify-between gap-6 border-y border-ink py-[26px] max-[480px]:items-start max-[480px]:flex-col">
      <h2 className="m-0 max-w-[520px] text-[clamp(24px,4vw,38px)] font-bold leading-[1.1] tracking-[-1.5px]">Making something around here? You belong in this picture.</h2>
      <Link className="inline-flex min-h-[46px] shrink-0 items-center justify-center gap-[10px] border border-ink bg-ink px-[17px] font-mono text-[11px] font-bold text-white no-underline transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-acid hover:text-ink hover:shadow-[3px_3px_0_#171714]" href="/join">Make a little profile <ArrowRight size={15} /></Link>
    </section>
  );
}