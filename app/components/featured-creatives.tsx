import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CreativeGrid from "@/components/creative-grid";
import { creatives } from "@/lib/creatives";

export default function FeaturedCreatives() {
  const featured = creatives.slice(0, 3);

  return (
    <section className="py-12.5 pb-2">
      <div className="mb-6 flex items-end justify-between gap-4.5 max-mobile:items-start">
        <div>
          <span className="font-mono text-[10px] font-semibold uppercase leading-[1.3]">
            01 / fresh from the directory
          </span>
          <h2 className="mb-0 mt-2 text-[clamp(28px,4vw,42px)] font-bold leading-none tracking-[-2px]">
            People to know.
          </h2>
        </div>
        <Link className="inline-flex min-h-11.5 items-center justify-center gap-2.5 border border-ink px-4.25 font-mono text-[11px] font-bold no-underline transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-surface hover:shadow-[3px_3px_0_#171714] max-mobile:min-h-9.75 max-mobile:px-2.5 max-mobile:text-[9px]" href="/directory">
          See everyone <ArrowRight size={14} />
        </Link>
      </div>
      <CreativeGrid creatives={featured} badgeFor={(creative) => creative.label} />
    </section>
  );
}