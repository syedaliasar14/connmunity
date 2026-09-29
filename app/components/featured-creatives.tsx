import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CreativeGrid from "@/components/creative-grid";
import { creatives } from "@/lib/creatives";

export default function FeaturedCreatives() {
  const featured = creatives.slice(0, 3);

  return (
    <section className="py-[50px] pb-2">
      <div className="mb-6 flex items-end justify-between gap-[18px] max-[480px]:items-start">
        <div><span className="font-mono text-[10px] font-semibold uppercase leading-[1.3]">01 / fresh from the directory</span><h2 className="mb-0 mt-2 text-[clamp(28px,4vw,42px)] font-bold leading-none tracking-[-2px]">People to know.</h2></div>
        <Link className="inline-flex min-h-[46px] items-center justify-center gap-[10px] border border-ink px-[17px] font-mono text-[11px] font-bold no-underline transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-surface hover:shadow-[3px_3px_0_#171714] max-[480px]:min-h-[39px] max-[480px]:px-[10px] max-[480px]:text-[9px]" href="/directory">See everyone <ArrowRight size={14} /></Link>
      </div>
      <CreativeGrid creatives={featured} badgeFor={(creative) => creative.label} />
    </section>
  );
}