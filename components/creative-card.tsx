import Image from "next/image";
import Link from "next/link";
import type { Creative } from "@/lib/creatives";

type CreativeCardProps = {
  creative: Creative;
  index: number;
  badge: string;
};

export default function CreativeCard({ creative, index, badge }: CreativeCardProps) {
  return (
    <Link className="group min-w-0 border border-ink bg-surface no-underline transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-print" href={`/profile/${creative.slug}`}>
      <div className="relative h-[210px] overflow-hidden border-b border-ink bg-[#deddd4] max-[760px]:h-[190px] max-[480px]:h-[245px]">
        <Image className="size-full object-cover grayscale contrast-[1.05] transition duration-300 group-hover:scale-[1.035]" src={creative.photo} alt={`${creative.name}, ${creative.discipline}`} width={600} height={440} unoptimized loading={index === 0 ? "eager" : "lazy"} />
        <span className="absolute left-[10px] top-[10px] border border-ink bg-acid px-2 py-1.5 font-mono text-[9px] font-bold">NO. {String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="p-[15px]">
        <div className="flex items-start justify-between gap-[10px]">
          <div>
            <h3 className="m-0 text-lg font-bold leading-[1.1] tracking-[-.5px]">{creative.name}</h3>
            <p className="mb-0 mt-2 font-mono text-[10px] leading-[1.5] text-subtle">{creative.discipline}<br />{creative.location}</p>
          </div>
          <span className="max-w-[100px] border border-ink px-[7px] py-[5px] text-center font-mono text-[9px] leading-[1.1]">{badge}</span>
        </div>
      </div>
    </Link>
  );
}