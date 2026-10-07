import type { Creative } from "@/lib/creatives";
import CreativeCard from "@/components/creative-card";

type CreativeGridProps = {
  creatives: Creative[];
  badgeFor: (creative: Creative) => string;
  className?: string;
};

export default function CreativeGrid({ creatives, badgeFor, className = "" }: CreativeGridProps) {
  if (creatives.length === 0) {
    return (
      <div className="border border-dashed border-ink px-5 py-18 text-center">
        <h2 className="mb-2 mt-0 text-[23px] font-bold">No one by that name (yet).</h2>
        <p className="m-0 font-mono text-xs leading-[1.6] text-subtle">
          Try another search, or clear a filter and take another look.
        </p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-3 gap-4 max-tablet:grid-cols-2 max-mobile:grid-cols-1 max-mobile:gap-3 ${className}`}>
      {creatives.map((creative, index) => (
        <CreativeCard badge={badgeFor(creative)} creative={creative} index={index} key={creative.slug} />
      ))}
    </div>
  );
}