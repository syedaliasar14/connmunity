export default function TickerBar() {
  return (
    <div className="overflow-hidden border-b border-ink bg-acid" aria-label="A directory of Connecticut creatives">
      <div className="flex w-max animate-ticker gap-6 py-3 font-mono text-[10px] font-bold uppercase leading-none" aria-hidden="true">
        {Array.from({ length: 2 }, (_, index) => (
          <span className="inline-flex items-center gap-6 after:text-poppy after:content-['✳']" key={index}>
            good people doing good work · made in connecticut · find your creative people ·
          </span>
        ))}
      </div>
    </div>
  );
}