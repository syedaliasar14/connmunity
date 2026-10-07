import { ArrowUpRight, MapPin } from "lucide-react";
import type { Creative } from "@/lib/creatives";

export default function ProfileDetails({ creative }: { creative: Creative }) {
  return (
    <div className="pt-1.75">
      <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase leading-[1.3]">
        <span className="inline-block size-2 rounded-full bg-poppy" />
        INDEPENDENT CREATIVE
      </span>
      <h1 className="mb-2 mt-3.25 text-[clamp(44px,6vw,68px)] font-bold leading-[.95] tracking-[-4px]">
        {creative.name}
      </h1>
      <p className="m-0 font-mono text-xs font-semibold leading-[1.7] text-[#4d4c46]">
        {creative.discipline}
      </p>
      <div className="my-5 flex flex-wrap gap-2">
        {[creative.location, creative.category, "OPEN TO COLLABS"].map((item, index) => (
          <span className="border border-ink px-2.25 py-1.75 font-mono text-[10px]" key={item}>
            {index === 0 && <MapPin className="mr-1.25 inline-block h-3 w-3 align-[-2px]" />}
            {item}
          </span>
        ))}
      </div>
      <p className="my-6 max-w-[510px] text-sm leading-[1.8] text-[#45443e]">
        {creative.bio}
      </p>
      <span className="font-mono text-[10px] font-semibold uppercase">
        FIND ME AROUND THE INTERNET
      </span>
      <div className="mt-6.25 flex flex-wrap gap-2.5">
        <a className="inline-flex min-h-11.5 items-center justify-center gap-2.5 border border-ink bg-ink px-4.25 font-mono text-[11px] font-bold text-white no-underline transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-acid hover:text-ink hover:shadow-[3px_3px_0_#171714]" href={`mailto:${creative.email}`}>
          Say hello <ArrowUpRight size={14} />
        </a>
        <a className="inline-flex min-h-11.5 items-center justify-center gap-2.5 border border-ink px-4.25 font-mono text-[11px] font-bold no-underline transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-surface hover:shadow-[3px_3px_0_#171714]"
          href={`https://instagram.com/${creative.instagram.replace("@", "")}`}
          target="_blank" rel="noreferrer"
        >
          {creative.instagram} <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}